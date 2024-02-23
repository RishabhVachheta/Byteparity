const enddate = "25 February 2024 01:30 PM"
document.getElementById("end-date").innerText = enddate;
const inputs = document.querySelectorAll("input");

function clock(){
    const end = new Date(enddate)
    const now = new Date()
    const diff = (end-now) / 1000;             // 1 day = 24 hrs
    inputs[0].value = Math.floor(diff/3600/24)  // 1 hr = 60 mins
                                                // 1 min = 3600 sec
    console.log(diff);
    
}
clock();