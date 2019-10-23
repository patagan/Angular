import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DishcommentComponent } from './dishcomment.component';

describe('DishcommentComponent', () => {
  let component: DishcommentComponent;
  let fixture: ComponentFixture<DishcommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DishcommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DishcommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
