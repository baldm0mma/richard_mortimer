import './404Error.css';
import React from 'react';
import Typist from 'react-typist';
import { Link } from 'react-router-dom';

export const Error = () => {
  return (
    <Typist>
      <div>
        <h2 className='error-page'> 404: Page not found </h2>
        <Link to='/criminals'>
          <p className='back_to_database'>Click here to return to database</p>
        </Link>
      </div>
    </Typist>
  );
};
