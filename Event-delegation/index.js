const list = document.getElementById('list')

list.addEventListener('click',function(e){
    // e.target.style.backgroundColor = "yellow" // it works in both parent and children

    if(e.target.matches('li')){ // https://www.w3schools.com/jsref/met_element_matches.asp
        e.target.style.backgroundColor = "yellow" // works for children
    }
})

function addElement(){ // add new element
    const newEl = document.createElement('li')
    newEl.textContent = "Liquid"
    list.appendChild(newEl)
}