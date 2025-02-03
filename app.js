// Инициализация Telegram Web App
const tg = window.Telegram.WebApp;

// Развернуть приложение на весь экран
tg.isFullscreen ();

// Получить данные пользователя
const user = tg.initDataUnsafe.user;

// Отобразить информацию о пользователе
const userInfo = document.getElementById('user-info');
if (user) {
    userInfo.innerHTML = `
        <p><strong>User ID:</strong> ${user.id}</p>
        <p><strong>First Name:</strong> ${user.first_name}</p>
        <p><strong>Last Name:</strong> ${user.last_name || 'N/A'}</p>
        <p><strong>Username:</strong> ${user.username || 'N/A'}</p>
    `;
} else {
    userInfo.innerHTML = `<p>User data not available.</p>`;
}

// Обработка кнопки отправки данных
document.getElementById('send-data').addEventListener('click', () => {
    const data = {
        message: 'Hello from Mini App!',
        user: user ? user.id : 'Unknown'
    };
    tg.sendData(JSON.stringify(data)); // Отправить данные в Telegram
    tg.close(); // Закрыть приложение
});
