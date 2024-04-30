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
    IonCard,
    IonGrid,
    IonCol,
    IonIcon,
    IonButtons
} from "@ionic/react";
import {cogSharp, hammerOutline, trash, trashBinOutline} from 'ionicons/icons';
import React, { useEffect, useState } from "react";
import "./Home.css";
import { SQLiteDBConnection } from "@capacitor-community/sqlite";
import useSQLiteDB from "../composables/useSQLiteDB";
import useConfirmationAlert from "../composables/useConfirmationAlert";

type SQLData = {
    reference: string;
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
                setDBdata(respSelect?.values);
                //console.log("------values: ", respSelect?.values);
                //console.log("------response:", respSelect);
                //console.log("------Data: ", DBdata);
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
    
      const deleteItem = async (refNo: string) => {
        try {
          // add test record to db
          performSQLAction(
            async (db: SQLiteDBConnection | undefined) => {
              await db?.query(`DELETE FROM expense WHERE reference=?;`, [refNo]);
    
              // update ui
              const respSelect = await db?.query(`SELECT * FROM expense;`);
              setDBdata(respSelect?.values);
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
          setInputName(item.reference);
        } else {
          setEditItem(undefined);
          setInputName("");
        }
      };

    //console.log("test------Data: ", DBdata);
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color={"secondary"}>
                    <IonTitle>View Expenses</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <h3>Store Expenses</h3>
                <table>
                <thead>
                  <tr>
                    <th><center>Ref No</center></th>
                    <th><center>Reason</center></th>
                    <th><center>Type</center></th>
                    <th><center>Amount</center></th>
                    <th align="center"><center>Action</center></th>
                  </tr>
                </thead>
                <tbody>
                {DBdata?.map((data,ref) => (
                    <tr key={ref}>                   
                      <td>{data.reference}</td>
                      <td>{data.reason}</td>
                      <td>{data.type}</td>
                      <td>{data.amount}</td>
                      <td>
                        <IonButtons slot="end">
                          <IonButton size="small" onClick={() => doEditItem(data)}>
                          <IonIcon icon={hammerOutline}></IonIcon>
                          </IonButton>
                          <IonButton size="small" color={"light"} onClick={() => confirmDelete(data.reference)}>
                            <IonIcon icon={trashBinOutline} color={"danger"}></IonIcon>
                          </IonButton>
                        </IonButtons>
                      </td>
                    </tr>
                  ))}
                  {ConfirmationAlert}
                </tbody>
              </table>

                <IonButton expand="block" routerLink='/' className='ion-margin-top' type='button' color={"secondary"}>Home</IonButton>
            </IonContent>
            <IonFooter>
              <IonToolbar color={"tertiary"}><center>Reach me nishshanka123@gmail.com</center></IonToolbar>
            </IonFooter>
        </IonPage>
    );
};

export default ViewExpense;