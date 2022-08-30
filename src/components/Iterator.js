import React from 'react';

function Iterator(props) {
  return (
    <div className="flx-row iterator">
      <button
        className={
          props.index === 0 ? 'inactive' : 'active btn-iterator btn-itr-prev'
        }
        onClick={props.prev}
      >
        Previous
      </button>
      <button
        className={
          props.index === props.length ? 'inactive' : 'active btn-iterator '
        }
        onClick={props.next}
      >
        Next Question
      </button>
      <button
        className={
          props.index === props.length
            ? 'active btn-check btn-iterator'
            : 'inactive'
        }
        onClick={props.check}
      >
        Check the result
      </button>
    </div>
  );
}

export default Iterator;
