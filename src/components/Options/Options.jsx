import s from "./Options.module.css"

const Options = ({ total, onUpdate, onReset })=> {
    return (<div className={s.optCont}>
        <button onClick={()=> onUpdate("good")} className={s.btn}>Good</button>
        <button onClick={()=> onUpdate("neutral")} className={s.btn}>Neutral</button>
        <button onClick={()=> onUpdate("bad")} className={s.btn}>Bad</button>
        {total > 0 && <button onClick={onReset} className={s.btn}>Reset</button>}
    </div>)
};

export default Options;