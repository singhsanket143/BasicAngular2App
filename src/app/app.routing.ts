import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from "@angular/router";

import {HomeComponent} from "./pages/home/home.component";
import {AboutComponent} from "./pages/about/about.component";

const approutes: Routes = [
  { path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(approutes);
