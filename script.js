function createStore(initialState){
  let state = initialState;
  const listeners = [];

  function getState(){
    return state;
  }

  function setState(newState){
    state = newState;
    listeners.forEach(fn => fn(state));
  }

  function subscribe(fn){
    listeners.push(fn);
    fn(state);
  }

  return { getState, setState, subscribe };
}

// create store
const store = createStore({ count: 0 });

// UI render
const countEl = document.getElementById('count');
store.subscribe(state=>{
  countEl.innerText = 'Count: ' + state.count;
});

// actions
function increment(){
  store.setState({ count: store.getState().count + 1 });
}

function decrement(){
  store.setState({ count: store.getState().count - 1 });
}
