import Header from './components/Header';
import Formcontainer from './components/Formcontainer'

import { useState } from "react";

function App() {
  
  const title = "Welcome to this simple website made using React.JS and Tailwind CSS";
  
  const [showform, setshowform] = useState(false)

  return (
    <div className="flex flex-row">
      <Header title={title} />
      <Formcontainer signup={showform} showform={showform} setshowform={setshowform} />
    </div>
  );
}

export default App;

