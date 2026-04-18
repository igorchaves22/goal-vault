import { randomPositiveInt } from "../utils/global";

export const generateId = (existingIds: number[] = []) => {
    const existingSet = new Set(existingIds);
    let id: number;

    do {
        id = randomPositiveInt();
    } while (existingSet.has(id));

    return id;
};
