export const SET_USERS = 'SET_USERS';

export function setUsers ({users = []}) {
  return {
    type: SET_USERS,
    users,
    meta: {
      log: 'Replace the users with new users.'
    }
  }
}