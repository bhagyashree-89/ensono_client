import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies/movies.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  allMovies : any = []; 

  constructor(private movieService : MoviesService) {}

  ngOnInit(): void {
    this.users();
  }

  users(): void {
    this.movieService
        .movies()
        .subscribe((response: any) => {
          this.allMovies = response.data;
        });
  }

  deleteMovie(id:any) {
    this.movieService
    .deleteMovie(id)
    .subscribe((response: any) => {
      window.alert(response.message);
    });
  }
}
