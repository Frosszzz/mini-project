import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path :'',
    pathMatch:'full',
    component:LoginComponent
  
  },
  {
    path: '**' ,
    pathMatch:'full',
   redirectTo : ''
  },
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
