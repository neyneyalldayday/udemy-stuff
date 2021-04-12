import React from 'react'

const Action = (props) => (
      <div>
        <button 
        onClick={props.handlePick}
        disabled={!props.hasOptions}
        >
          what should i doo??
        </button>
      </div>
    )
  
  export default Action;
  