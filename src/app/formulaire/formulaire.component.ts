import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
  visiteurForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(){
    this.visiteurForm = this.fb.group({
      nom: [],
      prenom: [],
    });
  }

  login() {
    console.log('Données du formulaire...', this.visiteurForm.value);
  }

}
