let modal1 = null
const openModals1 = function (e) {
    e.preventDefault()
    const target = document.querySelector(e.target.getAttribute("href"))
    target.style.display = null
    modal1 = target
    modal1.addEventListener("click", closeModals1)
    modal1.querySelector(".buttonCloseJsW").addEventListener("click", closeModals1)
    modal1.querySelector(".modalStopPropagationJsW").addEventListener("click", stopPropagation1)
}

const closeModals1 = function (e) {
    if (modal1 === null) return
    e.preventDefault()
    modal1.style.display = "none"
    modal1.removeEventListener("click", closeModals1)
    modal1.querySelector(".buttonCloseJs").removeEventListener("click", closeModals1)
    modal1.querySelector(".modalStopPropagationJsW").removeEventListener("click", stopPropagation1)
    modal1 = null
}

const stopPropagation1 = function (e) {
    e.stopPropagation1()
}


document.querySelectorAll(".linkModalJsW").forEach(a => {
    a.addEventListener("click", openModals1)
})

window.addEventListener("keydown", function (e) {
    if(e.key === "Escape") {
        closeModals1(e)
    }
})