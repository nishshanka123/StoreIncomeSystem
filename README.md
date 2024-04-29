# StoreIncomeSystem
This repository is to maintain source code for a Store Income System for a small or medioum range stoles

Steps:
1. install ionic command line interface "npm i -g @ionic/cli
2. ionic start <app name> <templete> --type react/angular/etc.
    ionic start StoreIncomeSystem blank --type=react
3. ionic serve
4. install capacitor 
    >>> wrap the web app to ios or android native app
5. add the android build
    ionic cap add anroid 
6. Build the web project
    npm run build
7. Build the capacitor android
    ionic capacitor build android 
    // this will launch the android studio also, else open the android project in android studio
    -> sync the android build after web changes
        npx cap sync android
8. 