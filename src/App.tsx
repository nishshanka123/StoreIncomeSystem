import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
import Login from './pages/Login';
import UploadBill from './pages/UploadBill';
import NewExpense from './pages/NewExpense';
import AddExpense from './pages/AddExpense'
import ViewExpense from './pages/ViewExpense';
import Home from './pages/Home';


setupIonicReact();

/*const App: React.FC = () => {

  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/AddExpense">
            <AddExpense />
          </Route>
          <Route exact path="/">
            <Redirect to="/AddExpense" />
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};*/

const App: React.FC = () => {
//const App: React.FC = () => (
  return (
    /*<IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/sqlitedemo">
            <Redirect to="/SQLiteDemo" />
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>*/
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/">
            <Home />
          </Route>
          <Route component={UploadBill} path={"/registeruser"}>
            <UploadBill/>
          </Route>
          <Route component={NewExpense} path={"/expensemanage"}>
            <NewExpense/>
          </Route>
          <Route component={AddExpense} path={"/addexpense"}>
            <AddExpense/>
          </Route>
          <Route component={ViewExpense} path={"/viewexpenses"}>
            <ViewExpense/>
          </Route>
          <Route component={UploadBill} path={"/uploadbill"}>
            <UploadBill/>
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
    /*<IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/">
            <SQLiteDemo />
          </Route>
          <Route component={SQLiteDemo} path={"/sqlitedemo"}>
            
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>*/
  );
}

export default App;
