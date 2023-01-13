import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CdRequest} from "../../model/CdRequest";
import {Observable} from "rxjs";
import {Cd} from "../../model/Cd";

@Injectable({
  providedIn: 'root'
})
export class CdService {

  private apiUrl: string = 'http://localhost:8080/api/cd'

  constructor(private http: HttpClient) { }

  addCd(cd: CdRequest): Observable<Cd> {
    return this.http.post<Cd>(this.apiUrl, cd);
  }

  getAllCds(): Observable<Cd[]> {
    return this.http.get<Cd[]>(this.apiUrl);
  }
}
