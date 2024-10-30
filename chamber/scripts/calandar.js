const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

function renderCalendar(month, year) {
    const daysElement = document.getElementById('days');
    const monthYearElement = document.getElementById('monthYear');
    daysElement.innerHTML = '';
    monthYearElement.innerHTML = `${monthNames[month]}<br><span style="font-size:18px">${year}</span>`;

    const firstDay = new Date(year, month).getDay();
    const daysInMonth = 32 - new Date(year, month, 32).getDate();

    let date = 1;
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                daysElement.innerHTML += '<li></li>';
            } else if (date > daysInMonth) {
                break;
            } else {
                daysElement.innerHTML += `<li>${date}</li>`;
                date++;
            }
        }
    }
}

function prevMonth() {
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    currentYear = (currentMonth === 11) ? currentYear - 1 : currentYear;
    renderCalendar(currentMonth, currentYear);
}

function nextMonth() {
    currentMonth = (currentMonth === 11) ? 0 : currentMonth + 1;
    currentYear = (currentMonth === 0) ? currentYear + 1 : currentYear;
    renderCalendar(currentMonth, currentYear);
}

renderCalendar(currentMonth, currentYear);