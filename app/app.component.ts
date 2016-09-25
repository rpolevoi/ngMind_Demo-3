import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'root',
  template: `<h1 [style.color]="myColor">This is {{name}}'s {{myColor}} root component</h1>`,
  styleUrls: ['app.component.css']
})
export class AppComponent {
    name = "Rob";
    myColor = 'red';
}
