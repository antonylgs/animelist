import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-anime',
  templateUrl: './single-anime.component.html',
  styles: [],
})
export class SingleAnimeComponent {
  @Input() anime: any;

  getShortenDescription(description: string) {
    return description.substring(0, 200) + '...';
  }
}
