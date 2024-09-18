import React from 'react';
import { CiUser } from "react-icons/ci";
import { CiBookmarkCheck } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { CiHome } from "react-icons/ci";
import './Side.scss';
import { Link } from 'react-router-dom';

const Side = () => {
  return (
    <div id='sidebar'>
      <Link to= "/" id='home'><CiHome />
      home</Link>
     
        
      
      <Link to="/boardList" id='search'> <CiSearch />
      board</Link>
      
      
      <Link to="/chat" id='alarm'>
        <IoIosNotificationsOutline />
        chat
      </Link>
      <Link to="/login" id='bookMark'><CiBookmarkCheck />
      login</Link>
     
      <a href="/profile" id='profile'>
        <CiUser />
        profile
      </a>
    </div>
  )
}

export default Side;
