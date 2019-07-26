import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Monitor.scss';

export class Monitor extends Component {
  constructor() {
    super();
    this.state = {
      counter: 1
    };
  }

  componentDidMount = async () => {
    setInterval(() => { this.setState({ counter: this.state.counter + 1 }) }, 8000);
  };
  // const introduction = [<p className='typing'>{`Hello ${userName}, your Interdimentional Criminal Code Enforcement Organization login credentials have been accepted... please wait while we log you in...`}</p>, <p className='typing'>{'I am G.L.E.A, the AI in charge of the Galictic Law Enforcement Atlas. My database contains information on some of the most vicious and vile criminals in the know multivers; along with thier known associates.'}</p>, <p className='typing'>{`${userName}, you have summoned here by the Intergalactic Council on Multiverse Security and Defense to assist in the apprehension, incarceration, and service of justice to these noxious villians.`}</p>, <p className='typing'>{`We wish you all the best in your hunt, ${userName};`}</p>];

  // const introLoop = () => {
  //   return introduction.map(track => () => setTimeout(track, 2000));
  // }

  login = () => {
    return (
      <p className='typing'>{`Hello ${
        this.props.userName
      }, your Interdimentional Criminal Code Enforcement Organization login credentials have been accepted... please wait while we log you in...`}</p>
    );
  };

  introToSystem = () => {
    return (
      <p className='typing'>
        {
          'I am G.L.E.A, the AI in charge of the Galictic Law Enforcement Atlas. My database contains information on some of the most vicious and vile criminals in the know multivers; along with thier known associates.'
        }
      </p>
    );
  };

  callToAction = () => {
    return (
      <p className='typing'>{`${
        this.props.userName
      }, you have summoned here by the Intergalactic Council on Multiverse Security and Defense to assist in the apprehension, incarceration, and service of justice to these noxious villians.`}</p>
    );
  };

  bestWishes = () => {
    return (
      <p className='typing'>{`We wish you all the best in your hunt, ${
        this.props.userName
      }...`}</p>
    );
  };

  render = () => {
    return (
      <div className='container'>
        {this.state.counter === 1 && this.login()}
        {this.state.counter === 2 ? () => this.introToSystem() : null}
        {this.state.counter === 3 && this.callToAction()}
        {this.state.counter === 4 && this.bestWishes()}
        <div className='hiders'>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
        </div>
      </div>
    );
  };
}

export const mapStateToProps = ({ userName }) => ({
  userName
});

export default connect(
  mapStateToProps,
  null
)(Monitor);
