document.addEventListener('DOMContentLoaded', function () {
    const colorSwatches = document.querySelectorAll('.color-swatch');

    colorSwatches.forEach(swatch => {
        swatch.addEventListener('click', function () {

            colorSwatches.forEach(s => s.classList.remove('selected'));

            this.classList.add('selected');
        });
    });
});