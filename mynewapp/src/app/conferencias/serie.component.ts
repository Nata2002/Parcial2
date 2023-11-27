import { Component, OnInit } from '@angular/core';
import { conferenciService } from './conferencias.service';

@Component({
  selector: 'app-serie',
  templateUrl: './conferencias.component.html',
  styleUrls: ['./conferencias.component.css']
})
export class ConferenciasComponent implements OnInit {

  constructor(private conferenciasService: conferenciService) { }



  ngOnInit() {
  }

}
