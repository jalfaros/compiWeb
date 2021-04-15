import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TerminalViewComponent } from './components/terminal-view/terminal-view.component';


const routes: Routes = [
  { path: 'terminal', component: TerminalViewComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'terminal' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
