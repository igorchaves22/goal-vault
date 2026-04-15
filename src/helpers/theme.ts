import { THEME_MODE_LOCALSTORAGE_KEY } from "~constants";
import type { ThemeMode } from "~types";
import { getLocalStorageItem, setLocalStorageItem } from "~utils";

export const setThemeModeToLocalStorage = (value: ThemeMode) => setLocalStorageItem(THEME_MODE_LOCALSTORAGE_KEY, value);

export const getThemeModeFromLocalStorage = () => getLocalStorageItem<ThemeMode>(THEME_MODE_LOCALSTORAGE_KEY);
