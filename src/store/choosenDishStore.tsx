import { createStore } from "redux";

const initailState = {
  dish: "",
};

const rootReducer = (
  state = initailState,
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case "PASS_DATA":
      return {
        ...state,
        dish: action.payload,
      };
    default:
      return state;
  }
};

export default createStore(rootReducer);