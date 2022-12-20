function App(){
    const [displayTime, setDisplayTime] = React.useState(50*60);
    const timeToMins = (time) =>{
        let mins = Math.floor(time / 60);
        let secs = time % 60;
        let newTime = "";
        if(mins < 10){
            newTime += ("0" + mins + ":");
            console.log(newTime);
        }
        else{
            newTime += mins + ":";
            console.log(newTime);
        }
        if(secs < 10){
            newTime += ("0" + secs);
            console.log(newTime);
        }
        else{
            newTime += secs;
            console.log(newTime);
        }
        return newTime
    };
    return(
        <div>
            <Length
            title = {"Break Length"} 
            changeTime = {null} 
            type = {"break"} 
            time = {null} 
            formatTime = {timeToMins}
            />
            <h1>{timeToMins(displayTime)}</h1> 

        </div>
    );
}

function Length({title, changeTime, type, time, formatTime}){
    return(
        <div>
            <h3>{title}</h3>
            <div className = "time-sets">
                <button className = "btn-small blue">
                    <i className="material-icons">arrow_downward</i>
                </button>
            </div>
        </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById('root')); //need REACTDOM before createRoot
root.render(<App />);