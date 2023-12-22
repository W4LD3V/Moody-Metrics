import { Component } from '@angular/core';
import { DiaryService } from './diary.service';
import { DiaryItem } from '../shared/models/diary';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'moody_metrics';
  visibleItems: DiaryItem[] = [];

  constructor(private diaryService: DiaryService) {
    this.visibleItems = this.diaryService.getItems(); // Initialize with all items
  }

  get items() {
    return this.diaryService.getItems(); // Getter to retrieve items from the service
  }

  addDiaryItem(newItem: DiaryItem) {
    this.diaryService.addItem(newItem);
    this.visibleItems = this.diaryService.getItems(); // Refresh the list
  }

  onFilterChange(filteredItems: DiaryItem[]) {
    console.log('Filter change detected in AppComponent', filteredItems);
    this.visibleItems = filteredItems; // Update the list based on the filter
  }
}
