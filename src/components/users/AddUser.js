import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const AddUser = () => {
  let history = useHistory();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    number: "",
    wname: "",
  });

  const { name, username, email, number, wname } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/users", user);
    history.push("/");
  };
  
  
  // reacr form use garexi sidai esto garda vayo
//   const onSubmit = async (data) => {
    
//     await axios.post("link here " , data);
    
//   }

  return (
    <>
      <div className='container'>
        <div className='py-4'>
          <h1> Add User </h1>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className='mb-3'>
              <label className='form-label'>Name</label>
              <input
                type='text'
                className='form-control'
                name='name'
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className='mb-3'>
              <label className='form-label'>Username</label>
              <input
                type='text'
                className='form-control'
                name='username'
                value={username}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className='mb-3'>
              <label className='form-label'>E-mail</label>
              <input
                type='text'
                className='form-control'
                name='email'
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className='mb-3'>
              <label className='form-label'>Phone No.</label>
              <input
                type='number'
                className='form-control'
                name='number'
                value={number}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className='mb-3'>
              <label className='form-label'>Website Name</label>
              <input
                type='text'
                className='form-control'
                name='wname'
                value={wname}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className='mb-3 form-check'></div>
            <button type='submit' className='btn btn-primary'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddUser;
