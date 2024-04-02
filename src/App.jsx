import starIcon from "./assets/icon-star.svg"
import thankYouSvg from "./assets/illustration-thank-you.svg"
import './App.css'
import { useState } from "react"

function App() {

  const [rating, setRating] =useState(null)
  const [submitted, setSubmitted] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);


  const handleRatingClick = (value) => {
    setRating(value);
    setSelectedButton(value);
  };


  const submitHandler =(e) =>{
    e.preventDefault()
    setSubmitted(true)

  }


  return (
    <div className={submitted? "submitted-card" : "card"}>
        <img className={submitted ? "thankYouIcon" : "starIcon"} src={submitted ? thankYouSvg : starIcon} alt="star-icon" />
        <h1> { submitted ? "Thank you!"  : "How did we do?"}</h1>
        <p className={submitted ? "submitted-text" : "text"}> { submitted ?"We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!" :
        "Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!"}</p>   

    <div className={ submitted?"selected-container": "rating-container"}>
      {submitted ? (
        <p className="selected-rating">You selected {rating} out of 5 </p>
      ) : (
        [1, 2, 3, 4, 5].map((value) => (
          <button className={`rating-button ${selectedButton === value ? "selected" : ""}`} key={value} onClick={() => handleRatingClick(value)}>
            {value}
          </button>
        ))
      )}
    </div>
        {!submitted && <button onClick={submitHandler} className="submit" type="submit">Submit</button>}
    </div>
    
  )
}

export default App


