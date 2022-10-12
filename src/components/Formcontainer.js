import Form from './Form'
import Button from "./Button";

const Formcontainer = ({signup, showform, setshowform}) => {
  return (
    <div className="border-solid border-2 rounded-md relative top-20 right-20 w-1/3">
      <h3 className="text-center text-3xl text-white font-bold">News Letter</h3>
      {signup ? <Form /> : ''}
      <Button text={showform ? "Close" : "Sign Up"} onClick={()=>setshowform(!showform)} />
    </div>
  )
}

export default Formcontainer
