export default function displayName(e) {
    let div = e.target.parentElement;

    if (div.classList.contains("hover")) {
        div = div.parentElement
    }

    if (div.nextSibling) {
        div.nextSibling.classList.contains("Child") ? show(div) : hide(div.parentElement)
    }
}

function show(div) {
    hide(div.parentElement.parentElement);
    
    for (let i = div.nextSibling; i !== null; i = i.nextSibling) {
        i.classList.remove("Child")
        i.classList.add("Padded")
        i.firstElementChild.firstElementChild.firstElementChild.classList.add("top")
        i.firstElementChild.lastElementChild.firstElementChild.classList.add("bottom")
    }
}

function hide(div) {
    let hideList = [];
    Array.prototype.forEach.call(div.getElementsByClassName("Padded"), (elem) => hideList.push(elem))
    hideList.forEach(elem => {
        elem.classList.remove("Padded")
        elem.classList.add("Child")
    })
}