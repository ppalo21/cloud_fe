import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CdRequest} from "../../model/CdRequest";
import {Observable} from "rxjs";
import {Cd} from "../../model/Cd";
import {GenreRequest} from "../../model/GenreRequest";
import {Genre} from "../../model/Genre";

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  private apiUrl: string = 'http://localhost:8080/api/genre'

  constructor(private http: HttpClient) { }

  addGenre(genre: GenreRequest): Observable<Genre> {
    return this.http.post<Genre>(this.apiUrl, genre);
  }

  getAllGenres(): Observable<Genre[]> {
    return this.http.get<Genre[]>(this.apiUrl);
  }
}
