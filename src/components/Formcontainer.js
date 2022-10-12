import Form from './Form'

const Formcontainer = ({signup}) => {
  return (
    <div>
      <h3>News Letter</h3>
      {signup ? <Form /> : ''}
    </div>
  )
}

export default Formcontainer
