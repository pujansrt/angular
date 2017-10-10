import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';
import {SharedService} from './shared.service';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from "@angular/forms";

const appRoutes: Routes = [
  { path: '*', component: AppComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    Sibling1Component,
    Sibling2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true, useHash: true }
    ),
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
