import { Component, OnInit } from '@angular/core';
import { Artwork } from 'src/app/models/artwork.interface';
import { artworkService } from 'src/app/sevices/artworks.service';

@Component({
  selector: 'app-component-list',
  templateUrl: './component-list.component.html',
  styleUrls: ['./component-list.component.css']
})
export class ComponentListComponent implements OnInit {
  artwork: Artwork[] = [];
  displayedColumns = ["title", "artist", "detail"] 
  showTable: boolean = false;

  constructor(
    private artworkService: artworkService
  ){}
  
  ngOnInit(): void {
    this.artworkService.getAllArtwork().subscribe((artwork)=>this.artwork = artwork)
  }

  changeView(type: string){
    type=="grid"?this.showTable=false:this.showTable=true;
  }
}
 