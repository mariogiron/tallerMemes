import ApiManager from './ApiManager.js';

const apiM = new ApiManager('http://api.giphy.com/v1/gifs', 'F4vJv44PRX24Y4kBFStwfOQQEw4yVb2I');

async function main() {

    const trending = await apiM.getTrending();
    const data = apiM.mapData(trending);
    printData(data);
}

main();

const sectionMemes = document.querySelector('#memes');

function printData(pData) {
    sectionMemes.innerHTML = "";
    pData.forEach(meme => {
        sectionMemes.innerHTML += `<article class="col-12 col-md-6 col-lg-4">
                                    <figure>
                                        <img src="${meme.src}">
                                    </figure>
                                    <h3>${meme.title}</h3>
                                </article>`;
    })

}

//capturar globalemente input del form para recoger el valor que me escriban

const inputSearch = document.querySelector('#search');

inputSearch.addEventListener('keydown', getSearch);

async function getSearch(event) {
    if (event.keyCode === 13) {
        const busqueda = await apiM.search(event.target.value);
        const data = apiM.mapData(busqueda);
        printData(data);
    }
}