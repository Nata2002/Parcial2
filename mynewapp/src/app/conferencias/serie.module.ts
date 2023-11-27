import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConferenciasComponent } from './serie.component';
import { ConferenciasListComponent } from './conferencias-list/conferencias-list.component';
import { ConferenciasDetailComponent } from './conferencias-detail/conferencias-detail.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ConferenciasComponent, ConferenciasListComponent, ConferenciasDetailComponent],
  exports: [ConferenciasComponent, ConferenciasListComponent]
})
export class ConferenciaModule { }
