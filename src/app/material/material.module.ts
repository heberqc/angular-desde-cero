import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatExpansionModule,
} from '@angular/material';

import { MaterialDemoComponent } from './material-demo/material-demo.component';
import { MaterialButtonComponent } from './material-button/material-button.component';

@NgModule({
  declarations: [
    MaterialDemoComponent,
    MaterialButtonComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
  ]
})
export class MaterialModule { }
