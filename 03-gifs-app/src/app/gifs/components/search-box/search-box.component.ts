import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent {
  @ViewChild('searchInput')
  public searchInput!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) {}

  handleSearch() {
    const value = this.searchInput.nativeElement.value
    this.gifsService.searchTag(value)

    this.searchInput.nativeElement.value = ""
  }
  /* handleSearch(value: string) {
    console.log(value)
  } */
}
