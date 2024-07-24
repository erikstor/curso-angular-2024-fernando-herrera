import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey = 'vF7s8T7qijV0QFyz2KbffUrH73Q3aySE'
  private baseApiURL = `https://api.giphy.com/v1/gifs/search`

  private _tagsHistory: string[] = []

  public gifList: Gif[] = []

  constructor(
    private httpClient: HttpClient
  ) {
    this.loadLocalStorage()
    if (this.tagsHistory.length) this.searchTag(this.tagsHistory[0])
  }

  get tagsHistory() {
    return [...this._tagsHistory]
  }


  public async searchTag(tag: string): Promise<void> {



    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('q', tag)

    await this.httpClient.get<SearchResponse>(this.baseApiURL, { params }).subscribe((resp) => {
      this.gifList = resp.data
    })

    this.organizeHistory(tag)

  }

  private organizeHistory(tag: string) {
    const insert = tag.toLowerCase()

    if (this._tagsHistory.includes(insert)) {
      this._tagsHistory = this._tagsHistory.filter((current) => current !== insert)
    }

    this._tagsHistory.unshift(insert)
    this._tagsHistory = this.tagsHistory.splice(0, 10)
    this.saveLocalStorage()
  }


  private saveLocalStorage(): void {

    localStorage.setItem('history', JSON.stringify(this.tagsHistory))

  }

  private loadLocalStorage(): void {

    if (!localStorage.getItem('history')) return

    this._tagsHistory = JSON.parse(localStorage.getItem('history')!)

  }


}
