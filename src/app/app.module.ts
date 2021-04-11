import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { TerminalViewComponent } from './components/terminal-view/terminal-view.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TextEditorComponent } from './components/text-editor/text-editor.component';
import { TerminalComponent } from './components/terminal/terminal.component';
import { NgTerminalModule } from 'ng-terminal';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    TerminalViewComponent,
    NavbarComponent,
    TextEditorComponent,
    TerminalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgTerminalModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
