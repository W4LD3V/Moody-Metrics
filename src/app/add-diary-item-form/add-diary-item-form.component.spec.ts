import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDiaryItemFormComponent } from './add-diary-item-form.component';

describe('AddDiaryItemFormComponent', () => {
  let component: AddDiaryItemFormComponent;
  let fixture: ComponentFixture<AddDiaryItemFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddDiaryItemFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddDiaryItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
