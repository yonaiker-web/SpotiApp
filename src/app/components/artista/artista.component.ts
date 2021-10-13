import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';



@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
})
export class ArtistaComponent {

  artista: any = {};
  toptracks: any[] = [];
  loading: boolean;
  
  constructor( private route: ActivatedRoute,
                private  spotify: SpotifyService) {

    this.loading = true;

    this.route.params.subscribe( params => {
      
      this.getArtista( params['id']);
      this.getTopTracks( params['id']);
      
    });

   }

  getArtista( id: string ){
    this.spotify.getArtista( id )
        .subscribe( artista => {
          console.log(artista);
          this.artista = artista;
          this.loading = false;
        });
  }


  getTopTracks( id: string ){
    this.spotify.getTopTracks( id )
          .subscribe( topTracks => {
            console.log(topTracks)
            this.toptracks = topTracks;
          });
  }
}
