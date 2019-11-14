import React, {useEffect} from 'react';
import { useUserActions } from '../../hooks/commands/useUserActions';

const Users = () => {
  const {fetchAllUsers} = useUserActions();

  useEffect(() => {
    fetchAllUsers();
  }, [])

  return (
    <div>
      <h2>Users</h2> 
      <ul>
        <li>user name</li>  
        <li>user name</li>  
      </ul>
    </div>
  )
}

export default Users;