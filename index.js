// Greetings
let greetings = [{ greeting: "good morning", message: "have a good activity" },
{ greeting: "good afternoon", message: "keep spirit!" },
{ greeting: "good evening", message: "have a nice dream" },
{ greeting: "good night", message: "have a nice dream" }
]
let name = "Billy :)"
let main = null
let submain = null

function typeWriter() {

    if (i < main.length) {
        document.getElementById("content").innerHTML += main.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}

// dateTime
let i = 0
let walkingDateTime = setInterval(datetime, 1000)

function datetime() {
    let date = moment();
    let dateTime = date.format('hh:mm:ss A')
    document.getElementById("datetime").innerHTML = dateTime
    return dateTime
}

getGreetingTime = (currentTime) => {
    if (!currentTime || !currentTime.isValid()) { return 'Hello'; }

    const splitAfternoon = 12; // 24hr time to split the afternoon
    const splitEvening = 17; // 24hr time to split the evening
    const currentHour = parseFloat(currentTime.format('HH'));

    if (currentHour >= splitAfternoon && currentHour < splitEvening) {
        // Between 12 PM and 5PM - Afternoon
        return 1
    } else if (currentHour >= splitEvening) {
        // Between 5PM and Midnight - Evening
        return 2
    }
    // Between dawn and noon - Morning
    return 0
}

let now = getGreetingTime(moment())

if (now == 1) {
    main = `${greetings[1].greeting}, ${name}`
    submain = `${greetings[1].message}`
    datetime()
    typeWriter()

    document.body.style.backgroundColor = "#edf2f7"
    document.getElementById("music").innerHTML = '<source src="music/Back To You - Selena Gomez.mp3" type="audio/mpeg">'
    document.getElementById("subContent").innerHTML = submain

} else if (now == 2) {
    main = `${greetings[2].greeting}, ${name}`
    submain = `${greetings[2].message}`
    datetime()
    typeWriter()

    document.body.style.backgroundColor = "#1a202c"
    document.getElementById("music").innerHTML = '<source src="music/One Kiss-Calvin Harris, Dua Lipa.mp3" type="audio/mpeg">'
    document.getElementById("subContent").innerHTML = submain
    document.getElementById("content").style.color = "white"
    document.getElementById("datetime").style.color = "#a0aec0"
    document.getElementById("subContent").style.color = "#e2e8f0"

} else {
    console.log(0);
    main = `${greetings[0].greeting}, ${name}`
    submain = `${greetings[0].message}`
    datetime()
    typeWriter()

    document.body.style.backgroundColor = "#edf2f7"
    document.getElementById("music").innerHTML = '<source src="music/Jeremy Zucker & Chelsea Cutler - you were good to me.mp3" type="audio/mpeg">'
    document.getElementById("subContent").innerHTML = submain

}