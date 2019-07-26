import React, { Component } from 'react';
import { connect } from 'react-redux';
import Typist from 'react-typist';
import './Monitor.scss';

export class Monitor extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      name: ''
    };
  }

  componentDidMount = async () => {
    await console.log('props', this.props);
    this.setState({ name: this.props.userName });
    await console.log(this.state.name);
    console.log(this.props.username);
  }


  login = () => {
    return (
      <Typist>
        {`Hello ${this.state.name}, your Interdimentional Criminal Code Enforcement Organization login credentials have been accepted... please wait while we log you in...`}
      </Typist>
    )
  };

  // introToSystem = () => {
  //   return (
  //     <p className={this.state.counter === 1 && 'typing'}>
  //       {
  //         'I am G.L.E.A, the AI in charge of the Galictic Law Enforcement Atlas. My database contains information on some of the most vicious and vile criminals in the know multivers; along with thier known associates.'
  //       }
  //     </p>
  //   );
  // };

  // callToAction = () => {
  //   return (
  //     <p className='typing'>{`${
  //       this.props.userName
  //     }, you have summoned here by the Intergalactic Council on Multiverse Security and Defense to assist in the apprehension, incarceration, and service of justice to these noxious villians.`}</p>
  //   );
  // };

  // bestWishes = () => {
  //   return (
  //     <p className='typing'>{`We wish you all the best in your hunt, ${
  //       this.props.userName
  //     }...`}</p>
  //   );
  // };

  // display = () => {
  //   const introduction = [
  //     <p className={this.state.typing}>{`Hello ${
  //       this.props.userName
  //     }, your Interdimentional Criminal Code Enforcement Organization login credentials have been accepted... please wait while we log you in...`}</p>,
  //     <p className={this.state.typing}>
  //       {
  //         'I am G.L.E.A, the AI in charge of the Galictic Law Enforcement Atlas. My database contains information on some of the most vicious and vile criminals in the know multivers; along with thier known associates.'
  //       }
  //     </p>,
  //     <p className='typing'>{`${
  //       this.props.userName
  //     }, you have summoned here by the Intergalactic Council on Multiverse Security and Defense to assist in the apprehension, incarceration, and service of justice to these noxious villians.`}</p>,
  //     <p className='typing'>{`We wish you all the best in your hunt, ${
  //       this.props.userName
  //     };`}</p>
  //   ];
  //   return introduction[this.state.counter];
  // };

  render = () => {
    return (
      <section>
        {this.state.userName && this.login()}
      </section>
      
    );
  };
}

export const mapStateToProps = ({ userName, page }) => ({
  userName,
  page
});

export default connect(mapStateToProps, null)(Monitor);
