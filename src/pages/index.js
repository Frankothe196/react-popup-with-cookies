//lets use the usestate and useeffect hooks to control the popup window
import React, {useEffect, useState} from 'react'
import Cookies from 'universal-cookie'
//import sass (css) module
import * as popUpStyle from '../assets/css/main.module.scss'



/*
Popup component this would usually be a file in the components folder. eg '/src/components/popUp.js'
but for ease of explanation lets have it all on one page
*/
const PopUpDiv = (props) => {

  const cookies = new Cookies();


  //Lets use a state and useeffet to make the popup not render or act buggy
  const [visibility, setVisibility] = useState(false);

  /*
  Id like to add a delay for when we show the div, 
  useEffect is a great way to do this without triggering rerenders.
  The usual javascript like below wont work well as is.
  setTimeout(()=>(setVisibility(true)),5000);
  */
  // syntax useEffect(<function>,[<options>])

  useEffect(()=>(setTimeout(()=>(
              setVisibility(true)),5000))
            ,[]);

  //each time we click lets set a cookie that will last for a minute
  const handleCloseClick = () => {
    setVisibility(false)
    
    /*set cookie with name randomCookieCodeforPopUp at the path '/' which expires in 5 minutes, 
    samesite option need to be set on most browsers*/
    cookies.set('randomCookieCodeforPopUp','set', {path:'/', sameSite: 'strict', maxAge:300});

    // Print to console just so we can confirm its working
    console.log(cookies.get('randomCookieCodeforPopUp'));
  }

  //Rememebr we were to use 'useState' to control whether we will render the page
  if(visibility && cookies.get('randomCookieCodeforPopUp')!="set") {
    return(
      <div className={popUpStyle.container}>
        <span className={popUpStyle.title}>{props.text}</span>
        <div className={popUpStyle.buttons}>
            {props.url?<a onClick={handleCloseClick} href={props.url}>Open</a>:null}
            <button onClick={handleCloseClick}>Close</button>
        </div>
      </div>
    )
  }else{
    return null;
  }
}


//another great way to do minimal styling with react
const pageStyle = {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100vh',
  overflow: 'hidden',
  zIndex: '0',
  textAlign: 'center'
}

const headingStyle = {
  color: "#232129",
  fontSize: '3rem',
  marginTop: '15%',
  marginBottom: 0,
  lineHeight: 1.25
}

const pageButton = {
  margin: '50px auto',
  padding: '10px',
  background: 'white',
  border: '3px solid black', 
  font: '1.2rem black',
  cursor: 'pointer',
}


// Main page markup
const IndexPage = () => {

  //Delete cookie code
  const cookies = new Cookies();
  const deleteCookie = () => {
    cookies.remove('randomCookieCodeforPopUp', {path: '/',sameSite: 'strict'})
  }

  return (
    <main>
      {/* add the div to the main page export */}
      <PopUpDiv text="Hello World" url="https://github.com/Frankothe196/react-popup-with-cookies"/>
      <div style={pageStyle}>
        <h1 style={headingStyle}>Lets get Poppin</h1>
        <button style={pageButton} onClick={deleteCookie}>Delete cookie</button>
        <span>
          You may click the delete button if you dont want to wait 5 minutes for the cookie to expire and display the popup
          <br/>look in the browsers developer tools (storage tab )to see the cookies being added and deleted
        </span>
      </div>
    </main>
  )
}

export default IndexPage


