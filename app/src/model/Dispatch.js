export const createDispatch = (reducer, initialState) => {
  let state = reducer(initialState, undefined);
  return (action) => {
    state = reducer(state, action);
    return state;
  }
}

export const createPersistentDispatch = (reducer, key) => {
  const persisted = localStorage.getItem(key);
  const initialState = persisted !== null ? JSON.parse(persisted) : undefined;
  const dispatch = createDispatch(initialState, reducer);
  return (action) => {
    const newState = dispatch(action);
    localStorage.setItem(JSON.stringify(newState));
    return newState;
  }
}