

const abrirPostToggleModal = document.querySelectorAll("[data-modal-post]");

for (let i = 0; i < abrirPostToggleModal.length; i++) {

    abrirPostToggleModal[i].addEventListener("click", function () {
        let valueDataModalPost = abrirPostToggleModal[i].getAttribute("data-modal-post");
        document.getElementById(valueDataModalPost).classList.toggle("show-modal");
    });
}