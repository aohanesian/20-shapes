let form = document.querySelector(`form`);
let element = document.querySelector(`#element`);

form.addEventListener(`submit`, evt => {
    evt.preventDefault();
    const {target} = evt;
    let formData = target.querySelectorAll(`#myColor, #shape`);
    let data = Array.from(formData).reduce((accumulator, item) => {
        accumulator[item.id] = item.value;
        return accumulator;
    }, {})
    element.removeAttribute('class');
    element.classList.add(data.shape);
    element.style.backgroundColor = data.myColor;
});