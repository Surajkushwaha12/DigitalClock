const clockFunc = () => {
    let date = new Date();
    let data = String(date).split(" ")
    let time = Array.from(data[4].split(":"))
    let day = date.getDay()
    let Day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"]
    
    // convert the time 24 hour format to 12 hour format 

    let amp = 'AM'
    if(time[0] >= 12)
    {
        amp = 'PM';
    }
    if(time[0] >12)
    {
        time[0] = time[0] -12
    }
    else if(time[0] == 0)
    {
        time[0] = 12
    }

    // Get the value in the html body

    let hour = document.getElementById("h")
    let min = document.getElementById("m")
    let sec = document.getElementById("s")
    let currDate = document.getElementById("d")
    let currDay = document.getElementById("d1")
    let zone = document.getElementById("apm")

    // insert the value in the html body 

    hour.innerHTML = time[0]
    min.innerHTML = time[1]
    sec.innerHTML = time[2]
    currDate.innerHTML = data[2]+" "+data[1]+" "+data[3]
    currDay.innerHTML = Day[day]
    zone.innerHTML = amp
}


let timerId = setInterval(clockFunc, 1000)