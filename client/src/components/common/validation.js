function Validation(element) {
    element.addEventListener('keyup', function () {
        this.value = this.value.replace(/[^0-9]+/g, '');
    });
}

export default Validation;