import { Component, Input , Output, EventEmitter, OnDestroy, OnInit} from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';


@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit, OnDestroy{

  private debouncer: Subject<string> =  new Subject<string>;
  private debouncerSuscription?: Subscription;

  @Input()
  placeholder:string = '';

  @Input()
  initialValue:string = '';

  @Output()
  onDebounce = new EventEmitter<string>();

  ngOnInit(): void {
    this.debouncerSuscription = this.debouncer
    .pipe(
      debounceTime(300)
    )
    .subscribe( value=>{
      this.onDebounce.emit( value );
    })
  }

  ngOnDestroy(): void {
    this.debouncerSuscription?.unsubscribe();
  }

  onKeyPress(searchTerm:string){
    this.debouncer.next(searchTerm);
  }
}
