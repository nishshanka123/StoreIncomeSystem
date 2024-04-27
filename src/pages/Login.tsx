import { IonButton, IonCard, IonCardContent, IonContent, IonFooter, IonHeader, IonInput, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const Login: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color={"secondary"}>
                    <IonTitle>Login</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding" color={"light"}>
                <IonCard>
                    <IonCardContent>
                        <form onSubmit={"RequestLogin()"}>
                            <IonInput fill='outline' labelPlacement='floating' label='Email' type='email'></IonInput>
                            <IonInput className="ion-margin-top" fill='outline' labelPlacement='floating' label='Password' type='password'></IonInput>
                            <IonButton className='ion-margin-top' type='submit'>Login</IonButton>
                            <IonButton routerLink='/registeruser' className='ion-margin-top' type='button' color={"secondary"}>Register New User</IonButton>
                            <IonButton routerLink='/expensemanage' className='ion-margin-top' type='button' color={"secondary"}>Manage Expense</IonButton>
                        </form>
                    </IonCardContent>
                </IonCard>                
            </IonContent>
            <IonFooter>
                <IonToolbar color={"tertiary"}>copyright@nish</IonToolbar>
            </IonFooter>
        </IonPage>
    );
};

export default Login;
