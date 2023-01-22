import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MoviesService } from 'src/app/services/movies/movies.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit  {
  id?: string;
  
  constructor(private http: HttpClient, private movieService: MoviesService, private route: ActivatedRoute, private router: Router, public fb: FormBuilder) {}

  editForm: FormGroup = this.fb.group({
		id: [null],
        name : [null],
        genre: [null],
        release_date: [null],
        directors: [null],
        languages: [null],
        actors: [null],
        description: [null]	
  });

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    
    if(this.id) {
		this.movieService.getMovie(this.id).subscribe((response : any) => {
				this.editForm.patchValue(response.data);
		});
    }
  }

 
  onSubmit(form: NgForm) {

    this.movieService
    .saveMovie(form.value)
    .subscribe((response : any) => {
		window.alert('Data Saved successfully!');
		this.router.navigateByUrl('/');
	});
  }

  onUpdate(form: NgForm) {
    console.log(form.value);
  }
}
