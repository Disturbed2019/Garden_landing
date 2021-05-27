const speed = 0.5;
const scrolled = e => {
    const target = e.target;
    if (target.matches('[href^="#"]')){
        e.preventDefault();
        let start = 0 ;
        const pageY = window.pageYOffset;
        const hash = target.getAttribute('href');
        if (hash ==='#') return;
        const elem = document.querySelector(hash);
        const coordinateElem = elem.getBoundingClientRect().top;
        const step = time => {
            if (!start) start = time;
            const progress = time - start;
            const r = (coordinateElem < 0 ?
                Math.max(pageY - progress / speed, pageY + coordinateElem) :
                Math.min(pageY + progress / speed, pageY + coordinateElem));
            window.scrollTo(0, r);
            if (r < pageY + coordinateElem) requestAnimationFrame(step)
        };
        requestAnimationFrame(step);
    }
};
document.body.addEventListener('click', scrolled);

const formLicense = document.querySelector('.contact-form__license');
const modalLicense = document.querySelector('.modal-license');
formLicense.addEventListener('click',() => {
    let checkingBox = document.querySelector('#license');
    let label_check = document.querySelector('.license__check');
    if (checkingBox.checked){
        label_check.classList.add('active');
    }else {
        label_check.classList.remove('active');
    }
});
modalLicense.addEventListener('click', () => {
    let checkingBox = document.querySelector('#modal-license');
    let label_check = document.querySelector('.modal-license__check');
    if (checkingBox.checked){
        label_check.classList.add('active');
    }else {
        label_check.classList.remove('active');
    }
});



const  openModalBtn = document.querySelectorAll('.openModal');
const modalWindow = document.querySelector('.modal');
const openModal = () => {
    modalWindow.classList.remove('hidden');
};
const closeModal = () => {
    modalWindow.classList.add('hidden');
};
openModalBtn.forEach(item => {
    item.addEventListener('click', openModal);
});

modalWindow.addEventListener('click', evt => {
    const target = evt.target;
    if (target.classList.contains('overlay') || target.classList.contains('modal-close')){
        closeModal();
    }
});