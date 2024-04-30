import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
//import {MatGridListModule} from '@angular/material/grid-list';


// export interface Tile {
//   border: string;
//   color: string;
//   cols: number;
//   rows: number;
//   text: string;
// }

@Component({
  selector: 'app-grip-buttons',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './grip-buttons.component.html',
  styleUrl: './grip-buttons.component.scss'
})
export class GripButtonsComponent {

  // tiles: Tile[] = [
  //   {text: 'One', cols: 3, rows: 1, color: 'lightblue', border: '#fff'},
  //   {text: 'Two', cols: 1, rows: 2, color: 'lightgreen', border: '#fff'},
  //   {text: 'Three', cols: 1, rows: 1, color: 'lightpink', border: '#fff'},
  //   {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1', border: '#fff'},
  // ];

}
