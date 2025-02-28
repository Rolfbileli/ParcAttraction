import { Component, inject, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable, tap } from 'rxjs';
import { AttractionInterface } from '../Interface/attraction.interface';
import { AttractionService } from '../Service/attraction.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CritiqueInterface } from '../Interface/critique.interface';


@Component({
  standalone: true ,
  selector: 'app-pop-up',
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSlideToggleModule, MatButtonModule, MatCardModule],
  templateUrl: './popup.component.html',
  styleUrl: './accueil.component.scss'

})
export class PopUpComponent implements OnInit {

  firstName;
  constructor( @Inject(MAT_DIALOG_DATA) public data , public attractionService: AttractionService ) {

    this.firstName = data.name
  }

  ngOnInit(): void {
  }

  public fc = inject(FormBuilder);

  critiqueFormGroup = this.fc.group({
    name:[""],
    prenom:[""],
    text:[0, Validators.required],
    note:["", Validators.required]
  });;

  public onSubmit(critiqueFormulaire: FormGroup) {
      console.log(critiqueFormulaire)
      this.attractionService.postCritiqueAttraction(critiqueFormulaire.getRawValue()).subscribe(result => {
        critiqueFormulaire.patchValue({critique_id: result.result});
        
      });
    }
}