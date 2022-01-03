import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'store';

  items = ['Jorge', 'Anyela', 'Yasmin'];
  
  addItem(){
    this.items.push('nuevo item');
  }

  deleteItem(index:number){
    this.items.splice(index, 1);
  }
}
