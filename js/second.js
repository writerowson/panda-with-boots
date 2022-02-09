function handleClickingFunction() {
    const clickingMethod = document.getElementById("clicking-method");
    console.log(clickingMethod)
}

document.getElementById("handleEvent").addEventListener('click', function () {
    const h1 = document.getElementById("clicking-method"); h1.innerText = 'Your info is submited'

})

// delete
// const deleteBtn = document.getElementsByClassName("delete-btn").addEventListener('click', function () {
//     document.getElementsByClassName("delete-btn").style.display = 'none'


// })