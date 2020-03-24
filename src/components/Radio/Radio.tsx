import React, { ReactEventHandler } from 'react';
// import PropTypes from 'prop-types';

export type Props = {
  onChange: ReactEventHandler;
};

function Radio(props: Props) {
  return (
    <div>
      <input onChange={props.onChange} type={'radio'} />
    </div>
  );
}

Radio.propTypes = {};

export default Radio;
