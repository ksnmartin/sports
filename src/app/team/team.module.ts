import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from './team.component';
import { Routes, RouterModule } from '@angular/router';
import { AquaticsComponent } from '../aquatics/aquatics.component';
import { AthleticsComponent } from '../athletics/athletics.component';
import { BadmintonComponent } from '../badminton/badminton.component';
import { BasketballComponent } from '../basketball/basketball.component';
import { BoxingComponent } from '../boxing/boxing.component';
import { ChessComponent } from '../chess/chess.component';
import { CricketComponent } from '../cricket/cricket.component';
import { FootballComponent } from '../football/football.component';
import { HandballComponent } from '../handball/handball.component';
import { HockeyComponent } from '../hockey/hockey.component';
import { KabbadiComponent } from '../kabbadi/kabbadi.component';
import { KhokhoComponent } from '../khokho/khokho.component';
import { SquashComponent } from '../squash/squash.component';
import { TabletennisComponent } from '../tabletennis/tabletennis.component';
import { VolleyballComponent } from '../volleyball/volleyball.component';
import { TennisComponent } from '../tennis/tennis.component';
import { TkdComponent } from '../tkd/tkd.component';
import { WeightliftingComponent } from '../weightlifting/weightlifting.component';
import { NgImageSliderModule } from 'ng-image-slider';
import {MatGridListModule} from '@angular/material/grid-list';

const routes: Routes = [
  {
    path: '',
    component: TeamComponent
  },
  {
path:'aquatics',
component: AquaticsComponent
},
{
path:'athletics',
component: AthleticsComponent
},
{
path:'badminton',
component: BadmintonComponent
},
{
path:'basketball',
component: BasketballComponent
},
{
path:'boxing',
component: BoxingComponent
},
{
path:'chess',
component: ChessComponent
},
{
path:'cricket',
component: CricketComponent
},
{
path:'football',
component: FootballComponent
},
{
path:'handball',
component: HandballComponent
},
{
path:'hockey',
component: HockeyComponent
},
{
path:'kabaddi',
component: KabbadiComponent
},
{
path:'khokho',
component: KhokhoComponent
},
{
path:'squash',
component: SquashComponent
},
{
path:'tabletennis',
component: TabletennisComponent
},
{
path:'volleyball',
component: VolleyballComponent
},
{
path:'tennis',
component: TennisComponent
},
{
path:'tkd',
component: TkdComponent
},
{
path:'weightlifting',
component: WeightliftingComponent
}
]

@NgModule({
  declarations: [TeamComponent,
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
    WeightliftingComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatGridListModule,
    NgImageSliderModule
  ],
  exports:[MatGridListModule]
})
export class TeamModule { }
