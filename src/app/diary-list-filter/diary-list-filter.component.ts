import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  filterChanged() {
    console.log('Filter changed:', this.moodSelect, this.energySelect);
    const selectedMood = parseInt(this.moodSelect, 10);
    const selectedEnergy = parseInt(this.energySelect, 10);

    const filteredItems = this.items.filter(item => 
      (selectedMood === 0 || item.mood === selectedMood) &&
      (selectedEnergy === 0 || item.energy === selectedEnergy)
    );

    this.filterChange.emit(filteredItems);
  }
}

