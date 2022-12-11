import { Component, OnInit } from '@angular/core';

interface Carta{
  image:string;
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
      {title:"Titulo 1",description:"Primera descripcion",image:"Image1 src"},
      {title:"Titulo 2",description:"Segunda descripcion",image:"Image2 src"},
      {title:"Titulo 3",description:"Tercera descripcion",image:"Image3 src"},
      {title:"Titulo 4",description:"Cuarta descripcion",image:"Image4 src"},
      {title:"Titulo 5",description:"Quinta descripcion",image:"Image5 src"}
    ]
  }
}
