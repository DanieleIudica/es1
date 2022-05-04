// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class TodoListService {

//   constructor() { }
// }

import { TodoList } from "../interface/todo-list";
// importazione libreria axios
import axios from "axios";
// metti a disposizione il metodo recupera, che dovra' restituire (in maniera async) un array di oggetti fatti come specificato in TodoList, prendendo i dati dal json
export async function recupera(): Promise<TodoList[]> {
  return await (await fetch('assets/db.json')).json()
}

// recupera axios, in questo caso basta un await, perche' uno lo gestisce axios
export async function recuperaAxios(): Promise<TodoList[]> {
  const risposta = (await axios.get<TodoList[]>('assets/db.json')).data;
  return risposta;
}

// creato cartella, click destro, generate a service, add options, spunta skip test, conferma
// un service deve essere iniettabile e fungere da dipendenza a livello di root
// i service definiscono i metodi
// dinamici possono dare piu risposte alla stessa domanda
// statici solo una risposta ad ogni domanda

// indicazione per il progetto settimanale:
// una repo per ogni progetto: FE0122A-progetto-settimana-9

// commit progetto angular:
// cartella src + file sciolti

