import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CarteVisite } from './model/carte.model';

@Component({
  selector: 'app-carte-visite',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './carte-visite.component.html',
  styleUrl: './carte-visite.component.css'
})
export class CarteVisiteComponent implements OnInit {
  nom="";
  prenom="";
  entreprise="";
  email="";
  telephone="";
  carte:CarteVisite = {
    nom:this.nom,
    prenom:this.prenom,
    entreprise:this.entreprise,
    email:this.email, 
    telephone:this.telephone
  }

  ngOnInit(): void {
    //this.updateCard()
  }

  updateCard():void{
    this.carte ={
      nom:this.nom,
      prenom:this.prenom,
      entreprise:this.entreprise,
      email:this.email, 
      telephone:this.telephone
    }
  }

}
