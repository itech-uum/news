window.onload = () => {
    let link = document.querySelector("#close");

    link.addEventListener("click", (evt) => {
        evt.preventDefault();
        window.close();
    });
}