import React from 'react'
import {Child } from './Child';
function Parent() {
  return (
    <Child color="red" onClick={() => console.log("Clicked")} >

    </Child>
  )
};



export default Parent;