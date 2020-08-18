import { Storage } from '@ionic/storage';
import { PersistStateStorage } from '@datorama/akita/src/persistState';

export class IonicStorage implements PersistStateStorage {
    
    private _storage: Storage

    constructor() {
        this._storage = new Storage({
            name: 'Akita-Navigation',
            version: 1.0,
            storeName: 'akita-navigation-storage',
            driverOrder: ['indexeddb', 'sqlite', 'localstorage', 'websql']
        })
    }
    
    getItem(key: string) {
        return this._storage.get(key)
    }

    setItem(key: string, value: any) {
        this._storage.set(key, value)
    }

    clear() {
        this._storage.clear()
    }
}
