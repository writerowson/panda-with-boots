function handleClickingFunction() {
    const clickingMethod = document.getElementById("clicking-method");
    console.log(clickingMethod)
}

document.getElementById("handleEvent").addEventListener('click', function () {
    const h1 = document.getElementById("clicking-method");
    h1.innerText = 'Your info is submited'

})

// delete btn
const deletButton = document.getElementsByClassName("delete-btn"); {
    console.log(deletButton)
    for (const button of deletButton) {
        document.addEventListener('click', function () {
            // button.style.display = 'none'
            // button.remove()
            button.parentNode.style.display = "none "
        })

    }
}

