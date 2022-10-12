const Form = () => {
  return (
    <div className="px-4 py-4 mx-auto">
      <form action="">
        <p className="text-gray-900">First Name : </p>
        <input className="input-box" type="text" placeholder="Your first name" />
        <br />
        <p className="text-gray-900">Last Name : </p>
        <input className="input-box" type="text" placeholder="Your last name" />
        <br />
        <button className="text-white font-bold bg-black my-2 py-1 px-2 w-1/2 relative left-12">Submit</button>
      </form>
    </div>
  );
}

export default Form
