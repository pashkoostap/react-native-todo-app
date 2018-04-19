import { firebaseDB } from "../utils/firebase";

export const fetchTodos = firebaseDB.ref("todos").once("value");
export const createTodo = todo => firebaseDB.ref("/todos/" + todo.id).set(todo);
