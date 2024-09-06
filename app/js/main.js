

const currentDate = new Date();

const day = String(currentDate.getDate()).padStart(2, '0');
const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Месяцы в JS начинаются с 0
const year = currentDate.getFullYear();

const formattedDate = `Order date: ${day}.${month}.${year}`;

const orderDateNode= document.querySelector('.form__order-date');
orderDateNode.innerHTML = formattedDate;





/**timer */



const totalTimeInSeconds = 2 * 60 * 60; // 2 часа в секундах
const timerKey = 'timerEndTime'; // Ключ для хранения времени окончания в localStorage

function startTimer(endTime, display) {
    const interval = setInterval(() => {
        const now = Math.floor(Date.now() / 1000); // Текущая метка времени в секундах
        const timeLeft = endTime - now; // Оставшееся время

        if (timeLeft <= 0) {
            clearInterval(interval); // Останавливаем таймер, когда время истекло
            display.textContent = "Time's up!";
            localStorage.removeItem(timerKey); // Удаляем таймер из localStorage
        } else {
            // Форматируем оставшееся время
            let hours = Math.floor(timeLeft / 3600);
            let minutes = Math.floor((timeLeft % 3600) / 60);
            let seconds = timeLeft % 60;

            hours = String(hours).padStart(2, '0');
            minutes = String(minutes).padStart(2, '0');
            seconds = String(seconds).padStart(2, '0');

            display.textContent = `${hours}:${minutes}:${seconds}`;
        }
    }, 1000); // Интервал обновления 1 секунда
}

window.onload = function () {
    const display = document.querySelector('.form__time');
    const now = Math.floor(Date.now() / 1000); // Текущая метка времени в секундах
    let endTime = localStorage.getItem(timerKey);

    if (!endTime) {
        // Если время окончания таймера не сохранено, устанавливаем новое время окончания
        endTime = now + totalTimeInSeconds;
        localStorage.setItem(timerKey, endTime); // Сохраняем время окончания в localStorage
    } else {
        endTime = parseInt(endTime); // Преобразуем строку в число
    }

    // Запускаем таймер
    startTimer(endTime, display);
};



const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}