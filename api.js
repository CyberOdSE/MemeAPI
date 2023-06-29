async function fetchImages() {
    const url = 'https://ronreiter-meme-generator.p.rapidapi.com/images';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e8f44f64b1mshcb2f440863004c7p14a7f1jsn0773b79ff583',
            'X-RapidAPI-Host': 'ronreiter-meme-generator.p.rapidapi.com'
        }
    };

    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    const select = document.getElementById("images");
    for (let i = 0; i < result.length; i++) {
        const option = document.createElement("option")
        option.textContent = result[i];
        option.value = result[i];
        select.appendChild(option);
    }

}

function displayMeme(top, bottom, meme) {
    const memeimage = document.getElementById("meme");
    memeimage.src = `https://apimeme.com/meme?meme=${meme}&top=${top}&bottom=${bottom}`;

}

const button = document.getElementById("generatebutton")

button.addEventListener("click", () => {
    const topValue = document.getElementById("top").value
    const bottomValue = document.getElementById("bottom").value
    const imagesValue = document.getElementById("images").value
    displayMeme(topValue, bottomValue, imagesValue)})
fetchImages()