import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonsComponent } from './buttons/buttons.component';
import { HeaderComponent } from './header/header.component';
import { InformationComponent } from './information/information.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { VideosComponent } from './videos/videos.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ButtonsComponent,
    InformationComponent,
    PortafolioComponent,
    VideosComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HeaderComponent,
    ButtonsComponent,
    InformationComponent,
    PortafolioComponent,
    VideosComponent
  ]
})
export class ComponentsModule { }
