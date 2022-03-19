const redux = require("redux");
const createStore = redux.createStore;

const initialState = {
  firstName: "",
  lastName: "",
  age: 0,
  photo: "",
};

// Reducer
const rootReducer = (state = initialState, action) => {
  if (action.type === "EDIT_CONTACT") {
    return {
      ...state,
      firstName: "",
      lastName: "",
      age: 0,
      photo: "",
    };
  }
};

// Store
const store = createStore(rootReducer);
console.log(store.getState());

// Subscription
store.subscribe(() => {
  console.log("store changed; ", store.getState());
});

// Dispatching Action
store.dispatch({ type: "EDIT_CONTACT" });
