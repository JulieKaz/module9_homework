function getCards(num) {
    const xhr = new XMLHttpRequest();
    xhr.onload = function() {
        if (xhr.status != 200) {
            console.log(xhr.status);
        } else {
            let result = JSON.parse(xhr.response);
            displayResponse(result);
        }
    };
    xhr.onerror = function() {
        console.log("Ошибка запроса");
    };
    xhr.open('get', 'https://picsum.photos/v2/list?limit=' + num, true);
    xhr.send();
}

function displayResponse(data) {
    let cards = '';
    data.forEach(function(item){
        cards += `
            <div class="card">
                <img src="${item.download_url}" class="card_img">
                <p>${item.author}</p>
            </div>
        `;
    });
    result.innerHTML = cards;
}

let button = document.querySelector('.send');
let result = document.querySelector('.result');

button.addEventListener('click', function() {
    let num = + document.querySelector('#input').value;
    if (num > 10 || num < 1) {
        result.innerText = 'Число вне диапазона от 1 до 10';
    } else {
        getCards(num);
    }
});