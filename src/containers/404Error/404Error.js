import React from 'react';
import Typist from 'react-typist';
import './404Error.css';

export const Error = () => {
  return (
    <Typist>
      <div>
        <h2 className='error-page'> 404: Page not found </h2>
      </div>
    </Typist>
  );
};
