// nel json abbiamo la base dati
// creazione interfaccia per definire gli oggetti che manipoleranno la base dati
// creazione service per esporre e dichiarare i metodi
// component.ts importa e usa e metodi
import { Component } from '@angular/core';
// importo interfaccia e service
import { TodoList } from './interface/todo-list';
import { recupera, recuperaAxios } from './service/todo-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'es1';
  elencoTodo!: TodoList[]; // dichiaro variabile array elenco todo

  // recupero array e mando in clg
  constructor(){
    recupera().then((risposta) => {
      console.log(risposta);
      this.elencoTodo = risposta;
      this.completa()
      console.log(this.elencoTodo);

    })

    // aggiungo metodo recuperaAxios
    recuperaAxios().then((risposta) => {
      console.log(risposta);
      this.elencoTodo = risposta;
      this.completa()
      console.log(this.elencoTodo);

    })
  }
// metodo che imposta tutti i todo a true
  completa(){
    this.elencoTodo = this.elencoTodo.map(elenco => {
      // mappa l'array, lo mette in una variabile elenco, restituendo un nuovo array, ma mettendo completato su true
      return {...elenco, completato: true}
    })
  }
}
