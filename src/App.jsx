import { useState, useEffect } from 'react'
import './App.css'
import Description from "./components/Description/Description"
import Feedback from "./components/Feedback/Feedback"
import Options from "./components/Options/Options"
import Notification from "./components/Notification/Notification"

const App = () => {
const [feedCount, setFeedCount] = useState(JSON.parse(localStorage.getItem("Feedback"))??{good: 0, neutral: 0, bad: 0});
const totalFeedback = feedCount.good + feedCount.neutral + feedCount.bad;
const positive = Math.round((feedCount.good / totalFeedback) * 100);

const updateFeedback = (feedbackType) => {
setFeedCount(prev => ({...prev,
	[feedbackType]: prev[feedbackType] + 1}));
};	

const resetFeedback =()=> {
setFeedCount({good: 0, neutral: 0, bad: 0});
}

useEffect(()=>localStorage.setItem("Feedback", JSON.stringify(feedCount)),[feedCount]);

  return (
  <div className='container'>
	<Description/>
	<Options onReset={resetFeedback} onUpdate={updateFeedback} total={totalFeedback} />
	{totalFeedback > 0 ? <Feedback total={totalFeedback} positiveFB={positive} {...feedCount}/> : <Notification/>}
  </div>
  )
};

export default App;
