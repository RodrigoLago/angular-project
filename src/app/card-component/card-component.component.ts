import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.css']
})

export class CardComponentComponent implements OnInit{
  @Input()title:String;
  @Input()description:String;
  @Input()card_image:String;
  @Input()writer:String;

  constructor(){
    this.title = "Titulo generico";
    this.description = "Descripcion generica"
    this.card_image = "Imagen generica"
    this.writer = "Nombre de escritor generico"
   }
   ngOnInit(): void {
     
   }
}
