import { createStore } from "redux";

const initailState = {
  data: "",
};

const rootReducer = (
  state = initailState,
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case "ADD_DATA":
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default createStore(rootReducer);
