import React from 'react';
import Proptype from 'prop-types';

export default function Joker({ joke, btnText }) {
  return (
    <>
      <h1>{joke.setup}</h1>
      <p>{btnText !== 'Get Punchline' ? joke.punchline : ''}</p>
    </>
  );
}

Joker.propTypes = {
  joke: Proptype.shape({
    setup: Proptype.string,
    punchline: Proptype.string,
  }).isRequired,
  btnText: Proptype.string.isRequired,
};
