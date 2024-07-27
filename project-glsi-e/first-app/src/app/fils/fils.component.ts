import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-fils',
  standalone: true,
  imports: [],
  templateUrl: './fils.component.html',
  styleUrl: './fils.component.css'
})
export class FilsComponent {
@Input() data:string|undefined;

value=0
@Output() valueChanged=new EventEmitter()

incrementValue(){
  this.value++;
  this.valueChanged.emit(this.value)

}
}
