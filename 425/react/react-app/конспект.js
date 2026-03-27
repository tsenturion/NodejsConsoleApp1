export class AppComponent {
  count: number = 0;

  increment() {
    this.count++;
  }
}

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  count: number = 0;

  increment() {
    this.count++;
  }
}
constructor(private counterService: CounterService) {}


import { createAction } from '@ngrx/store';

export const increment = createAction('[Counter] Increment');


import { createReducer, on } from '@ngrx/store';

export const initialState = { count: 0 };

export const counterReducer = createReducer(
  initialState,
  on(increment, state => ({ count: state.count + 1 }))
);

import { Store } from '@ngrx/store';

constructor(private store: Store<{ count: number }>) {}
this.store.dispatch(increment());

this.store.select('count').subscribe(value => {
  console.log(value);
});

import { createEffect, ofType } from '@ngrx/effects';

loadUsers$ = createEffect(() =>
  this.actions$.pipe(
    ofType(loadUsers),
    switchMap(() => this.http.get('/api/users')
      .pipe(
        map(users => loadUsersSuccess({ users }))
      )
    )
  )
);

import { createSelector } from '@ngrx/store';

export const selectCount = (state: any) => state.count;

export const doubleCount = createSelector(
  selectCount,
  count => count * 2
);