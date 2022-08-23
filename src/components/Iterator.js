import React from 'react';

function Iterator(props) {
  return (
    <div className='iterator'>
      <button onClick={props.prev}>Previous</button>
      <button onClick={props.next}>Next</button>
    </div>
  );
}

export default Iterator;
