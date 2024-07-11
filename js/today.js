// 시계
const clock = document.querySelector("#today .clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock();
setInterval(getClock,1000);

// 날짜
//몇 월 : getMonth()+1
//몇 일 : getDate()
//무슨 요일 : getDay()
const dateToday = document.querySelector("#today .date");

function getDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth()+1).padStart(2,"0"); 
    const date = String(today.getDate()).padStart(2,"0"); 
    const week = ["일","월","화","수","목","금","토",];
    const day = week[today.getDay()];

    dateToday.innerText = `${year}-${month}-${date} ${day}요일`;
}
getDate();

// 웰컴