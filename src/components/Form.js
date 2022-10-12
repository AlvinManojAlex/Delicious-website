const Form = () => {
  return (
    <div>
      <form action="">
        <label htmlFor="FName">First Name : </label>
        <input type="text" placeholder="Your first name" />
        <br />
        <label htmlFor="LName">Last Name : </label>
        <input type="text" placeholder="Your last name" />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Form
