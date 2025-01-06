import { TestBed } from '@angular/core/testing';

import { artworkService } from './artwork.service';

describe('artworkService', () => {
  let service: artworkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(artworkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
