import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { UserState } from '../../store/user.state';
import * as actions from '../../store/user.actions'
import { User } from '../../model/user';
import { v4 as guid } from 'uuid'

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  formGroup = new FormGroup({
    id: new FormControl(),
    firstName: new FormControl(),
    lastName: new FormControl()
  })
  constructor(private store: Store<UserState>) { }

  ngOnInit(): void {
  }

  save(){
    if(this.formGroup.valid){
      const user: User = {
        ...this.formGroup.value,
        id: guid()
      } as User
      this.store.dispatch(actions.createUser({ user }))
    }
  }
}
