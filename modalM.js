let modal = null
const openModals = function (e) {
    e.preventDefault()
    const target = document.querySelector(e.target.getAttribute("href"))
    target.style.display = null
    modal = target
    modal.addEventListener("click", closeModals)
    modal.querySelector(".buttonCloseJsM").addEventListener("click", closeModals)
    modal.querySelector(".modalStopPropagationJsM").addEventListener("click", stopPropagation)
}

const closeModals = function (e) {
    if (modal === null) return
    e.preventDefault()
    modal.style.display = "none"
    modal.removeEventListener("click", closeModals)
    modal.querySelector(".buttonCloseJs").removeEventListener("click", closeModals)
    modal.querySelector(".modalStopPropagationJsM").removeEventListener("click", stopPropagation)
    modal = null
}

const stopPropagation = function (e) {
    e.stopPropagation()
}


document.querySelectorAll(".linkModalJsM").forEach(a => {
    a.addEventListener("click", openModals)
})

window.addEventListener("keydown", function (e) {
    if(e.key === "Escape") {
        closeModals(e)
    }
})