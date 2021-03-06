import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "../actions";

const initialState = [];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { todo: action.payload, completed: false }];

    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.payload) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    case DELETE_TODO:
      return state.filter((todo, index) => {
        if (index !== action.payload) {
          console.log("delete fired");
          return todo;
        }
      });
    default:
      return state;
  }
};

export default todoReducer;
