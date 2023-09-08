import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimeComponent } from './anime/anime.component';
import { AboutComponent } from './about/about.component';
import { SingleAnimeComponent } from './single-anime/single-anime.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimeComponent,
    AboutComponent,
    SingleAnimeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
