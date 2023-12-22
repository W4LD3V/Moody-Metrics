import { Component, Input } from '@angular/core';
import { DiaryItem } from '../../shared/models/diary';

@Component({
  selector: 'app-diary-list',
  templateUrl: './diary-list.component.html',
  styleUrl: './diary-list.component.css'
})
export class DiaryListComponent {
  @Input() diaryItems : DiaryItem[] = [];
}
