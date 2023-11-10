import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';

//importaciones del navbar 
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatIconModule, 
    MatButtonModule,
    MatToolbarModule
  ],
  exports: [
    NavbarComponent,
    CommonModule,
    SharedRoutingModule,
    MatIconModule, 
    MatButtonModule,
    MatToolbarModule
  ]
})
export class SharedModule { }
