import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpleadoComponent } from "../components/empleado/empleado.component";
import { EmpleadosComponent } from "../components/empleados/empleados.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent, EmpleadoComponent, EmpleadosComponent, 
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
