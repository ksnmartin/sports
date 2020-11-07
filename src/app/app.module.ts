import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AquaticsComponent } from './aquatics/aquatics.component';
import { AthleticsComponent } from './athletics/athletics.component';
import { BadmintonComponent } from './badminton/badminton.component';
import { BasketballComponent } from './basketball/basketball.component';
import { BoxingComponent } from './boxing/boxing.component';
import { ChessComponent } from './chess/chess.component';
import { CricketComponent } from './cricket/cricket.component';
import { FootballComponent } from './football/football.component';
import { HandballComponent } from './handball/handball.component';
import { HockeyComponent } from './hockey/hockey.component';
import { KabbadiComponent } from './kabbadi/kabbadi.component';
import { KhokhoComponent } from './khokho/khokho.component';
import { SquashComponent } from './squash/squash.component';
import { TabletennisComponent } from './tabletennis/tabletennis.component';
import { VolleyballComponent } from './volleyball/volleyball.component';
import { TennisComponent } from './tennis/tennis.component';
import { TkdComponent } from './tkd/tkd.component';
import { WeightliftingComponent } from './weightlifting/weightlifting.component';

@NgModule({
  declarations: [
    AppComponent,
    AquaticsComponent,
    AthleticsComponent,
    BadmintonComponent,
    BasketballComponent,
    BoxingComponent,
    ChessComponent,
    CricketComponent,
    FootballComponent,
    HandballComponent,
    HockeyComponent,
    KabbadiComponent,
    KhokhoComponent,
    SquashComponent,
    TabletennisComponent,
    VolleyballComponent,
    TennisComponent,
    TkdComponent,
    WeightliftingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
