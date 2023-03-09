import { Component, OnDestroy, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { Subject, takeUntil } from 'rxjs'
import { User } from '../../model/user'
import * as actions from '../../store/user.actions'
import * as selectors from '../../store/user.selectors'
import { UserState } from '../../store/user.state'

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit, OnDestroy {
    users: User[] = []

    private unsubscribe = new Subject<void>()

    constructor(private store: Store<UserState>) {}

    ngOnInit(): void {
        this.store
            .select(selectors.selectAllUsers$)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe((values) => (this.users = values))
    }

    ngOnDestroy(): void {
        this.unsubscribe.next()
        this.unsubscribe.complete()
    }

    delete(id: string) {
        this.store.dispatch(actions.deleteUser({ id }))
    }
}
