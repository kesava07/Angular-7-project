import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedLink = 'recipe';
  onSelectLink(link: string) {
    this.selectedLink = link;
  }

}
