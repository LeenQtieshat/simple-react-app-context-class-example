import React, {Component,createContext} from 'react'

export const ThemeContext = createContext()

export default class themContextProvider extends Component{
    state = {
        isLight : true,
        light:{color:"#000",bk:"#fff"},
        dark:{color:"#fff",bk:"#000"}
    }
   toggleTheme = () =>{
       console.log("toggleTheme")
       this.setState({isLight:!this.state.isLight})
   }

    render(){
        return <ThemeContext.Provider value={{...this.state,toggleTheme:this.toggleTheme}}>
            {this.props.children}
        </ThemeContext.Provider>
    }
}