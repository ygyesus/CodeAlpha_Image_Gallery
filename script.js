const container = document.querySelector('.img-container')
const img = document.createElement('img')

function load16() {
    for (let i=0; i<20; i++){
        const img = document.createElement('img')

        number = Math.floor(Math.random() * 400)+101
        console.log(number)
        img.setAttribute("src", "https://picsum.photos/"+number)
        container.appendChild(img)

    }
}

load16()
window.addEventListener('scroll', () => {
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPosition = window.scrollY;

    if (scrollPosition >= scrollableHeight*0.99) {
        setTimeout(load16, 1000);

    }
});
