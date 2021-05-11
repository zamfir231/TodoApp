const HeaderTextDate = ({date}) => {
    return (
        <div>
            <span id='beforeYesterDay'>{ date - 2 }</span>
            <span id='yesterDay'>{date - 1}</span>
            <span id='todayDate'>{date}</span>
            <span id='tomorrow'>{date + 1}</span>
            <span id='afterTomorrow'>{ date +  2}</span>
        </div>
    )
}

export default HeaderTextDate