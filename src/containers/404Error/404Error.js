import './404Error.css';
import React from 'react';
import Typist from 'react-typist';

export const Error = () => {
  return (
    <Typist>
      <div>
        <h2 className='error-page'> 404: Page not found </h2>
      </div>
    </Typist>
  );
};
