import { createContext, useState } from 'react'

const AppContext = createContext();


export const AppProvider = ({children}) =>{

   const [state, setState] = useState({name:"React", training:true});

   const changeName = (name) =>{
        setState((prevState)=> ({...prevState, name}))
   }
   const value = {...state, changeName}
    return(
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}


export default AppContext;

