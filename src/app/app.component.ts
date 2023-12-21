import { Component, ChangeDetectorRef } from '@angular/core';
import { DiaryItem } from '../shared/models/diary';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Change styleUrl to styleUrls
})
export class AppComponent {
  title = 'moody_metrics';

  items: DiaryItem[] = [
    new DiaryItem('Had a great day at the beach', 4, 'beach', 3),
    new DiaryItem('Finished reading a fantastic book', 5, 'book', 4),
    new DiaryItem('Met an old friend for coffee', 3, 'coffee', 2),
    new DiaryItem('Took a long walk in the park', 2, 'park', 2),
    new DiaryItem('Had a productive day at work', 4, 'work', 4),
  ];

  visibleItems: DiaryItem[] = [...this.items]; // Use a copy of the items

  onFilterChange(filteredItems: DiaryItem[]) {
    console.log('Filter change detected in AppComponent', filteredItems);
    this.visibleItems = filteredItems;
  }
  // Emitinus filterChange funkcijai pakeičiami rodomi duomenys.


}
