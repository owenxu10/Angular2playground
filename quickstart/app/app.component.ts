import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1 data-step="1" data-intro="This is a tooltip!">Hello {{name}}</h1>
   `
})

export class AppComponent  { name = 'Angular';}

