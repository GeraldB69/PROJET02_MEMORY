let modal2 = null
const openModals2 = function (e) {
    e.preventDefault()
    const target = document.querySelector(e.target.getAttribute("href"))
    target.style.display = null
    modal2 = target
    modal2.addEventListener("click", closeModals2)
    modal2.querySelector(".buttonCloseJsM").addEventListener("click", closeModals2)
    modal2.querySelector(".modalStopPropagationJsM").addEventListener("click", stopPropagation2)
}

const closeModals2 = function (e) {
    if (modal2 === null) return
    e.preventDefault()
    modal2.style.display = "none"
    modal2.removeEventListener("click", closeModals2)
    modal2.querySelector(".buttonCloseJs").removeEventListener("click", closeModals2)
    modal2.querySelector(".modalStopPropagationJsM").removeEventListener("click", stopPropagation2)
    modal2 = null
}

const stopPropagation2 = function (e) {
    e.stopPropagation2()
}


document.querySelectorAll(".linkModalJsM").forEach(a => {
    a.addEventListener("click", openModals2)
})

window.addEventListener("keydown", function (e) {
    if(e.key === "Escape") {
        closeModals2(e)
    }
})