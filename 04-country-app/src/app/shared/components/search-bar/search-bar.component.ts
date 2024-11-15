import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'shared-search-bar',
  templateUrl: './search-bar.component.html',
})
export class SearchBarComponent implements OnInit, OnDestroy {
  private debounce = new Subject<string>();
  private debounceSubscription!: Subscription;

  @Input()
  public initialValue = '';
  @Input()
  public placeholder: string = '';
  @Output()
  public onValue = new EventEmitter<string>();
  @Output()
  public onValueDebouce = new EventEmitter<string>();

  ngOnInit(): void {
    this.debounceSubscription = this.debounce
      .pipe(debounceTime(300))
      .subscribe((value) => {
        this.onValueDebouce.emit(value);
      });
  }

  ngOnDestroy(): void {
    this.debounceSubscription?.unsubscribe();
  }

  emitValue(value: string) {
    this.onValue.emit(value);
  }

  onKeyPressEmitValue(value: string) {
    this.debounce.next(value);
  }
}
