import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies/movies.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  moviesRecords:any = [];
  allMovies : any = []; 
  searchTerm:any = '';
  constructor(private movieService : MoviesService) {}

  ngOnInit(): void {
    this.movies();
  }

  movies(): void {
    this.movieService
        .movies()
        .subscribe((response: any) => {
          this.moviesRecords = response.data;
          this.allMovies = this.moviesRecords;
        });
  }

  search(value: string): void {
    this.moviesRecords = this.allMovies.filter((val: any) =>
      val.name.toLowerCase().includes(value)
    );
  }

  deleteMovie(id:any) {
    this.movieService
    .deleteMovie(id)
    .subscribe((response: any) => {
      window.alert(response.message);
    });
  }
}
