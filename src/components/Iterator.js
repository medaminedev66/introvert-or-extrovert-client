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

      {/* <button
        className={
          index === 0 ? 'inactive' : 'active btn-iterator btn-itr-prev'
        }
        onClick={props.prev}
      >
        Previous
      </button> */}

      <Button
        text="Next Question"
        status={`${nextStatus} btn-iterator`}
        handleClick={next}
        color="strong-blue"
      />
      {/* <button
        className={
          props.index === props.length ? 'inactive' : 'active btn-iterator '
        }
        onClick={props.next}
      >
        Next Question
      </button> */}
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
