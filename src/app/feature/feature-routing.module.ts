import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { DeckComponent } from './components/deck/deck.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { path: 'game', loadChildren: () => import('../feature/game/game.module').then(g => g.GameModule) },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'deck', component: DeckComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
