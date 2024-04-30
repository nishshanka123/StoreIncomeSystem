import { IonButton, IonContent, IonFooter, IonHeader, IonImg, IonInput, IonPage, IonSelect, IonSelectOption, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';


const NewExpense: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Create new NewExpense</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <form>
                <IonInput fill='outline' labelPlacement='floating' label='Expense Name' type='text' required></IonInput>
                <IonTextarea aria-expanded className="ion-margin-top" fill='outline' labelPlacement='floating' label='Description' required></IonTextarea>
                <IonSelect className="ion-margin-top" fill='outline' labelPlacement='floating' label='Type'>
                    <IonSelectOption value={"type1"}>Buy Stock</IonSelectOption>
                    <IonSelectOption value={"type2"}>Salary Payment</IonSelectOption>
                    <IonSelectOption value={"type3"}>Loan Repayment</IonSelectOption>
                </IonSelect>
                <IonInput className="ion-margin-top" fill='outline' labelPlacement='floating' label='Amount' type='number' required></IonInput>
                <IonInput className="ion-margin-top" fill='outline' labelPlacement='floating' label='Recipt' type='text'></IonInput>
                <IonButton expand="block" className='ion-margin-top' type='submit'>Add</IonButton>
                <IonButton expand="block" className='ion-margin-top' type='reset'>Clear</IonButton>
                <IonButton expand="block" routerLink='/expensemanage' className='ion-margin-top' type='button' color={"secondary"}>Add New Expense</IonButton>
                </form>
            </IonContent>
            <IonFooter>
                <IonToolbar color={"tertiary"}>copyright@nish</IonToolbar>
            </IonFooter>
        </IonPage>
    );
};

export default NewExpense;