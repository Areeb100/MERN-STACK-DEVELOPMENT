// 1. React Components are functions.
// 2. Function name must start with uppercase letter.
// 3. Function should return atleast single JSX element.
// 4. Function should be exported.

import React from 'react';
import './home.css';
// import myimg from '';

const Home = () => {
  return (
    <div>
        <h1 className='myclass' style={{color : 'red', backgroundColor : 'yellow'}}>Home Page</h1>
        <hr />
        {/* <img src={myimg} alt="" /> */}
    </div>
  )
}

export default Home;