import React from 'react';
import { randomizeNames } from '../randomNames';

export const Monitor = () => {

  const name = randomizeNames();

  const login = () => {
    return `Hello ${name}, your Interdimentional Criminal Code Enforcement Organization login credentials have been accepted... please wait while we log you in...`
  }

  const intoToSystem = () => {
    return 'I am G.L.E.A, the AI in charge of the Galictic Law Enforcement Atlas. My database contains information on some of the most vicious and vile criminals in the know multivers; along with thier known associates.'
  }

  const callToAction = () => {
    return `${name}, you have summoned here by the Intergalactic Council on Multiverse Security and Defense to assist in the apprehension, incarceration, and service of justice to these noxious villians.`
  }

  const bestWishes = () => {
    return `We wish you all the best in your hunt, ${name};`
  }

  return (
    
  )
}