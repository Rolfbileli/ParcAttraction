import { Component, ElementRef, ViewChild } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { AttractionInterface } from '../Interface/attraction.interface';
import { AttractionService } from '../Service/attraction.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import {MatSnackBar} from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { CritiqueInterface } from '../Interface/critique.interface';
import { PopUpComponent } from './popup.component';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSlideToggleModule, MatButtonModule, MatCardModule  ],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss'
})


export class AccueilComponent {


  constructor(public attractionService: AttractionService , private dialogRef : MatDialog )
  {}
  
  public formulaireCritique: FormGroup[] = [];
  
  public attractions: Observable<AttractionInterface[]> = this.attractionService.getAllAttraction()

  public critiques: Observable<CritiqueInterface[]> = this.attractionService.getAllCritique().pipe(tap((critiques:CritiqueInterface[]) => {
    critiques.forEach(critique => {
      this.formulaireCritique.push(
        new FormGroup({
          critique_id: new FormControl(critique.critique_id),
          nom: new FormControl(critique.nom),
          prenom: new FormControl(critique.prenom ),
          text: new FormControl(critique.text , [Validators.required]),
          note: new FormControl(critique.note , [Validators.required])
        })
      );
    });
  }));


  public addCritique() {
    this.formulaireCritique.push(
      new FormGroup({
        nom: new FormControl(""),
        prenom: new FormControl(""),
        text: new FormControl("" ,[Validators.required] ),
        note: new FormControl("" , [Validators.required])
      })
    );
  }

  openDialog(){
    this.dialogRef.open(PopUpComponent,{
      data : {
        name : 'Samuel'
      }
    });
  }

  
}
