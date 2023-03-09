import { createReducer, on } from '@ngrx/store'
import * as actions from './user.actions'
import { UserInitialState, UserState } from './user.state'

const reducer = createReducer(
    UserInitialState,
    on(actions.loadUsers, (state: UserState) => ({ ...state, isLoading: true })),
    on(actions.loadUsersSuccess, (state: UserState, { users }) => {
        return { users, isLoading: false }
    }),
    on(actions.createUserSuccess, (state: UserState, { user }) => {
        var usr = [...state.users]
        usr.push(user)
        return { ...state, users: usr }
    }),
    on(actions.deleteUserSuccess, (state: UserState, { id }) => {
        return { ...state, users: [...state.users.filter((u) => u.id != id)] }
    })
)

export function userReducer(state: UserState | undefined, action: any) {
    return reducer(state, action)
}
