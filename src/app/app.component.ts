import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { MenuItem } from 'primeng/api'
import * as actions from './store/user.actions'
import { UserState } from './store/user.state'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    title = 'NgRxDemo'
    menu: MenuItem[] = [
        {
            label: 'List',
            routerLink: './',
        },
        {
            label: 'Form',
            routerLink: './form',
        },
    ]

    constructor(private store: Store<UserState>) {}

    // isLoading = false

    ngOnInit(): void {
        // this.store.select(selectIsLoading$).subscribe((flag) => {
        //     console.log('isLoading component', flag)
        //     this.isLoading = flag
        // })
        this.store.dispatch(actions.loadUsers())
    }
}
