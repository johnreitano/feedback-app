import {useState, useContext, useEffect} from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackForm({handleAdd}) {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')

  const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtnDisabled(false)
      setText(feedbackEdit.item.text)
      console.log(`setting rating to ${feedbackEdit.item.rating}`)
      setRating(feedbackEdit.item.rating)
    }
  }, [feedbackEdit])

  const handleTextChange = (e) => {
    const value = e.target.value
    setText(value)
    if(value === '') {
      setBtnDisabled(true)
      setMessage(null)
    } else if(value.trim().length < 10) {
      setMessage('Text must be at least 10 characters long')
    } else {
      setBtnDisabled(false)
      setMessage(null)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(text.trim().length >= 10) {
      const newFeedback = {text,rating}
      if(feedbackEdit.edit == true) {
        updateFeedback(feedbackEdit.item.id,newFeedback)

      } else {
        addFeedback(newFeedback)
      }
      setText('')
    }
  }

  return <Card>
    <form onSubmit={handleSubmit}>
      <h2>How would you rate your service with us?</h2>
      <RatingSelect select={(r)=>setRating(r)}/>
      <div className="input-group">
        <input
          onChange={handleTextChange}
          type="text"
          placeholder='Write a review'
          value={text}
        />
        <Button type='submit' isDisabled={btnDisabled}>Send</Button>
      </div>

      {message && <div className='message'>{message}</div>}
    </form>

    </Card>
}

export default FeedbackForm
