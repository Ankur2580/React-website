import React from 'react';

const Focus = () => {
return (
  <>
  <input type="text" className="input  loginput"  onBlur = {() => {
    alert("focyus");
  }}/>
  </>
);
}
export default Focus;