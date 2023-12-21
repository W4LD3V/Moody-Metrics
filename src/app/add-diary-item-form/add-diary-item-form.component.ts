import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DiaryItem } from '../../shared/models/diary';

@Component({
  selector: 'add-diary-item-form',
  templateUrl: './add-diary-item-form.component.html',
  styleUrl: './add-diary-item-form.component.css'
})
export class AddDiaryItemFormComponent {
  @Output() addDiaryItem = new EventEmitter<DiaryItem>();

  newDiaryThought = '';
  newDiaryMood = '';
  newDiaryEnergy = '';
  newDiaryNote = '';
  
  submitForm() {
    const newDiaryText = this.newDiaryNote;
    const newMood = parseInt(this.newDiaryMood, 10);
    const newShorthand = this.newDiaryThought;
    const newEnergy = parseInt(this.newDiaryEnergy, 10)
  
    // this.items.push(new DiaryItem(newDiaryText, newMood, newShorthand, newEnergy));
    this.addDiaryItem.emit(new DiaryItem(newDiaryText, newMood, newShorthand, newEnergy));
    this.newDiaryThought = '';
    this.newDiaryMood = '';
    this.newDiaryEnergy = '';
    this.newDiaryNote = '';
  }
}
