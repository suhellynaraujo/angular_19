import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ItemLista} from './itemLista'
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-listacompras',
  imports: [FormsModule, CommonModule],
  templateUrl: './listacompras.component.html',
  styleUrl: './listacompras.component.css'
})
export class ListacomprasComponent {
  item: string = '';
  lista: ItemLista[] = []; //declaração de um array de itemlista
 // usar o this para membros/propriedades da clase
 //
  adicionarItem(){
    //console.log("Item Recebido: ", this.item);
   let itemLista = new ItemLista(); //decaração de variave loca
   itemLista.nome = this.item; //nome digitado na variavel, atribuindo a ista
   itemLista.id = this.lista.length + 1; // pega a lista pelo tamanho, incrementando mais um
   this.lista.push(itemLista); // adiciona eemento no array
   this.item = ''; //impa o formulário

   //console.table(this.lista) //imprime uma array

  }
  riscarItem(itemLista: ItemLista){
    itemLista.comprado = !itemLista.comprado;
  }

  limparLista(){
    this.lista = [];
  }
}
