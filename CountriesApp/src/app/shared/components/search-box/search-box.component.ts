import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {debounceTime, delay, Subject, Subscription} from "rxjs";

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent implements OnInit, OnDestroy {

  private debouncer: Subject<string> = new Subject<string>()
  private debouncerSubscription?: Subscription

  @Input()
  public placeholder: string = ''


  @Input()
  public initialValue: string = ''

  @Output()
  onSearchByCapital: EventEmitter<string> = new EventEmitter()

  @Output()
  onDebounce: EventEmitter<string> = new EventEmitter()

  ngOnInit(): void {
    this.debouncerSubscription = this.debouncer
      .pipe(debounceTime(1000))
      .subscribe((value) => {
        this.onDebounce.emit(value)
      })
  }

  ngOnDestroy() {
    this.debouncerSubscription?.unsubscribe()
  }


  emit(value: string) {
    this.onSearchByCapital.emit(value)
  }

  onKeyPress(searchTerm: string) {
    this.debouncer.next(searchTerm)
  }

}
