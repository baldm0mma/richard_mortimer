import './Monitor.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import Typist from 'react-typist';

export class Monitor extends Component {
  login = () => {
    return (
      <>
        <header className='type_header'>
          <Link to='/criminals'>
            <p className='skip_intro'>Skip Intro =></p>
          </Link>
        </header>
        <section className='type_container'>
          <Typist avgTypingDelay={40}>
            {`Hello Officer ${
              this.props.userName
            }, your Interdimentional Criminal Code Enforcement Organization login credentials have been accepted...`}
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
            {`${
              this.props.userName
            }, your active status has been reinstated by the Intergalactic Council on Multiverse Security and Defense to assist in the SWIFT DISTRIBUTION OF JUSTICE AND PUNISHMENT to these notorious villains.`}
            <br />
            <br />
            <Typist.Delay ms={1000} />
            <Link to='/criminals' className='proceed-link'>
              Proceed to database?
            </Link>
          </Typist>
        </section>
      </>
    );
  };

  render = () => {
    return <section>{this.props.userName && this.login()}</section>;
  };
}

export const mapStateToProps = ({ userName }) => ({
  userName
});

export default connect(
  mapStateToProps,
  null
)(Monitor);
