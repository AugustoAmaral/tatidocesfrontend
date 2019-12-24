import { CREATE_CANDY_COMMIT, READ_CANDY_COMMIT, DELETE_CANDY_COMMIT, UPDATE_CANDY_COMMIT } from "../actions/candy";

// avaliable viewTypes: 1 (Table), 2 (Card)

const initialState = {
  entries: [],
  viewType: 1
};

const candy = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CANDY_COMMIT:
      return {
        ...state,
        entries: [...state.entries, { ...action.candy, objectId: action.payload.objectId }]
      };
    case READ_CANDY_COMMIT:
      return { ...state, entries: [...action.payload.results] };
    case DELETE_CANDY_COMMIT:
      return {
        ...state,
        entries: state.entries.filter(e => e.objectId !== action.id)
      };
    case UPDATE_CANDY_COMMIT:
      return {
        ...state,
        entries: state.entries.map(e => (e.objectId === action.id ? { ...e, ...action.candy } : e))
      };
    default:
      return state;
  }
};
export default candy;
