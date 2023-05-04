import React, { useContext } from 'react'
import { AuthContext } from '../providers/AuthProbider'
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

function PriveteRoute({children}) {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation();
    console.log(location);
    if(loading){
        return <Spinner animation="border" variant="success" />
    }
    if(user){
        return children;
    }
  return <Navigate to="/login" state={{from:location}}  replace></Navigate>
}

export default PriveteRoute