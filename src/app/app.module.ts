import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { EmergencyListComponent } from './components/emergency-list/emergency-list.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import { EmptyComponent } from './components/empty/empty.component';
import { LoadingComponent } from './components/loading/loading.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    EmergencyListComponent,
    EmptyComponent,
    LoadingComponent,
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatIconModule,
        MatMenuModule,
        MatToolbarModule,
        MatDividerModule,
        MatProgressSpinnerModule,
        MatButtonModule,

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
