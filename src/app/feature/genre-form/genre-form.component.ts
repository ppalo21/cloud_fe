import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {GenreRequest} from "../../model/GenreRequest";
import {GenreService} from "../../service/genre/genre.service";
import {Genre} from "../../model/Genre";

@Component({
  selector: 'app-genre-form',
  templateUrl: './genre-form.component.html',
  styleUrls: ['./genre-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GenreFormComponent {

  genreForm: FormGroup;

  genres: Genre[] = []

  constructor(private service: GenreService, private cd: ChangeDetectorRef) {
    this.genreForm = new FormGroup<any>({
      name: new FormControl(null, Validators.required)
    });
    this.getGenres();
  }

  getGenres(): void {
    this.service.getAllGenres().subscribe(data => {
      this.genres = data;
      this.cd.detectChanges();
    })
  }

  submit(): void {
    if(this.genreForm.valid) {
      console.log(this.genreForm.value.name);
      this.service.addGenre(new GenreRequest(this.genreForm.value.name)).subscribe(value =>  {
        console.log('Success: Created genre');
        console.log(value);
        this.getGenres();
      });
      this.genreForm.reset();
    }
  }
}
