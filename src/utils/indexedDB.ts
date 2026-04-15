export const openIndexedDB = (name: string, version: number, storeNames: string[]) =>
    new Promise<IDBDatabase>((resolve, reject) => {
        const request = indexedDB.open(name, version);

        request.onupgradeneeded = (event) => {
            const db = (event.target as IDBOpenDBRequest).result;

            for (const storeName of storeNames) {
                if (!db.objectStoreNames.contains(storeName)) db.createObjectStore(storeName);
            }
        };
        request.onsuccess = (event) => resolve((event.target as IDBOpenDBRequest).result);
        request.onerror = (event) => reject((event.target as IDBOpenDBRequest).error);
    });

export const setIndexedDBItem = <T>(db: IDBDatabase, storeName: string, key: string, value: T) =>
    new Promise<void>((resolve, reject) => {
        const transaction = db.transaction(storeName, "readwrite");
        const store = transaction.objectStore(storeName);
        const request = store.put(value, key);

        request.onsuccess = () => resolve();
        request.onerror = (event) => reject((event.target as IDBRequest).error);
    });

export const getIndexedDBItem = <T>(db: IDBDatabase, storeName: string, key: string) =>
    new Promise<T | null>((resolve, reject) => {
        const transaction = db.transaction(storeName, "readonly");
        const store = transaction.objectStore(storeName);
        const request = store.get(key);

        request.onsuccess = (event) => {
            const result = (event.target as IDBRequest).result;
            resolve(result !== undefined ? (result as T) : null);
        };

        request.onerror = (event) => reject((event.target as IDBRequest).error);
    });

export const removeIndexedDBItem = (db: IDBDatabase, storeName: string, key: string) =>
    new Promise<void>((resolve, reject) => {
        const transaction = db.transaction(storeName, "readwrite");
        const store = transaction.objectStore(storeName);
        const request = store.delete(key);

        request.onsuccess = () => resolve();
        request.onerror = (event) => reject((event.target as IDBRequest).error);
    });

export const clearIndexedDB = (db: IDBDatabase, storeName: string) =>
    new Promise<void>((resolve, reject) => {
        const transaction = db.transaction(storeName, "readwrite");
        const store = transaction.objectStore(storeName);
        const request = store.clear();

        request.onsuccess = () => resolve();
        request.onerror = (event) => reject((event.target as IDBRequest).error);
    });
