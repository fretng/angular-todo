import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { ListComponent } from "./list/list.component";
import { ApiSpecComponent } from "./api-spec/api-spec.component";

const routes: Routes = [
    { path : 'list', component: ListComponent },
    { path : 'api', component: ApiSpecComponent },
    { path : '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
