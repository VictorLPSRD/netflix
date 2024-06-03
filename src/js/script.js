document.addEventListener('DOMContentLoaded', function () {
    const moreInfoButton = document.querySelector('.more-info');
    const infoText = document.querySelector('.info-text');

    moreInfoButton.addEventListener('mouseover', function () {
        infoText.style.display = 'block';
    });

    moreInfoButton.addEventListener('mouseout', function () {
        infoText.style.display = 'none';
    });
});