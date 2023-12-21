import { Component, EventEmitter, Input, Output, ChangeDetectorRef } from '@angular/core';
import { DiaryItem } from '../../shared/models/diary';

@Component({
  selector: 'diary-list-filter',
  templateUrl: './diary-list-filter.component.html',
  styleUrls: ['./diary-list-filter.component.css']
})
export class DiaryListFilterComponent {
  @Input() items: DiaryItem[] = [];
  @Output() filterChange = new EventEmitter<DiaryItem[]>();
  moodSelect: string = '0';
  energySelect: string = '0';

  constructor(private cdRef: ChangeDetectorRef) {}

  filterChanged() {
    console.log('Filter changed:', this.moodSelect, this.energySelect);
    const selectedMood = parseInt(this.moodSelect, 10);
    const selectedEnergy = parseInt(this.energySelect, 10);

    let filteredItems = this.items;

    if (selectedMood !== 0) {
      filteredItems = filteredItems.filter(item => item.mood === selectedMood);
    }

    if (selectedEnergy !== 0) {
      filteredItems = filteredItems.filter(item => item.energy === selectedEnergy);
    }

    this.filterChange.emit(this.items.filter(item => 
      (selectedMood === 0 || item.mood === selectedMood) &&
      (selectedEnergy === 0 || item.energy === selectedEnergy)
    ));
  }
}
