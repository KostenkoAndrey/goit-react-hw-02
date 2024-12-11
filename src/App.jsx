import { useState } from 'react'
import './App.css'
import Description from "./components/Description/Description"
import Feedback from "./components/Feedback/Feedback"
import Options from "./components/Options/Options"



const App = () => {
const [feedCount, setFeedCount] = useState({good: 0, neutral: 0, bad: 0});
const totalFeedback = feedCount.good + feedCount.neutral + feedCount.bad;

const updateFeedback = (feedbackType, event) => {
	setFeedCount(prev => ({...prev,
		[feedbackType]: prev[feedbackType] + 1}));
		event.target.blur();
};	

const resetFeedback =(evt)=> {
	setFeedCount(prev => ({...prev, ...{good: 0, neutral: 0, bad: 0}}));
	evt.target.blur();
}

  return (
  <div className='container'>
	<Description/>
	<Options onReset={resetFeedback} onUpdate={updateFeedback} total={totalFeedback} />
	<Feedback total={totalFeedback} {...feedCount}/>
  </div>
  )
};

export default App;
