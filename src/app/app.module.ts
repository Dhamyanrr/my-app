import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { RoutesModule } from './routes/routes.module';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from "./layout/layout.module";
import { CardsComponent } from './shared/cards/cards.component';

@NgModule({
    declarations: [
        AppComponent,
        CardsComponent
        
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        SharedModule,
        RoutesModule,
        HttpClientModule,
        LayoutModule
    ]
})
export class AppModule { }