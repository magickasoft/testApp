
export function reducer(state = false, action = {}) {
  const { type } = action;

  switch(type) {
    case 'persist/REHYDRATE':

      return true
  }

  return state
}
