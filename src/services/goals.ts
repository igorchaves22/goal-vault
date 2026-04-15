import { GOALS_DB_KEYS, GOALS_DB_NAME, GOALS_DB_STORE_NAMES, GOALS_DB_VERSION } from "~constants";
import type { GoalsState } from "~types";
import { getIndexedDBItem, openIndexedDB, setIndexedDBItem } from "~utils";

export const openGoalsDB = () => {
    const dbNames = Object.values(GOALS_DB_STORE_NAMES);

    return openIndexedDB(GOALS_DB_NAME, GOALS_DB_VERSION, [...dbNames]);
};

export const setGoalsToDB = <K extends keyof GoalsState["data"]>(
    db: IDBDatabase,
    storeName: K,
    data: GoalsState["data"][K]
) => setIndexedDBItem(db, GOALS_DB_STORE_NAMES[storeName], GOALS_DB_KEYS[storeName], data);

export const getGoalsFromDB = <K extends keyof GoalsState["data"]>(db: IDBDatabase, storeName: K) =>
    getIndexedDBItem<GoalsState["data"][K]>(db, GOALS_DB_STORE_NAMES[storeName], GOALS_DB_KEYS[storeName]);
