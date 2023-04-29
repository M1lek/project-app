import React from "react";
import LoginForm from "./Pages/Login/LoginForm";
import { BrowserRouter ,Routes , Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="https://lovely-torte-8176de.netlify.app" element={<LoginForm />}/>
        </Routes>
    </BrowserRouter>
    
  );
}

export default App;
