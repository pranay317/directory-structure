import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FoldersService } from './services/folders.service';
import { FolderComponent } from './components/folder/folder.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { OrderByPipe } from './pipes/order-by.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { ExpandableComponent } from './components/expandable/expandable.component';
import { HeaderComponent } from './components/header/header.component';
import { CurrentHeaderComponent } from './components/current-header/current-header.component';


@NgModule({
  declarations: [
    AppComponent,
    FolderComponent,
    NotFoundComponent,
    OrderByPipe,
    BreadcrumbsComponent,
    ExpandableComponent,
    HeaderComponent,
    CurrentHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    FoldersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
