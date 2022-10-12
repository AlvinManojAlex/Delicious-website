const Button = ({text, onClick}) => {
  return (
    <div className="text-center bg-black w-1/3 py-2 absolute top-50 left-20">
      <button className="text-white font-bold" onClick={onClick}>{text}</button>
    </div>
  )
}

export default Button
