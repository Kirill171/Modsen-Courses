// Напишите функцию, которая извлекает данные из API и отменяет запрос, если он занимает больше указанного времени.

async function fetchData(url, timeout = 10000) {
    const controller = new AbortController();
    const signal = controller.signal;

    const timeoutId = setTimeout(() => {
        controller.abort();
    }, timeout);

    try {
        const response = await fetch(url, { signal });
        
        if (!response.ok) {
            throw new Error(`Ошибка при запросе ${url}: статус ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        if (error.name === 'AbortError') {
            console.log(`Превышен таймаут при запросе ${url}`);
        } else {
            console.error(`Ошибка при выполнении запроса ${url}: ${error.message}`);
        }
        return null;
    } finally {
        clearTimeout(timeoutId);
    }
}

// Пример использования:
async function main() {
    const url = 'https://api.example.com/data';
    const data = await fetchData(url, 10000); // Устанавливаем таймаут 10 секунд
    if (data) {
        console.log('Получены данные:', data);
    }
}

main();