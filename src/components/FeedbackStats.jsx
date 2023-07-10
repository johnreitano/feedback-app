import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackStats() {
  const {feedback} = useContext(FeedbackContext)
  let average = feedback.reduce((total, item) => {
    return total + item.rating
  }, 0) / feedback.length
  average = average.toFixed(1)

  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 'N/A' : average}</h4>
    </div>
  )
}

export default FeedbackStats
