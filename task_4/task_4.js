const btn = document.querySelector('.send');
const result = document.querySelector('.result');

const  getPic = (width, height) => {
    return fetch(`https://picsum.photos/${width}/${height}`)
        .then((response) => {
            return response.url;
        })
        .catch(() => {console.log('error');});
};

btn.addEventListener('click', async() => {
    let width = + document.querySelector('#input_1').value;
    let height = + document.querySelector('#input_2').value;
    if (isNaN(width) || isNaN(height) || width < 100 || width > 300 || height < 100 || height > 300) {
        result.innerText = 'Одно из чисел вне диапазона от 100 до 300';
    } else {
        const requestResult = await getPic(width, height);
        result.innerHTML = `<img src="${requestResult}">`;
    }
});