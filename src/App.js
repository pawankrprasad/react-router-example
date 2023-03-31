
import './App.css';
import { useContext, useState } from 'react';

import AppRoute from './Layouts/AppRoute';
import NavigationLinks from './Layouts/NavigationLinks';


const useSwitch = (defaultValue) =>{
  const [value, setValue] = useState(defaultValue);
  const on = () => setValue(true);
  const off = () =>setValue(false);
  return [value, {on,off}];
}


const App = () => {
  return(
    <div>
     <NavigationLinks/>
     <AppRoute/>
    </div>
  )
}


// const App = () =>{

//   //const [state, setState] =  useState("Welcome to React")
//   const [state, switchFun] = useSwitch(false)
//    const ctx = useContext(AppContext);

//    console.log("App Component", ctx);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <button onClick={switchFun.on}>Switch On</button>
//         <button onClick={switchFun.off}>Switch Off</button>

//         <button onClick={()=>ctx.changeName("New Name")}>Change Context Name</button>


//        {state ? "State value is true": "State value is false"}
//       <div>
//       {`${ctx.name} ${ctx.training}`}
//       </div>
//        <Main/>
//       </header>
//     </div>
//   );
// }

export default App;
