import s from "./Feedback.module.css"

const Feedback =({positiveFB, total, good, neutral, bad})=>{ 
return (<div className={s.feedCont}>
    <p className={s.textcontent}>Good: {good}</p>
    <p className={s.textcontent}>Neutral: {neutral}</p>
    <p className={s.textcontent}>Bad: {bad}</p>
    <p className={s.textcontent}>Total: {total}</p>
    <p className={s.textcontent}>Positive: {positiveFB}%</p>
    </div>)
};

export default Feedback;

