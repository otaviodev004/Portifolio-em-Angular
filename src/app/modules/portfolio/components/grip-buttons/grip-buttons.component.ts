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
  
}
