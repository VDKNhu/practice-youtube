import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WatchComponent } from './components/watch/watch.component';
import { MainBodyComponent } from './components/main-body/main-body.component';

const routes: Routes = [
  { path: 'watch/:id', component: WatchComponent },
  { path: '', component: MainBodyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
