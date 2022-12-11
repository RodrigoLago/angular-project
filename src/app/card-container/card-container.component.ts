import { Component, OnInit } from '@angular/core';

interface Carta{
  title:string;
  description:string;
}

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.css']
})

export class CardContainerComponent implements OnInit{
  public ArrayCards:Carta[]=[];
  constructor(){
  }
  
  ngOnInit(): void{
    this.ArrayCards =[
      {title:"Titulo 1",description:"Primera descripcion"},
      {title:"Titulo 2",description:"Segunda descripcion"},
      {title:"Titulo 3",description:"Tercera descripcion"},
      {title:"Titulo 4",description:"Cuarta descripcion"},
      {title:"Titulo 5",description:"Quinta descripcion"}
    ]
  }

}
