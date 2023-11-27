import { Component, OnInit ,Input} from '@angular/core';
import { Conferencias } from '../conferencias.ts';

@Component({
  selector: 'app-conferencias-detail',
  templateUrl: './conferencias-detail.component.html',
  styleUrls: ['./conferencias-detail.component.css']
})
export class ConferenciasDetailComponent implements OnInit {
  @Input() conferenciaDetail!:Conferencias;
  constructor() { }

  ngOnInit() {
  }

}
