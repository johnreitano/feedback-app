import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'
import FeedbackStats from '../components/FeedbackStats'
import FeedbackList from '../components/FeedbackList'
import FeedbackData from '../data/FeedbackData'
import FeedbackForm from '../components/FeedbackForm'

function HomePage() {
  const [feedback, setFeedback] = useState(FeedbackData)

  const deleteFeedback = (id) => {
    // if (window.confirm('Are you sure you want to delete this feedback?')) {}
    setFeedback(feedback.filter((item) => item.id !== id))
  }

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }
  return (
    <>
      <FeedbackForm handleAdd={addFeedback} />
      <FeedbackStats feedback={feedback} />
      <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
    </>
  )
}

export default HomePage
