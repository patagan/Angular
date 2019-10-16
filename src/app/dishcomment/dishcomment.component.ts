import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../shared/comment';

@Component({
  selector: 'app-dishcomment',
  templateUrl: './dishcomment.component.html',
  styleUrls: ['./dishcomment.component.scss']
})
export class DishcommentComponent implements OnInit {

  @Input()
  selectedComments = Comment;

  constructor() { }

  ngOnInit() {
  }

}
