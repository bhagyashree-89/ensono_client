import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private http: HttpClient) { }

  movies(): Observable<any> {
    return this.http.get('http://localhost:8010/movies');
  }

  // to store data
  saveMovie(requestObject : any): Observable<any> {
    console.log(requestObject);
    return this.http.post('http://localhost:8010/movies', requestObject);
  }

  // to get details of movie by id
  getMovie(id : any): Observable<any> {
    return this.http.get('http://localhost:8010/movies/'+id);
  }

  //to delelete Moview
  deleteMovie(id:any) : Observable<any> {
    return this.http.delete('http://localhost:8010/movies/'+id);
  }
  
}
