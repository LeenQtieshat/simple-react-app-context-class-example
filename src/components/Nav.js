import React,{Component} from "react"
import {ThemeContext} from "../context/theme"
import {AuthContext} from '../context/AuthContext'
import "../styles/nav.css"

export default class Nav extends Component{
  
    
  render(){
     return <AuthContext.Consumer>
         {(auth)=>(
          
            <ThemeContext.Consumer>
              {(theme)=>{
                 const {isLight,light,dark} = theme
                return <div style={{padding:"10px",background:isLight? light.bk: dark.bk, color:isLight? light.color: dark.color}} className="ui secondary  menu">
                <a className={`item ${isLight?"":"togglecolor"}`} >
                  Home
                </a>
                <a className={`item ${isLight?"":"togglecolor"}`} >
                  Messages
                </a>
                <a className={`item ${isLight?"":"togglecolor"}`} >
                  Friends
                </a>
                <div className="right menu">
                  
                  <a className={`ui item active ${isLight?"":"togglecolor"}`} onClick={()=>theme.toggleTheme()} >
                    Toggle Theme
                  </a>
                  <a className={`ui item active ${isLight?"":"togglecolor"}`} onClick={()=>auth.toggleAuth()}>
                    {auth.isAuth? "Logout" : "Login"}
                  </a>
                </div>
              </div>   
             }}
            </ThemeContext.Consumer>

         )}
    </AuthContext.Consumer>
    
}

}


// static contextType = ThemeContext
// render(){
  
//   const {isLight,light,dark} = this.context
//   return <div style={{padding:"10px",background:isLight? light.bk: dark.bk, color:isLight? light.color: dark.color}} className="ui secondary  menu">
//               <a className={`item ${isLight?"":"togglecolor"}`} >
//                 Home
//               </a>
//               <a className={`item ${isLight?"":"togglecolor"}`} >
//                 Messages
//               </a>
//               <a className={`item ${isLight?"":"togglecolor"}`} >
//                 Friends
//               </a>
//               <div className="right menu">
                    
//                 <a className={`ui item active ${isLight?"":"togglecolor"}`} onClick={()=>this.context.toggleTheme()} >
//                   Toggle Theme
//                 </a>
//                 <a className={`ui item active ${isLight?"":"togglecolor"}`} onClick={()=>this.context.toggleAuth()}>
//       Logout
//                 </a>
//               </div>
//             </div>   
 
// }

// }