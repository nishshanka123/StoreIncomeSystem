import {
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonContent,
  IonItem,
  IonInput,
  IonButton,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonTextarea,
  IonFooter,
  IonImg,
  IonCard
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import "./Home.css";
import { SQLiteDBConnection } from "@capacitor-community/sqlite";
import useSQLiteDB from "../composables/useSQLiteDB";
import useConfirmationAlert from "../composables/useConfirmationAlert";

type SQLItem = {
  id: number;
  name: string;
};

type SQLData = {
  ref: string;
  reason: string;
  type: string;
  amount: number;
  receiptPath: string;
};

const AddExpense: React.FC = () => {
  const [editItem, setEditItem] = useState<any>();
  const [items, setItems] = useState<Array<SQLItem>>();
  const [DBdata, setDBdata] = useState<Array<SQLData>>();

  // Define state variables to hold form input values
  const [inputName, setInputName] = useState('');
  const [inputReason, setInputReason] = useState('');
  const [inputType, setInputType] = useState('');
  const [inputAmount, setInputAmount] = useState('');
  const [inputReceipt, setInputReceipt] = useState('');

  // use the created hook for SQLite Database
  const { performSQLAction, initialized } = useSQLiteDB();

  // to show the confirmation dialog. uses the hook from useConfirmationAlert
  const { showConfirmationAlert, ConfirmationAlert } = useConfirmationAlert();

  useEffect(() => {
    loadData();
  }, [initialized]);

  /**
   * do a select of the database
   */
  const loadData = async () => {
    try {
      // query db
      performSQLAction(async (db: SQLiteDBConnection | undefined) => {
        const respSelect = await db?.query(`SELECT * FROM expense`);
        //setItems(respSelect?.values);
        setDBdata(respSelect?.values);
        console.log("------values: ", respSelect?.values);
        console.log("------response:", respSelect);
        console.log("------Data: ", DBdata);
      });
    } catch (error) {
      alert((error as Error).message);
      setDBdata([]);
    }
  };

  const updateItem = async () => {
    try {
      // add test record to db
      performSQLAction(
        async (db: SQLiteDBConnection | undefined) => {
          await db?.query(`UPDATE test SET name=? WHERE id=?`, [
            inputName,
            editItem?.id,
          ]);

          // update ui
          const respSelect = await db?.query(`SELECT * FROM test;`);
          setItems(respSelect?.values);
        },
        async () => {
          setInputName("");
          setEditItem(undefined);
        }
      );
    } catch (error) {
      alert((error as Error).message);
    }
  };

  const addItem = async () => {

    // Access form input values from state variables
    const formData = {
      ref: inputName,
      reason: inputReason,
      type: inputType,
      amount: inputAmount,
      receipt: inputReceipt
    };

    // Perform any necessary processing or validation on the form data

    // Submit the form data to a backend server or perform other actions
    console.log('Form data:', formData);

    try {
      // add test record to db
      //INSERT INTO expense (reference,reason,type,amount,receiptPath) vlues (?,?,?,?,?)
      performSQLAction(
        async (db: SQLiteDBConnection | undefined) => {
          await db?.query(`INSERT INTO expense (reference,reason,type,amount,receiptPath) values (?,?,?,?,?);`, 
          [ formData['ref'], 
            formData['reason'], 
            formData['type'], 
            formData['amount'], 
            formData['receipt']
          ]);

          // update ui
          //const respSelect = await db?.query(`SELECT * FROM test;`);
          //setItems(respSelect?.values);
        },
        async () => {
          setInputName("");
        }
      );
    } catch (error) {
      alert((error as Error).message);
    }
  };

  const confirmDelete = (itemId: number) => {
    showConfirmationAlert("Are You Sure You Want To Delete This Item?", () => {
      deleteItem(itemId);
    });
  };

  const deleteItem = async (itemId: number) => {
    try {
      // add test record to db
      performSQLAction(
        async (db: SQLiteDBConnection | undefined) => {
          await db?.query(`DELETE FROM test WHERE id=?;`, [itemId]);

          // update ui
          const respSelect = await db?.query(`SELECT * FROM expense;`);
          setItems(respSelect?.values);
        },
        async () => {
          setInputName("");
        }
      );
    } catch (error) {
      alert((error as Error).message);
    }
  };

  const doEditItem = (item: SQLItem | undefined) => {
    if (item) {
      setEditItem(item);
      setInputName(item.name);
    } else {
      setEditItem(undefined);
      setInputName("");
    }
  };

  /*return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="IonTitle">Add New Store Expense</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
                    
      <form onSubmit={addItem}>
        <IonInput 
          className="ion-margin-top" 
          fill='outline' 
          labelPlacement='floating' 
          label='Expense Name' 
          type='text' 
          value={inputName} 
          onIonChange={(e) => setInputName(e.detail.value!)} 
          required
        ></IonInput>
        <IonInput 
          className="ion-margin-top" 
          fill='outline' 
          labelPlacement='floating' 
          label='Reason' 
          value={inputReason} 
          onIonChange={(e) => setInputReason(e.detail.value!)} 
          required
        ></IonInput>
        <IonSelect 
          className="ion-margin-top" 
          fill='outline' 
          labelPlacement='floating' 
          label='Type'
          value={inputType} 
          onIonChange={(e) => setInputType(e.detail.value)}
          required>
          <IonSelectOption value={"type1"}>Buy Stock</IonSelectOption>
          <IonSelectOption value={"type2"}>Salary Payment</IonSelectOption>
          <IonSelectOption value={"type3"}>Loan Repayment</IonSelectOption>
        </IonSelect>
        <IonInput 
          className="ion-margin-top" 
          fill='outline' 
          labelPlacement='floating' 
          label='Amount' 
          type='number' 
          value={inputAmount} 
          onIonChange={(e) => setInputAmount(e.detail.value!)} 
          required
        ></IonInput>
        <IonInput 
          className="ion-margin-top" 
          fill='outline' 
          labelPlacement='floating' 
          label='Receipt' 
          type='text' 
          value={inputReceipt} 
          onIonChange={(e) => setInputReceipt(e.detail.value!)}
        ></IonInput>
        <IonButton expand="block" className='ion-margin-top' type='submit'>Add</IonButton>
        <IonButton expand="block" className='ion-margin-top' type='reset'>Clear</IonButton>
        <IonButton expand="block" routerLink='/expensemanage' className='ion-margin-top' type='button' color={"secondary"}>Add New Expense</IonButton>
      </form>
      </IonContent>
    </IonPage>
  );*/

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={"secondary"}>
          <IonTitle>Add New Expense</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <form>
          <IonInput 
              className="ion-margin-top" 
              fill='outline' 
              labelPlacement='floating' 
              label='Expense Name' 
              type='text' 
              value={inputName} 
              onIonInput={(e) => setInputName(e.detail.value!)} 
              required ></IonInput>
            <IonInput 
              className="ion-margin-top" 
              fill='outline' 
              labelPlacement='floating' 
              label='Reason' 
              value={inputReason} 
              onIonInput={(e) => setInputReason(e.detail.value!)} 
              required ></IonInput>
            <IonSelect 
              className="ion-margin-top" 
              fill='outline' 
              labelPlacement='floating' 
              label='Type'
              value={inputType} 
              onIonChange={(e) => setInputType(e.detail.value)}>
              <IonSelectOption value={"type1"}>Buy Stock</IonSelectOption>
              <IonSelectOption value={"type2"}>Salary Payment</IonSelectOption>
              <IonSelectOption value={"type3"}>Loan Repayment</IonSelectOption>
            </IonSelect>
            <IonInput 
              className="ion-margin-top" 
              fill='outline' 
              labelPlacement='floating' 
              label='Amount' 
              type='number' 
              value={inputAmount} 
              onIonInput={(e) => setInputAmount(e.detail.value!)} 
              required ></IonInput>
            <IonInput 
              className="ion-margin-top" 
              fill='outline' 
              labelPlacement='floating' 
              label='Receipt' 
              type='text' 
              value={inputReceipt} 
              onIonInput={(e) => setInputReceipt(e.detail.value!)} ></IonInput>
            <IonButton expand="block" className='ion-margin-top' onClick={addItem} >Add</IonButton>
            <IonButton expand="block" className='ion-margin-top' type='reset'>Clear</IonButton>
            <IonButton expand="block" routerLink='/ViewExpense' className='ion-margin-top' type='button' color={"secondary"}>View Expenses</IonButton>
            <IonButton expand="block" routerLink='/' className='ion-margin-top' type='button' color={"secondary"}>Home</IonButton>
        </form>

        {ConfirmationAlert}
      </IonContent>
      <IonFooter>
        <IonToolbar color={"tertiary"}>&nbsp;Keeping touch with nishshanka123@gmail.com</IonToolbar>
      </IonFooter>
    </IonPage>
  );

};

export default AddExpense;
