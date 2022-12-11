import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.css']
})

export class CardComponentComponent implements OnInit{
  @Input()title:String;
  @Input()description:String;
 
  constructor(){
    this.title = "Titulo generico";
    this.description = "Descripcion generica"
   }
   ngOnInit(): void {
     
   }
}
