import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {  ElementRef, ViewChild } from '@angular/core';
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
import { MatDialog } from '@angular/material/dialog';
@Component({
  standalone: true ,
  selector: 'app-pop-up',
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSlideToggleModule, MatButtonModule, MatCardModule  ],
  templateUrl: './popup.component.html',
  styleUrl: './accueil.component.scss'

})
export class PopUpComponent implements OnInit {

  firstName;
  constructor( @Inject(MAT_DIALOG_DATA) public data ) {

    this.firstName = data.name
  }

  ngOnInit(): void {
  }
}