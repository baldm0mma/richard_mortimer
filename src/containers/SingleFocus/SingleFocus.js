import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Typist from 'react-typist';

export const SingleFocus = () => {
  return (
    <section>
      <header>
        <p>Back To Database</p>
        <p>Log Out</p>
      </header>
      <Typist>
        <aside>
          <h1>Name: </h1>
          <p>Status: </p>
          <p>Species: </p>
          <p>Gender: </p>
          <p>Origin: </p>
          <p>Current Location: </p>
          <p>Associates: </p>
        </aside>
      </Typist>
      <div>
        <section>
          <article>
            <img src={} alt={`mugshot of...`}></img>
          </article>
        </section>
        <section>
          <h2>Known Associates</h2>
          <article>
            <img src={} alt={`mugshot of...`}></img>
            <Typist>
              <p>Name: </p>
              <p>Species: </p>
              <p>Status: </p>
            </Typist>
          </article>
          <article>
            <img src={} alt={`mugshot of...`}></img>
            <Typist>
              <p>Name: </p>
              <p>Species: </p>
              <p>Status: </p>
            </Typist>
          </article>
          <article>
            <img src={} alt={`mugshot of...`}></img>
            <Typist>
              <p>Name: </p>
              <p>Species: </p>
              <p>Status: </p>
            </Typist>
          </article>
        </section>
      </div>
    </section>
  )
}