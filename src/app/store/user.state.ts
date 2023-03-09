import { User } from "../model/user"


export interface UserState {
  users: User[],
  isLoading: boolean
}

export const UserInitialState: UserState = {
  users: [],
  isLoading: false
}
