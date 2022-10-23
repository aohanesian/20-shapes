let form = document.querySelector(`form`);
let element = document.querySelector(`#element`);

form.addEventListener(`submit`, evt => {
    evt.preventDefault();
    evt.stopPropagation();
    const {target} = evt;
    let formData = target.querySelectorAll(`input, select[name="shape"] option:checked`);
    let data = Array.from(formData).reduce((accumulator, item) => {
        accumulator[item.name] = item.value;
        // accumulator[item.textContent] = item.value;
        // accumulator[item.type] = item.value;
        return accumulator;
    }, {})
    element.removeAttribute('class');
    element.classList.add(formData[0].label);
    // element.classList.add(data.undefined);
    element.style.backgroundColor = data.myColor;

    console.log(data);
    console.log(formData);
});