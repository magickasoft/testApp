import {
    Nothing,
    Just
} from 'data.maybe';

export function reducer(state = Nothing(), action = {}) {
  const { type } = action;

  switch(type) {
    case 'persist/REHYDRATE':

      return Just(true)
  }

  return state
}
