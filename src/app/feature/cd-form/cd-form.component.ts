import {ChangeDetectorRef, Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Genre} from "../../model/Genre";
import {GenreService} from "../../service/genre/genre.service";
import {GenreRequest} from "../../model/GenreRequest";
import {CdService} from "../../service/cd/cd.service";
import {Cd} from "../../model/Cd";
import {CdRequest} from "../../model/CdRequest";

@Component({
  selector: 'app-cd-form',
  templateUrl: './cd-form.component.html',
  styleUrls: ['./cd-form.component.css']
})
export class CdFormComponent {

  cdForm: FormGroup;

  genres: Genre[] = []

  cds: Cd[] = [];

  constructor(private cdService: CdService, private genreService: GenreService, private cd: ChangeDetectorRef) {
    this.cdForm = new FormGroup<any>({
      name: new FormControl(null, Validators.required),
      author: new FormControl(null, Validators.required),
      genreId: new FormControl(null, Validators.required)
    });
    this.getGenres();
    this.getCds();
  }

  getCds(): void {
    this.cdService.getAllCds().subscribe(data => {
      this.cds = data;
      this.cd.detectChanges();
    })
  }

  getGenres(): void {
    this.genreService.getAllGenres().subscribe(data => {
      this.genres = data;
      this.cd.detectChanges();
    })
  }

  submit(): void {
    if(this.cdForm.valid) {
      let request: CdRequest = new CdRequest(this.cdForm.value.name, this.cdForm.value.author, this.cdForm.value.genreId);
      this.cdService.addCd(request).subscribe(value =>  {
        console.log('Success: Created cd');
        console.log(value);
        this.getCds();
        this.getGenres();
      });
      this.cdForm.reset();
    }
  }

}
