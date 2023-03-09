import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { MessageService } from 'primeng/api'
import { catchError, concatMap, EMPTY, map, tap } from 'rxjs'
import { UserService } from '../services/user.service'
import * as actions from './user.actions'

@Injectable()
export class UserEffects {
    loadAll$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.loadUsers),
            concatMap(() => this.service.load$()),
            map((users) => actions.loadUsersSuccess({ users }))
        )
    )

    create$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.createUser),
            concatMap((action) =>
                this.service.add(action.user).pipe(
                    tap(() => console.log('tap')),
                    catchError((err) => {
                        console.log('y a une error')
                        return EMPTY
                    })
                )
            ),
            map((user) => actions.createUserSuccess({ user }))
        )
    )

    createSuccess$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.createUserSuccess),
            map((action) => {
                this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'Bravo !' })
            }),
            map(() => actions.emptyAction())
        )
    )

    delete$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.deleteUser),
            concatMap((action) => this.service.delete(action.id)),
            map((id) => actions.deleteUserSuccess({ id }))
        )
    )

    constructor(private actions$: Actions, private service: UserService, private messageService: MessageService) {}
}
