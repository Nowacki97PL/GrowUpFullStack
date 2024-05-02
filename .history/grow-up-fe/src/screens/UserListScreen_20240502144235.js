import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listUsers } from '../actions/userActions'

function UserListScreen() {

    const dispatch = useDispatch()

    const userList = useSelector(state => state.userList)
    const { loading, error, users } = userList

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {
        dispatch(listUsers())
    }, [dispatch])


  return (
    <div>
      <h1>Users</h1>
      { loading
      ? <Loader/>
        }
    </div>
  )
}

export default UserListScreen
