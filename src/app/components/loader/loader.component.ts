import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { selectIsLoading$ } from '../../store/user.selectors'

@Component({
    selector: 'app-loader',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
    isLoading$ = this.store.select(selectIsLoading$)
    constructor(private store: Store) {}

    ngOnInit(): void {}
}
