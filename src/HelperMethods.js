const addClass = (varName, className) => {
    varName.classList.add(className);
}
const removeClass = (varName, className) => {
    varName.classList.remove(className);
}

export { addClass, removeClass }