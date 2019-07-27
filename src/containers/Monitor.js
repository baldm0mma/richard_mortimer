import React from 'react';
import { connect } from 'react-redux';
import Typist from 'react-typist';
import { Link } from 'react-router-dom';
import './Monitor.css';

export const Monitor = ({ userName }) => {
  const login = () => {
    return (
      <section className='type_container'>
        <Typist avgTypingDelay={30}>
          {`Hello Officer ${userName}, your Interdimentional Criminal Code Enforcement Organization login credentials have been accepted...`}
          <br />
          <Typist.Delay ms={1000} />
          {`Please wait while we log you in...`}
          <br />
          <Typist.Delay ms={1000} />
          {`...`}
          <br />
          <Typist.Delay ms={1000} />
          {`...`}
          <br />
          <Typist.Delay ms={1000} />
          {`...`}
          <br />
          <Typist.Delay ms={1500} />
          {`Login successful`}
          <br />
          <br />
          <Typist.Delay ms={1000} />
          {`I am G.L.E.A, the AI in control of this GALACTIC LAW ENFORCEMENT ATLAS terminal.`}
          <br />
          <Typist.Delay ms={1000} />
          {`My database contains information on some of the most brutalizing and vile criminals in the known multiverse.`}
          <br />
          <br />
          <Typist.Delay ms={2000} />
          {`${userName}, your active status has been reinstated by the Intergalactic Council on Multiverse Security and Defense to assist in the SWIFT DISTRIBUTION OF JUSTICE AND PUNISHMENT to these notorious villains.`}
          <br />
          <br />
          <Typist.Delay ms={1000} />
          <Link to='/criminals' className='proceed-link'>
            Proceed to database?
          </Link>
        </Typist>
      </section>
    );
  };

  return <section>{userName && login()}</section>;
};

export const mapStateToProps = ({ userName, page }) => ({
  userName,
  page
});

export default connect(
  mapStateToProps,
  null
)(Monitor);
