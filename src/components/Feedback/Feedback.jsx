import s from "./Feedback.module.css"

const Feedback =({total, good, neutral, bad})=>{
    
const positive = Math.round((good / total) * 100);
return (<> {total > 0 ? <div className={s.feedCont}>
    <p className={s.textcontent}>Good: {good}</p>
    <p className={s.textcontent}>Neutral: {neutral}</p>
    <p className={s.textcontent}>Bad: {bad}</p>
    <p className={s.textcontent}>Total: {total}</p>
    <p className={s.textcontent}>Positive: {`${positive}%`}</p>
    </div> : "No feedback yet"}
    </>)
};

export default Feedback;

