import { Component, Input } from '@angular/core';
import { Artwork } from 'src/app/models/artwork.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() artwork!: Artwork;
}
