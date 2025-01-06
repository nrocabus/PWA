import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Artwork } from 'src/app/models/artwork.interface';
import { artworkService } from 'src/app/sevices/artworks.service';

@Component({
  selector: 'app-component-detail',
  templateUrl: './component-detail.component.html',
  styleUrls: ['./component-detail.component.css']
})
export class ComponentDetailComponent implements OnInit{

  artwork!: Artwork;
  showDetails: boolean = false;

  constructor(
    private artworkService: artworkService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
    const identifier = this.activatedRoute.snapshot.paramMap.get('id');
    this.artworkService.getArtworkById(identifier).subscribe((artwork)=>this.artwork = artwork)
  }

  toggleDetails(){
    this.showDetails = true;
  }

}
 