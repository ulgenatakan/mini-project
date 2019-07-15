import ACTIONS from "./action";
import _ from "lodash";

const defaultState = {
  items: []
};

const todoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.Types.USER_LOGIN: {
      let item = action.payload;
      let newItem = { id: state.items.length + 1, description: item };
      let newState = state;
      newState.items.push(newItem);
      return newState;
    }

    case ACTIONS.Types.USER_LOGOUT: {
      let newState = state;
      let index = _.findIndex(newState.items, { id: action.payload });
      newState.items.splice(index, 1);
      return newState;
    }

    default:
      return state;
  }
};

export default todoReducer;
