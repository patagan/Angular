import { Component, OnInit, Inject } from '@angular/core';
import { flyInOut, expand } from '../animations/app.animation';

import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
    animations: [
      flyInOut(),
      expand()
    ]
})
export class HomeComponent implements OnInit {

  dish: Dish;
  promotion: Promotion;
  leader: Leader;

  errMess: string;

  constructor(private dishservice: DishService,
    private promotionservice: PromotionService,
    private leaderservice: LeaderService,
    @Inject('BaseURL') private baseURL) { }

  ngOnInit() {
    this.dishservice.getFeaturedDish()
    .subscribe(dish => this.dish = dish,
      errmess => this.errMess = <any>errmess);
    this.promotionservice.getFeaturedPromotion().subscribe((promo) => this.promotion = promo,
      errmess => this.errMess = <any>errmess);
    this.leaderservice.getFeaturedLeader().subscribe((leader) => this.leader = leader,
      errmess => this.errMess = <any>errmess);
  }

}
