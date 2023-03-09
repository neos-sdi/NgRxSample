import { Injectable } from '@angular/core'
import { delay, Observable, of } from 'rxjs'
import { v4 as guid } from 'uuid'
import { User } from '../model/user'

@Injectable({
    providedIn: 'root',
})
export class UserService {
    private users: User[] = [
        {
            id: guid(),
            firstName: 'Albert',
            lastName: 'Dupont',
        },
        {
            id: guid(),
            firstName: 'Zébulon',
            lastName: 'Durand',
        },
        {
            id: guid(),
            firstName: 'Martin',
            lastName: 'Clément',
        },
    ]
    constructor() {}

    load$() {
        console.log('loading')
        return of(this.users).pipe(delay(5000))
    }

    add(user: User): Observable<User> {
        console.log('user added', user)
        // throw new Error('erreur')
        return of(user)
    }

    delete(id: string): Observable<string> {
        console.log('user deleted', id)
        return of(id)
    }
}
