import { createAction, props } from '@ngrx/store'
import { User } from '../model/user'

export const loadUsers = createAction('[User] Load')
export const loadUsersSuccess = createAction('[User] Load Success', props<{ users: User[] }>())

export const createUser = createAction('[User] Add', props<{ user: User }>())
export const createUserSuccess = createAction('[User] Add Success', props<{ user: User }>())

export const updateUser = createAction('[User] updateUser', props<{ user: User }>())
export const updateUserSuccess = createAction('[User] updateUserSuccess', props<{ user: User }>())

export const deleteUser = createAction('[User] deleteUser', props<{ id: string }>())
export const deleteUserSuccess = createAction('[User] deleteUserSuccess', props<{ id: string }>())

export const emptyAction = createAction('[User] empty action')
