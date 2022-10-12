import Header from './components/Header';
import Formcontainer from './components/Formcontainer'
import Button from './components/Button'

import { useState } from "react";

function App() {
  
  const title = "Welcome to this simple website made using React.JS and Tailwind CSS";
  
  const [showform, setshowform] = useState(false)

  return (
    <div>
      <Header title={title} />
      <Formcontainer signup={showform} />
      <Button text={showform ? "Close" : "Sign Up"} onClick={()=>setshowform(!showform)} />
    </div>
  );
}

export default App;
