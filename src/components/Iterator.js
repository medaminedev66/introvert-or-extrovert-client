import React from 'react';

function Iterator(props) {
  return (
    <div className="iterator">
      <button
        className={props.index === 0 ? 'inactive' : 'active'}
        onClick={props.prev}
      >
        Previous
      </button>
      <button
        className={props.index === props.length ? 'inactive' : 'active'}
        onClick={props.next}
      >
        Next
      </button>
    </div>
  );
}

export default Iterator;
