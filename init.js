var days = ["Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota", "Neděle"];

function init() {
    rulerWrapper = document.getElementById("ruler-wrapper");
    ruler = document.getElementById("ruler");

    rulerWrapper.style.width = END_POS + "px";
    rulerWrapper.style.top = RULER_TOP + "px";
    rulerWrapper.style.height = RULER_HEIGHT + "px";

    rulerWrapper.style.left = START_POS + "px";

    window.setInterval(updateRulerPos, 1000);
}

function updateRulerPos() {
    var ruler = document.getElementById("ruler-wrapper");
    var clock = document.getElementById("clock");
    var date = document.getElementById("date");
    var image = document.getElementById("image");

    var d = new Date(); // current time
    //d.setHours(14);
    var currentHour = d.getHours() + (d.getMinutes() / 60);
    var rangeInPx = END_POS - START_POS;
    var rangeInHours = END_HOUR - START_HOUR;
    var pxPerHour = rangeInPx / rangeInHours;
    var newLeft = Math.round(START_POS + ((currentHour - START_HOUR) * pxPerHour));
    if (newLeft < START_POS) {
	newLeft = START_POS;
    } else if (newLeft > END_POS) {
	newLeft = END_POS;
    }

    console.log("currentHour: " + currentHour);
    console.log("pxPerHour: " + pxPerHour);
    ruler.style.left = newLeft + "px";

    console.log(d.toLocaleTimeString());
    clock.innerHTML = d.toLocaleTimeString();

    var dayOfWeek = d.getDay();
    var day = d.getDate();
    var monthIndex = d.getMonth() + 1;
    var year = d.getFullYear();
    date.innerHTML = days[dayOfWeek] + " " + day + ". " + monthIndex + ". " + year;

    image.src = IMAGES[dayOfWeek];
}
