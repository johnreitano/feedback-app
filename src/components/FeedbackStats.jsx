import PropTypes from 'prop-types'

function FeedbackStats({feedback}) {
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

FeedbackStats.propTypes = {
  feedback: PropTypes.array.isRequired,
}

export default FeedbackStats
