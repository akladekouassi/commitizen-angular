import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FirstCompComponent } from "./components/first-comp/first-comp.component";
import { SecondCompComponent } from "./components/second-comp/second-comp.component";
import { ThirdCompoComponent } from './components/third-compo/third-compo.component';
import { CompComponent } from './components/comp/comp.component';

@NgModule({
  declarations: [AppComponent, FirstCompComponent, SecondCompComponent, ThirdCompoComponent, CompComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
