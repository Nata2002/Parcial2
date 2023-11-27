import { Component, OnInit } from '@angular/core';
import { Conferencias } from '../conferencias.ts';
import { conferenciService } from '../conferencias.service.js';

@Component({
  selector: 'app-conferencias-list',
  templateUrl: './conferencias-list.component.html',
  styleUrls: ['./conferencias-list.component.css']
})
export class ConferenciasListComponent implements OnInit {
  conferencias:Array<Conferencias>=[];
  constructor(private conferenciasService:conferenciService) { }
  getConferencias():void{
    this.conferenciasService.getConferencias().subscribe((conferencias)=> {
      this.conferencias=conferencias;
    });
  }

  selectedConferencia!: Conferencias;
  selected = false;

  onSelected(conferencias: Conferencias): void {
    this.selected = true;
    this.selectedConferencia =conferencias;
  }

  ngOnInit() {
    this.getConferencias();
  }

}
