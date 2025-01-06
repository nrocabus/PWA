import { Component, Input } from '@angular/core';
import { Artwork } from 'src/app/models/artwork.interface';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {    
  @Input() artwork: Artwork[] = [];  
  displayedColumns: string[] = ['title', 'artist', 'detail'];
}
