import { Component, OnInit } from '@angular/core';

import { Leader } from '../shared/Leader';
import { LeaderService } from '../services/leader.service';

@Component({
  selector: 'app-leaderdetail',
  templateUrl: './leaderdetail.component.html',
  styleUrls: ['./leaderdetail.component.scss']
})
export class LeaderdetailComponent implements OnInit {

  leaders: Leader[];



  constructor(private leaderService: LeaderService) { }

  ngOnInit() {
    this.leaders = this.leaderService.getLeaders();
  }

}
