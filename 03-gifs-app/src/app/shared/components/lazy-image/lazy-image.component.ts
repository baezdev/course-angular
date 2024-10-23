import { Component, Input, OnInit } from '@angular/core';
import 'animate.css';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
})
export class LazyImageComponent implements OnInit {
  @Input()
  public url!: string;
  @Input()
  public alt!: string;
  @Input()
  private hasLoaded: boolean = false;

  ngOnInit(): void {
    if (!this.url) throw new Error('El Url es requerido.');
  }

  get isLoaded() {
    return this.hasLoaded;
  }

  onLoad() {
    console.log('Imagen cargada');
    this.hasLoaded = true;
  }
}
