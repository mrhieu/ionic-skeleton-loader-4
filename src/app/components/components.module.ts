import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SkeletonElementComponent } from './skeleton-element/skeleton-element.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [
    SkeletonElementComponent,
  ],
  providers: [],
  exports: [
    SkeletonElementComponent,
  ]
})

export class ComponentsModule {}
