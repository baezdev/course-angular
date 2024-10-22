import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  public gifsList: Gif[] = [];
  private tagsHistory: string[] = [];
  private apiKey: string = 'cMGDk3zNPVGaz5OBgy9IJtCbNVoGLbRL';
  private baseUrl = 'https://api.giphy.com/v1/gifs';

  constructor(private http: HttpClient) {
    this.loadHistoryByLocalStorage()
  }

  get getTagsHistory() {
    return [...this.tagsHistory];
  }

  private addNewTag(tag: string) {
    tag = tag.toLowerCase();

    if (this.getTagsHistory.includes(tag)) {
      this.tagsHistory = this.tagsHistory.filter((oldTag) => oldTag !== tag);
    }

    this.tagsHistory = [tag.toLowerCase(), ...this.tagsHistory];
    this.tagsHistory = this.tagsHistory.splice(0, 10);
    this.saveHistoryToLocalStore();
  }

  private saveHistoryToLocalStore() {
    localStorage.setItem('history', JSON.stringify(this.tagsHistory));
  }

  private loadHistoryByLocalStorage() {
    if (!localStorage.getItem('history')) return;

    this.tagsHistory = JSON.parse(localStorage.getItem('history')!);

    if(this.tagsHistory.length === 0) return
    this.searchTag(this.tagsHistory[0])
  }

  searchTag(tag: string) {
    if (tag === '') return;
    this.addNewTag(tag);

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('q', tag)
      .set('limit', '10');

    this.http
      .get<SearchResponse>(`${this.baseUrl}/search`, { params })
      .subscribe((res) => (this.gifsList = res.data));
  }
}
