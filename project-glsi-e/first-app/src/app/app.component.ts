import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { FilsComponent } from './fils/fils.component';
import { CarteVisiteComponent } from './carte-visite/carte-visite.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,FilsComponent,CarteVisiteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hello team ';
  countNum = 1;
  color = 'vert';
  nom="med amine";
  surname="med amine";
  magic=''
  age="25"
  adresse='los angelos america '
  rsult=0

  showValue(value:any){
    this.rsult = value;
  }
  getName(){
    return this.nom;
  }

  getSuName(){
    return this.surname;
  }

  updateName(newName:string){
    console.log(newName)
   this.surname = newName.toString();
   console.log(this.nom)
  }



  count(){
    this.countNum++;
  }
}
