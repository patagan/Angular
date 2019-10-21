import { Component, OnInit,Inject } from '@angular/core';

import { Leader } from '../shared/Leader';
import { LeaderService } from '../services/leader.service';
import { flyInOut, expand } from '../animations/app.animation';

@Component({
  selector: 'app-leaderdetail',
  templateUrl: './leaderdetail.component.html',
  styleUrls: ['./leaderdetail.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
    animations: [
      flyInOut(),
      expand()
    ]
})
export class LeaderdetailComponent implements OnInit {

  leaders: Leader[];

  errMess: string;

  constructor(private leaderService: LeaderService,
    @Inject('BaseURL') private baseURL) { }

  ngOnInit() {
    this.leaderService.getLeaders().subscribe((leaders) => this.leaders = leaders,
    errmess => this.errMess = <any>errmess);
  }

}
