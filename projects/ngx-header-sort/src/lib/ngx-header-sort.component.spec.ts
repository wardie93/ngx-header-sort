import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxHeaderSortComponent } from './ngx-header-sort.component';

describe('NgxHeaderSortComponent', () => {
  let component: NgxHeaderSortComponent;
  let fixture: ComponentFixture<NgxHeaderSortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxHeaderSortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxHeaderSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
