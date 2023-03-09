import { createFeatureSelector, createSelector } from '@ngrx/store'
import { UserState } from './user.state'

export const selectUserState = createFeatureSelector<UserState>('users')

export const selectAllUsers$ = createSelector(selectUserState, (state) => state.users)

export const selectIsLoading$ = createSelector(selectUserState, (state) => state.isLoading)

export const selectUserFirstName$ = createSelector(selectAllUsers$, (users) => users.map((x) => x.firstName))
