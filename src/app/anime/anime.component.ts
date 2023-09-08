import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styles: [],
})
export class AnimeComponent {
  animes: any;
  onlyHighRates: boolean = false;

  constructor(private http: HttpClient) {
    this.getAnimes();
  }

  getAnimes() {
    this.http.get('https://api.jikan.moe/v4/anime').subscribe((data: any) => {
      this.animes = data.data;
      this.onlyHighRates = false;
      console.log(this.animes);
    });
  }
  getOnlyHighRatesAnimes() {
    this.http.get('https://api.jikan.moe/v4/anime').subscribe((data: any) => {
      this.animes = data.data.filter((anime: any) => anime.score > 8);
      this.onlyHighRates = true;
    });
  }
}
