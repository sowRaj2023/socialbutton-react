const Button = (props) => {
  const { buttonText, className } = props
  return (
    <button className={`button ${className}`}>{buttonText}</button>
  )



}

const element = (
  <div className="bg-container">
    <h1>Social Buttons</h1>
    <div className="button-container">
      <Button buttonText="Like" className="like" />
      <Button buttonText="Comment" className="command" />
      <Button buttonText="Share" className="share" />
    </div>

  </div>

)
ReactDOM.render(element, document.getElementById("root"))
