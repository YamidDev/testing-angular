import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PruebaComponent } from './prueba/prueba.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { TestserviceComponent } from './testservice/testservice.component';

const routes: Routes = [
  {path: 'pruebas',  component: PruebaComponent},
  {path: 'login', component: LoginComponent},
  {path: 'listado', component: TestserviceComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
    LoginComponent,
    TestserviceComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
