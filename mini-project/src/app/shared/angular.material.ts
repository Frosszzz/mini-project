import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list'
import { FormsModule } from '@angular/forms';

import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    
    imports: [
     
   
      MatSelectModule,
      MatRadioModule,
      MatInputModule,
      MatCardModule,
      MatButtonModule,
      ReactiveFormsModule,
      MatIconModule,
      MatToolbarModule,
      MatDividerModule,
   
      MatListModule,
      FormsModule
     
      
    ]
  })
  export class AngularMaterial { }