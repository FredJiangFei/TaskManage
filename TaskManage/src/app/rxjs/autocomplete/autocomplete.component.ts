import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, switchMap, distinctUntilChanged } from 'rxjs/operators';
import { UsersService } from 'src/app/_services/users.service';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {
  @ViewChild('autocomplete') autocomplete: ElementRef;

  constructor(private usersService: UsersService) {

  }

  ngOnInit() {
    this.initAutoComplete();
  }

  initAutoComplete() {
    fromEvent<any>(this.autocomplete.nativeElement, 'input')
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        switchMap(x => this.getSuggestList(x.target.value),
        (outerValue, innerValue, outerIndex: number, innerIndex: number) => {
          console.log(`outerValue ${outerValue}`);
          console.log(`innerValue ${innerValue}`);
          console.log(`outerIndex ${outerIndex}`);
          console.log(`innerIndex ${innerIndex}`);
          return innerValue;
        })
      )
      .subscribe(console.log);
  }

  getSuggestList(keyword) {
    console.log(`keyword ${keyword}`);
    return this.usersService.getAll();
  }
}
