import { firebaseDB } from "../utils/firebase";

export const fetchTodos = firebaseDB.ref("/todos").once("value");
