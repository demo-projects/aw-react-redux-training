import { SET_USERS } from "../actions/users";


export function usersReducer (users = [], action) {
  const {type, users: payload} = action;

  if(type === SET_USERS) return payload;

  return users;
}