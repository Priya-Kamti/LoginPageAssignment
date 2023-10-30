import React from 'react';
import  ReactDOM  from 'react-dom/client';

import LoginPage from './LoginPage';





const App =()=>{
    return(
       <div>
        <LoginPage/>
       </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App/>)
