import React from 'react';
import Nav from './Nav'
import "../styles/app.css"
import Banner from './Banner';
import ThemeContextProvider from '../context/theme'
import AuthContextProvider from '../context/AuthContext';

export default class App extends React.Component  {
  render(){
  return (
     <div className="app container">
       <AuthContextProvider>
         <ThemeContextProvider>
            <Nav/>  
         </ThemeContextProvider> 
       </AuthContextProvider>
     
 
        <Banner/>
      
    </div>
  );

  }
}

