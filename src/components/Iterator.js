import React from 'react';
import Button from './Button';

function Iterator(props) {
  const { index, prev, length, next, check } = props;
  const prevStatus = index === 0 ? 'inactive' : 'active';
  const nextStatus = index === length ? 'inactive' : 'active';
  const checkStatus = index === length ? 'active' : 'inactive';
  return (
    <div className="flx-row iterator">
      <Button
        text="Previous"
        color="Pale-Blue"
        handleClick={prev}
        status={`${prevStatus} btn-iterator`}
      />
      <Button
        text="Next Question"
        status={`${nextStatus} btn-iterator`}
        handleClick={next}
        color="strong-blue"
      />
      <Button
        type="button"
        status={`${checkStatus} btn-iterator`}
        color="strong-blue"
        text="Check the result"
        handleClick={check}
      />
    </div>
  );
}

export default Iterator;
