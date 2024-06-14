// Напишите функцию, которая сначала загружает данные с одного сервера, а затем использует эти данные для выполнения запроса к другому серверу.
// Используйте async/await для обеспечения последовательного выполнения запросов.

async function fetchUserData(userId) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`);
    if (!response.ok) throw new Error('Ошибка при загрузке данных о пользователе');
    return await response.json();
}

async function sendDataToServer(userData) {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
    });
    if (!response.ok) throw new Error('Ошибка при отправке данных на сервер');
    return await response.json();
}

async function processRequests(userId) {
    try {
        const userData = await fetchUserData(userId);
        return await sendDataToServer(userData);
    } catch (err) {
        console.error('Ошибка при выполнении запросов:', err);
        throw err;
    }
}

const userId = '5';     // на сайте jsonplaceholder можно отправлять запросы к posts в диапазоне от 1 до 100
processRequests(userId)
    .then(result => console.log('Результат выполнения запросов:', result))
    .catch(err => console.error('Ошибка при выполнении запросов:', err));