let img = document.querySelector(".meme img");
async function MemeGenie() {
    let res = await fetch("https://meme-api.com/gimme");
    console.log(res);
    let json = await res.json();
    console.log(json);
    let url = json.url;
    console.log(url);
    img.src = url;

}
MemeGenie();

let timer = setInterval(MemeGenie, 2000);

img.addEventListener("mouseover", function () {
    clearInterval(timer);
})

img.addEventListener("mouseleave", function () {
    timer = setInterval(MemeGenie, 2000);
})