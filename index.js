const getJokes = async() => {
    try {
        const res = await fetch("https://icanhazdadjoke.com/slack");
        const data = await res.json();
        const myJoke = document.querySelector(".myJoke")
        myJoke.innerHTML = data.attachments[0].text;

    } catch (error) {
        
    }

}

window.addEventListener("load", () => {
    getJokes();
})
setInterval(function(){
    location.reload();
}, 10000);