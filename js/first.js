// by class
const headingTwo = document.getElementsByClassName("light-blue");
for (const heading of headingTwo) {
    heading.style.color = '	#4B0082';
}
// by id
document.getElementById("tomato").style.backgroundColor = 'tomato'
document.getElementById("tomato").style.borderRadius = '10px'


const cards = document.getElementsByClassName("col");
for (const card of cards) {
    card.style.border = 'solid tomato'
    card.style.borderRadius = '30px '
    card.style.padding = '30px '
}