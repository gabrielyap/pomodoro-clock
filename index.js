function App(){
    const [displayTime, setDisplayTime] = React.useState(50*60);
    const [breakTime, setBreakTime] = React.useState(10*60);
    const [sessionTime, setSessionTime] = React.useState(50*60);
    const [timerOn, setTimerOn] = React.useState(false);
    const minsFormat = (time) =>{
        let mins = Math.floor(time / 60);
        let secs = time % 60;
        let newTime = "";
        if(mins < 10){
            newTime += ("0" + mins + ":");
            // console.log(newTime);
        }
        else{
            newTime += mins + ":";
            // console.log(newTime);
        }
        if(secs < 10){
            newTime += ("0" + secs);
            // console.log(newTime);
        }
        else{
            newTime += secs;
            // console.log(newTime);
        }
        return newTime
    };
    const changeTime = (amount, type) => {
        if (type == "break"){
            if (breakTime <= 60 && amount < 0){ //differs
                return;
            }
            setBreakTime((prev) => prev + amount);
        }
        else{
            if (sessionTime <= 60 && amount < 0){ //differs
                return;
            }
            setSessionTime((prev) => prev + amount);
            if (!timerOn){
            setDisplayTime(sessionTime + amount);
        }
        }
        
    };
    const controlTime = () =>{

    };
    const resetTime = () =>{

    };
    return(
        <div className = "center-align">
            <h1>Pomodoro Clock</h1>
            <div className = "dual-container">
                <Length
                title = {"Break Length"} 
                changeTime = {changeTime} 
                type = {"break"} 
                time = {breakTime} 
                minsFormat = {minsFormat}
                />
                
                <Length
                title = {"Session Length"} 
                changeTime = {changeTime} 
                type = {"session"} 
                time = {sessionTime} 
                minsFormat = {minsFormat}
                />
            </div>
            
            <h1>{minsFormat(displayTime)}</h1>
            <button className = "btn-large deep-purple" onClick = {controlTime}>
                {(timerOn) ?(
                    <i className = "material-icons">pause_circle_filled</i>
                )
                :(
                    <i className = "material-icons">play_circle_filled</i>
                )}
            </button>
            <button className = "btn-large deep-purple" onClick = {resetTime}>
                <i className = "material-icons">autorenew</i>

            </button>
        </div>
    );
}

function Length({title, changeTime, type, time, minsFormat}){
    return(
        <div>
            <h3>{title}</h3>
            <div className = "time-sets">
                <button className = "btn-small blue"
                    onClick = {() => changeTime(-60, type)} //js function starts with {}, empty function() does expression =>
                >
                    <i className="material-icons">arrow_downward</i>
                </button>

                <h3>{minsFormat(time)}</h3>

                <button className = "btn-small red"
                    onClick = {() => changeTime(60, type)}
                >
                    <i className="material-icons">arrow_upward</i>
                </button>
            </div>
        </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById('root')); //need REACTDOM before createRoot
root.render(<App />);