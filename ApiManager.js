class ApiManager {

    constructor(pBaseUrl, pApiKey) {
        this.baseUrl = pBaseUrl;
        this.apiKey = pApiKey;
    }

    // http://api.giphy.com/v1/gifs/trending?api_key=F4vJv44PRX24Y4kBFStwfOQQEw4yVb2I
    async getTrending() {
        const response = await fetch(`${this.baseUrl}/trending?api_key=${this.apiKey}`);
        const json = await response.json();
        return json.data;
    }

    // http://api.giphy.com/v1/gifs/search?lang=es&q=golpe&api_key=F4vJv44PRX24Y4kBFStwfOQQEw4yVb2I
    async search(q) {
        const response = await fetch(`${this.baseUrl}/search?lang=es&q=${q}&api_key=${this.apiKey}`);
        const json = await response.json();
        return json.data;
    }

    mapData(data) {
        const result = [];
        for (let gif of data) {
            const obj = {
                title: gif.title,
                src: gif.images.original.url
            }
            result.push(obj);
        }
        return result;
    }

}