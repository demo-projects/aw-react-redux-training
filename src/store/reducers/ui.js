import { TOGGLE_LOADER } from "../actions/ui";

const uiInitialState = {
  loading: false,
  selectedUser: null
}

export function uiReducer (ui = uiInitialState, action) {
  
  if(action.type === TOGGLE_LOADER) {
    return {
      ...ui,
      loading: action.visible
    }
  };

  return ui;
}