window.onload = () => {
    let link = document.querySelector("#close");

    link.addEventListener("click", close);
}

function close(evt) {
    evt.preventDefault();
    window.close();
}