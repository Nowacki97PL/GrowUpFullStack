import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listUsers } from '../actions/userActions'

function UserListScreen() {
  return (
    <div>
      
    </div>
  )
}

export default UserListScreen