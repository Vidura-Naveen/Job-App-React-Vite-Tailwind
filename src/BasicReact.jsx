// rafce
// rafc
// rfc
import React from 'react'

const App = () => {
  const name = "vidura";
  const myarray = ['hal','mal','pol','gal','pal','nal','sall'];
  const x=30;
  const y= 50;
  const loggedin = true;
  const style ={
    color:'blue',
    fontSize:'50px'
  }

  if(! loggedin) {
    return (
    <div>
      <h1>you are logged in</h1>
    </div>)
  }


  return (
    <>
      <div className='text-5xl'>App</div>
      <h1 style={{ color:'red',fontSize:'24px' }}>Hello {name}</h1>
      <h1 style={ style }>Sum of value {x} plus {y} is {x+y}</h1>
      <ul>
        {myarray.map((listofpassarraynew , indexz)=>(
          <li key={indexz}>{listofpassarraynew}</li>
        ))}
      </ul>
      {loggedin?<h1>Hellow User</h1>:<h1>Hellow Member</h1>}
      {loggedin && <h1>Hellow User</h1>} 
    </>
  )
}

export default App