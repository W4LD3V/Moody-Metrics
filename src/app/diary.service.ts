import { Injectable } from '@angular/core';
import { DiaryItem } from '../shared/models/diary';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiaryService {
  private apiUrl = './assets/diaryItems.json'; // URL to your JSON file

  constructor(private http: HttpClient) {}

  getItems(): Observable<DiaryItem[]> {
    return this.http.get<DiaryItem[]>(this.apiUrl);
  }
  // addItem(item: DiaryItem): void {
  //   this.items.push(item);
  // }
}
