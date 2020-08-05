import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FirstCompComponent } from "./components/first-comp/first-comp.component";
import { SecondCompComponent } from "./components/second-comp/second-comp.component";

@NgModule({
  declarations: [AppComponent, FirstCompComponent, SecondCompComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
