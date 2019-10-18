import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Comment } from '../shared/comment';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dishcomment',
  templateUrl: './dishcomment.component.html',
  styleUrls: ['./dishcomment.component.scss']
})
export class DishcommentComponent implements OnInit {

  @ViewChild('fform') feedbackFormDirective;

  @Input()
  selectedComments: Comment[];

  commentForm: FormGroup;
  commentTemplate: Comment;
  index:number;

  formErrors = {
    'author': '',
    'comment': '',
    'rating': 1
  };

  validationMessages = {
    'author': {
      'required':      'Name is required.',
      'minlength':     'Name must be at least 2 characters long.',
      'maxlength':     'Name cannot be more than 25 characters long.'
    },
    'rating': {
      'required':      'Rating is required.'
    },
    'comment': {
      'required':      'Comment is required.',
    },
  };

  constructor(private fb : FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.commentForm = this.fb.group({
      author: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
      rating:[1],
      comment: ['',[Validators.required, Validators.minLength(2)]]
    });

    this.commentForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now
  }

  onValueChanged(data?: any) {
    if (!this.commentForm) { 
      return; 
    }
    if (this.index) {
      this.selectedComments.pop()
      this.index = null;
    } 
    if(this.commentForm.valid) {
      this.selectedComments.push(this.commentForm.value);
      this.index = this.selectedComments.indexOf(this.commentForm.value);
    }
    const form = this.commentForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }

  onSubmit() {
    this.commentTemplate = this.commentForm.value;
    this.commentTemplate.date = new Date().toISOString();
    console.log(this.commentTemplate);
    this.selectedComments.pop();
    this.index = null;
    this.selectedComments.push(this.commentTemplate);
    this.commentForm.reset({
      author: '',
      rating: 1,
      comment: '',
      date:''
    });
    this.feedbackFormDirective.resetForm();
  }

}
