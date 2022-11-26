import {BrowserModule} from '@angular/platform-browser';
import {EventEmitter, NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {LessonsComponent} from './lessons/lessons.component';

import {LessonsService} from "./services/lessons.service";
import {ReactiveFormsModule} from "@angular/forms";

import {environment} from '../environments/environment.prod';
import {ServiceWorkerModule} from '@angular/service-worker';

//se importan los componentes
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppRoutingModule} from "./app-routing.module";
import { EmpleadosComponent } from './empleados/empleados.component';
import { RouterModule } from '@angular/router';

//aqui se registran los componnetes.

@NgModule({
    declarations: [
        AppComponent,
        LessonsComponent,
        EmpleadosComponent
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'serverApp' }),
        HttpClientModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        ReactiveFormsModule,
        //se incluye el modulo service Worker
        ServiceWorkerModule.register('/ngsw-worker.js',{enabled:environment.production}),
        RouterModule,
    ],
    providers: [
        LessonsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}
