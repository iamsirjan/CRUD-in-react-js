import React from "react";

const Contact = () => {
  return (
    <div className='container'>
      <div className='py-4'>
        <h1> contact page </h1>
        <form>
          <div class='mb-3'>
            <label for='exampleInputEmail1' class='form-label'>
              Email address
            </label>
            <input
              type='email'
              class='form-control'
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
            />
            
          </div>
          <div class='mb-3'>
            <label for='exampleInputPassword1' class='form-label'>
              Password
            </label>
            <input
              type='text'
              class='form-control'
              id='exampleInputPassword1'
            />
          </div>
          <div class='mb-3 form-check'>
          
            
          </div>
          <button type='submit' class='btn btn-primary'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
