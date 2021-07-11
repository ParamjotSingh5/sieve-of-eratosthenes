import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GeneratorComponent } from './generator/generator.component';

const routes: Routes = [
  {path:'', component:DashboardComponent, pathMatch:'full'},  
  {path:'generate/:id', component: GeneratorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
