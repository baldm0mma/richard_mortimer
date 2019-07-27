import React, { Component } from 'react';
import { connect } from 'react-redux';
import Typist from 'react-typist';
import './Monitor.scss';

export class Monitor extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  login = () => {
    return (
      <section>
        <Typist avgTypingDelay={50}>
          {`Hello ${this.props.userName}, your Interdimentional Criminal Code Enforcement Organization login credentials have been accepted...`}
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
          <Typist.Delay ms={1000} />
          {`...`}
          <br />
          <br />
          <Typist.Delay ms={2000} />
          {`I am G.L.E.A, the AI in charge of the Galictic Law Enforcement Atlas. My database contains information on some of the most vicious and vile criminals in the know multivers; along with thier known associates.`}
          <br />
          <Typist.Delay ms={2000} />
          {`${this.props.userName}, you have summoned here by the Intergalactic Council on Multiverse Security and Defense to assist in the apprehension, incarceration, and service of justice to these noxious villians.`}
          <br />
          <Typist.Delay ms={3000} />
          {`We wish you all the best in your hunt, ${this.props.userName}...`}
        </Typist>
      </section>
    );
  };

  render = () => {
    return <section>{this.props.userName && this.login()}</section>;
  };
}

export const mapStateToProps = ({ userName, page }) => ({
  userName,
  page
});

export default connect(
  mapStateToProps,
  null
)(Monitor);
