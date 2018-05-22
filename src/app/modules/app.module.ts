// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgPipesModule } from 'ngx-pipes';
import { RouterModule, Routes } from '@angular/router';

// Components
import { AppComponent } from '../components/app.component';
import { ResumeComponent } from '../components/resumeComponent/resume.component';
import { WorkComponent } from '../components/workComponent/work.component';
import { HomeComponent } from '../components/homeComponent/home.component';
import { NavigationComponent } from '../components/navigationComponent/navigation.component';

// Routes
const appRoutes : Routes = [
  { path: "", component: HomeComponent  },
  { path: "resume", component: ResumeComponent },
  { path: "work", component: WorkComponent },
  { path: "**", redirectTo: "foo" }
];

@NgModule({
  declarations: [ AppComponent, ResumeComponent, WorkComponent, HomeComponent, NavigationComponent ],
  imports: [ BrowserModule, FormsModule, NgPipesModule, RouterModule.forRoot(appRoutes, {useHash: true}) ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
