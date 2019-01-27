import React from 'react';
const form = (props) =>{
  let formStyle = {
    margin: '50px auto',
    display: 'block',
    padding: '10px',
    width: '40%'
  };
  let formGroup = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: '10px'
  };
  let label = {
    flexGrow: '2',
    textAlign: 'left',
    flexBasis: "100%",
    padding: '10px 0'
  };
  let textBox = {
    flexGrow: '5',
    border: '1px solid #DDD',
    padding: "10px",
    fontSize: '20px',
    fontWeight: 'lighter'
  };
  return (
    <form  style={formStyle}>
      <h3>Put your info</h3>
      <div style={formGroup}>
        <label style={label}>Full Name :- </label>
        <input type='text' style={textBox} onKeyUp={props.changeyName}/>
      </div>
      <div style={formGroup}>
        <label style={label}>Age :- </label>
        <input type='text' style={textBox} onKeyUp={props.changeyAge}/>
      </div>
      <div style={formGroup}>
        <label style={label}>Hobby :-</label>
        <input type='text' style={textBox} onKeyUp={props.changeyHobby}/>
      </div>
    </form>
  );
}
export default form;
