import { HomeComponent } from './home/home.component';
import { CareersComponent } from './careers/careers.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationsComponent } from './locations/locations.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: "full" },
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'careers',component: CareersComponent},
  { path: 'locations', component: LocationsComponent},
  {path: '*', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
