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

type SQLData = {
    ref: string;
    reason: string;
    type: string;
    amount: number;
    receiptPath: string;
};

type SQLItem = {
    id: number;
    name: string;
  };

const ViewExpense: React.FC = () => {

    const [DBdata, setDBdata] = useState<Array<SQLData>>();
    const [editItem, setEditItem] = useState<any>();
    const [items, setItems] = useState<Array<SQLItem>>();


    // Define state variables to hold form input values
    const [inputName, setInputName] = useState('');
    const [inputReason, setInputReason] = useState('');
    const [inputType, setInputType] = useState('');
    const [inputAmount, setInputAmount] = useState('');
    const [inputReceipt, setInputReceipt] = useState('');

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


    const confirmDelete = (itemId: string) => {
        showConfirmationAlert("Are You Sure You Want To Delete This Item?", () => {
          deleteItem(itemId);
        });
      };
    
      const deleteItem = async (itemId: string) => {
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
    
      const doEditItem = (item: SQLData | undefined) => {
        if (item) {
          setEditItem(item);
          setInputName(item.ref);
        } else {
          setEditItem(undefined);
          setInputName("");
        }
      };


    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>View Expenses</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <h3>THE SQLITE DATA</h3>

                {DBdata?.map((data) => (
                <IonItem key={data.ref}>
                    <IonLabel className="ion-text-wrap">{data.reason}</IonLabel>
                    <IonButton onClick={() => doEditItem(data)}>EDIT</IonButton>
                    <IonButton onClick={() => confirmDelete(data.ref)}>DELETE</IonButton>
                </IonItem>
                ))}
                <IonButton expand="block" routerLink='/' className='ion-margin-top' type='button' color={"secondary"}>Home</IonButton>
            </IonContent>
        </IonPage>
    );
};

export default ViewExpense;