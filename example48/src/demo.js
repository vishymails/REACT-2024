import React from 'react';

const MyContext = React.createContext( {
  username : "",
  setUsername : () => {}
});



export const MyContextProvider = props => {
  const [username, setUsername] = React.useState("Dr. Rao");

  return (
    <MyContext.Provider value = {{username, setUsername}}>
      {props.children}
    </MyContext.Provider>
  );
}


export const MyComponent = () => {
  const myContext = React.useContext(MyContext);

  return (
    <>
      <p> Hi</p>
      <h3> {myContext.username} </h3>
    </>
  )
}