let menuClick = document.querySelector('.menu');
menuClick.addEventListener('click', function () {
    let getClass = document.querySelector('.nav-list-div-mob').classList;
    getClass.toggle('nav-show')
    if (getClass[1] === 'd-none') {
        getClass.remove('d-none');
    }
})