import {useState} from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'

function FeedbackForm({handleAdd}) {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')

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
      handleAdd({text,rating})
      setText('')
    }
  }

  return <Card>
    <form onSubmit={handleSubmit}>
      <h2>How would you rate your service with us?</h2>
      {/* <RatingSelect select={setRating} selected={rating}/> */}
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
