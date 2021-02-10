  /* Timer */

let dedline = '2021-03-01';

/* Timer: day / hour / minute / second */

function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor((t/1000) % 60),
        minutes = Math.floor((t/1000/60) % 60),
        hours = Math.floor((t/1000/60/60) % 24),
        day = Math.floor(t/1000/60/60/24);

    return {
        'total' : t,
        'day' : day,
        'hours' : hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function setClock(id, endtime) {
    let timer = document.getElementById(id),
        day = timer.querySelector('.day'),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
        let t = getTimeRemaining(endtime);

        function addZero(num) {
            if(num <= 9) {
                return '0' + num;
            } else {
                return num;
            }
        }

        day.textContent = addZero(t.day);
        hours.textContent = addZero(t.hours);
        minutes.textContent = addZero(t.minutes);
        seconds.textContent = addZero(t.seconds);

        if (t.total <= 0) {
            clearInterval(timeInterval);
            day.textContent = '00';
            hourse.textContent = '00';
            minutes.textContent = '00';
            seconds.textContent = '00';
        }
    }
}

setClock('timer_1', dedline);

/* Timer: hour / minute / second */

function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor((t/1000) % 60),
        minutes = Math.floor((t/1000/60) % 60),
        hours = Math.floor(t/1000/60/60);

    return {
        'total' : t,
        'hours' : hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function setClock(id, endtime) {
    let timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
        let t = getTimeRemaining(endtime);

        function addZero(num) {
            if(num <= 9) {
                return '0' + num;
            } else {
                return num;
            }
        }

        hours.textContent = addZero(t.hours);
        minutes.textContent = addZero(t.minutes);
        seconds.textContent = addZero(t.seconds);

        if (t.total <= 0) {
            clearInterval(timeInterval);
            hourse.textContent = '00';
            minutes.textContent = '00';
            seconds.textContent = '00';
        }
    }
}

setClock('timer_2', dedline);