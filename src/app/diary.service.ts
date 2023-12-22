import { Injectable } from '@angular/core';
import { DiaryItem } from '../shared/models/diary';

@Injectable({
  providedIn: 'root'
})
export class DiaryService {
  private items: DiaryItem[] = [
    new DiaryItem('Had a great day at the beach', 4, 'beach', 3),
    new DiaryItem('Finished reading a fantastic book', 5, 'book', 4),
    new DiaryItem('Met an old friend for coffee', 3, 'coffee', 2),
    new DiaryItem('Took a long walk in the park', 2, 'park', 2),
    new DiaryItem('Had a productive day at work', 4, 'work', 4)
  ];

  constructor() {}

  getItems(): DiaryItem[] {
    return this.items;
  }

  addItem(item: DiaryItem): void {
    this.items.push(item);
  }
}
