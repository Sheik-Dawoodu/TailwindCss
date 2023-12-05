import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TailWindStyleComponent } from './components/tail-wind-style/tail-wind-style.component';
import { AuthFormComponent } from './components/auth-form/auth-form.component';

const routes: Routes = [
  {path:'tailwiondstyle',component:TailWindStyleComponent},
  {path:'auth',component:AuthFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
