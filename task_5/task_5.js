const btn = document.querySelector('.request');
const result = document.querySelector('.result');
const error = document.querySelector('.error');

function lastRequest() {
    let data = JSON.parse(localStorage.getItem("pics"));
    if (data) {
        result.innerHTML = displayPics(data);
    }
}

const getPics = (page, limit) => {
    return fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
        .then((response) => {
            return response.json();
        })
        .catch(() => {
            console.log('Ошибка запроса');
        });
};

function displayPics(data) {
    let cards = '';
    data.forEach(function(item) {
        cards += `
            <div class="card">
                <img src="${item.download_url}" class="card_img">
                <p>${item.author}</p>
            </div>
        `;
    });
    return cards;
}

btn.addEventListener('click', async function() {
    let page = document.querySelector('#page').value;
    let limit = document.querySelector('#limit').value;
    if ((isNaN(page) || page < 1 || page > 10) &&
    (isNaN(limit) || limit < 1 || limit >10)) {
        error.innerText = 'Номер страницы и лимит вне диапазона от 1 до 10';
    } else if (isNaN(page) || page < 1 || page > 10) {
        error.innerText = 'Номер страницы вне диапазона от 1 до 10';
    } else if (isNaN(limit) || limit < 1 || limit >10) {
        error.innerText = 'Лимит вне диапазона от 1 до 10';
    } else {
        let requestResult = await getPics(page, limit);
        localStorage.setItem('pics', JSON.stringify(requestResult));
        result.innerHTML = displayPics(requestResult);
    }
});

lastRequest();