import s from "./Options.module.css"

const Options = ({ total, onUpdate, onReset })=> {
    return (<div className={s.optCont}>
        <button onClick={(event)=> onUpdate("good", event)} className={s.btn}>Good</button>
        <button onClick={(event)=> onUpdate("neutral", event)} className={s.btn}>Neutral</button>
        <button onClick={(event)=> onUpdate("bad", event)} className={s.btn}>Bad</button>
        {total > 0 && <button onClick={onReset} className={s.btn}>Reset</button>}
    </div>)
};

export default Options;