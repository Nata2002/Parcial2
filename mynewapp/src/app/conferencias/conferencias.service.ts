import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Conferencias } from './conferencias.ts';

@Injectable({
  providedIn: 'root'
})
export class conferenciService {

  private apiUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getConferencias(): Observable<Conferencias[]> {
    return this.http.get<Conferencias[]>(this.apiUrl);
  }



}
