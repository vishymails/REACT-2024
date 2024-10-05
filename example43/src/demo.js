import React from 'react';

export const MyComponent = props => {
   const [visible, setVisible] = React.useState(false);

   return (
    <>
        {visible && <MyChildComponent /> }

        <button onClick = { () => setVisible(!visible)}>
            Toggle Child Component display    
        </button> 
    </>
   );
}



const MyChildComponent = () => {
    const [userInfo, setUserInfo] = React.useState({
        name : "Vishwanath",
        lastname : "Rao"
    });

    React.useEffect( () => {
        console.log("Called when component is mounted");

        return () => console.log("Called on component unmounted");
    }, [] );

    return (
        <>
            <h4> {userInfo.name} {userInfo.lastname} </h4>
            <input value={userInfo.name}
                onChange={(e) => setUserInfo( {
                    ...userInfo,
                    name : e.target.value
                })} />
    
            <input value={userInfo.lastname}
                onChange={(e) => setUserInfo( {
                    ...userInfo,
                    lastname : e.target.value
                })} />
                
        </>
       )
}