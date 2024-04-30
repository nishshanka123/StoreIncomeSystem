import { useEffect, useState } from 'react';
import { Storage } from '@ionic/storage';


export function useStorage()
{
    const [store, setStore]=useState<Storage>();
    useEffect(()=> {
        const initStorage = async()=>{
            const newStore = new Storage();
            const dataStore = await newStore.create();
            setStore(dataStore);
        }
        initStorage();
    }, [])
}

