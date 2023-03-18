import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { randomContentComponent } from './randomContent.component';
import { AppComponent } from './app.component';
import { ContentsComponent } from './contents/contents.component';
import { MainTagContentComponent } from './main-tag-content/main-tag-content.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    randomContentComponent,
    ContentsComponent,
    MainTagContentComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
