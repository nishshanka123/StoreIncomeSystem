import { IonContent, IonFooter, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Store Income System</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Store Income System</IonTitle>
          </IonToolbar>
        </IonHeader>
        How saad...This is my store income application.
        <ExploreContainer />
      </IonContent>
      <IonFooter>
        <p>contact me at nishshanka123@gmail.com</p>
      </IonFooter>
    </IonPage>
  );
};

export default Home;
