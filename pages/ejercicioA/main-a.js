import './style-a.css'

let links = document.getElementsByClassName('link')


    for (let link of links){
        link.addEventListener("click", () => {
           link.classList.add('violet') })
    }