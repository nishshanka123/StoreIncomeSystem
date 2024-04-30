import { IonButton, IonButtons, isPlatform } from '@ionic/react';

import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';


import { IonContent, IonFooter, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

import { usePhotoGallery } from '../hooks/usePhotoGallery';

const UploadBill: React.FC = () => {
    const capturePhotoxxx = async () => {
        const { takePhoto } = usePhotoGallery();
    };

    const { takePhoto } = usePhotoGallery(); // Get the takePhoto function from the hook

    const capturePhoto = async () => {
        try {
            const photo = await takePhoto(); // Call the takePhoto function
            console.log("Photo captured:", photo); // Log the captured photo
        } catch (error) {
            console.error("Error capturing photo:", error); // Log any errors
        }
    };



    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color={"secondary"}>
                    <IonTitle>Capture a Bill</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonContent>
                    <h3>Capture a photo of the bill</h3>
                
                    {/*<IonButtons>*/}                        
                        <IonButton onClick={capturePhoto} expand="block" className='ion-margin-top' type='button' color={"secondary"}>
                            Capture Photo
                        </IonButton>
                        <IonButton expand="block" className='ion-margin-top' type='button' color={"secondary"}>
                            Upload a Bill
                        </IonButton>
                        <IonButton expand="block" routerLink='/' className='ion-margin-top' type='button' color={"secondary"}>
                            Home
                        </IonButton>
                    {/*</IonButtons>*/}

                </IonContent>
            </IonContent>
            <IonFooter>
                <IonToolbar color={"tertiary"}><center>Reach me nishshanka123@gmail.com</center></IonToolbar>
            </IonFooter>
        </IonPage>
    );
};

export default UploadBill;