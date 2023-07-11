import { useState, useContext, useEffect } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function RatingSelect({ select }) {
  
  const [selected, setSelected] = useState(10)
  const {feedbackEdit} = useContext(FeedbackContext)

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setSelected(feedbackEdit.item.rating)
    }
  }, [feedbackEdit])

  const handleChange = (e) => {
    setSelected(+e.currentTarget.value)
    select(+e.currentTarget.value)
  }

  return (
    <ul className='rating'>
    {
      Array.from({ length: 10 }, (_, i) => {
        const id = i + 1
        return (
          <li key={`rating-${id}`}>
            <input
              type='radio'
              id={`num${id}`}
              name='rating'
              value={id}
              onChange={handleChange}
              checked={selected === id}
            />
            <label htmlFor={`num${id}`}>{id}</label>
          </li>
        )
      })
    }
  </ul>
  )
}

export default RatingSelect
