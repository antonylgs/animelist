import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [],
})
export class AboutComponent {
  anime: any;

  constructor(private http: HttpClient) {
    this.getFavAnime();
  }

  getFavAnime() {
    this.http.get('https://api.jikan.moe/v4/anime').subscribe((data: any) => {
      this.anime = data.data.filter((anime: any) => anime.mal_id === 43)[0];
    });
  }
}
