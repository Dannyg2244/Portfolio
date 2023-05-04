function CurrentMessage() {
    const date = new Date().getDate()
    return (
        ((day >= 1) && (day <= 5))
        ?<Weekdays />
        :<Weekend />
    )
}

function IsItSummer() {
    const summer = true
    return (
        (summer 
        ? <h1>It is truly summer</h1>
        : <h1>Let's watch Tv</h1>
        )
    )
}

funtion DayNight() {
    const hour = new Date().getHours()
    return (
        ((hour >= 6) && (hour <= 18)
        ? <h1>Sun Set</h1>
        : <h1>Moon Day</h1>)
    )
}