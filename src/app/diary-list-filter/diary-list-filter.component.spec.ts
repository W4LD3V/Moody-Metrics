import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryListFilterComponent } from './diary-list-filter.component';

describe('DiaryListFilterComponent', () => {
  let component: DiaryListFilterComponent;
  let fixture: ComponentFixture<DiaryListFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DiaryListFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiaryListFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
