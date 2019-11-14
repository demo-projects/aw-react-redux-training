import {useDispatch} from 'react-redux';
import { toggleLoader } from '../../store/actions/ui';
import { apiRequest } from '../../store/actions/api';
import { setUsers } from '../../store/actions/users';

export function useUserActions() {
  const dispatch = useDispatch();

  const fetchAllUsers = () => {

    
    dispatch(toggleLoader({
      visible: true,
      trigger: 'From users'
    }));

    dispatch(apiRequest({
      method: 'GET',
      url: '/users',
      onSuccess: onLoadUsersSuccess
    }))
  }

  const onLoadUsersSuccess = (users) => {

     dispatch(setUsers({
       users
     }));
     
     dispatch(toggleLoader({
       visible: false,
       trigger: 'From users'
     }))
  }

  return { fetchAllUsers }
}