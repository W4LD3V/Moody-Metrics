import { Component, OnInit } from '@angular/core';
import { DiaryService } from './diary.service';
import { DiaryItem } from '../shared/models/diary';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  visibleItems: DiaryItem[] = [];
  originalItems: DiaryItem[] = []; // Hold the original list

  constructor(private diaryService: DiaryService) {}

  ngOnInit(): void {
    this.diaryService.getItems().subscribe((data: DiaryItem[]) => {
      this.originalItems = data;
      this.visibleItems = data;
    });
  }

  onFilterChange(filteredItems: DiaryItem[]) {
    this.visibleItems = filteredItems;
  }

  // Uncomment or implement this method if it's used in your template
  addDiaryItem(newItem: DiaryItem) {
    // Implementation for adding a diary item
  }
}
