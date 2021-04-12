import React from 'react';
import Option from './Option'



const Options = (props) => (      
      <div>
        <button onClick={props.handleDeleteOptions}>remove shit!!</button> 
        {props.options.length === 0 && <p>add some shit</p>}      
       {
        props.options.map ((option) => (
          <Option 
          key={option} 
          optionText={option}
          handleDeleteOption={props.handleDeleteOption}
          />
        ))
       }      
     
      </div>
    );

  export default Options