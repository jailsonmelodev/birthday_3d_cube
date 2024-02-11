let cube = document.querySelector('.cube');

let face_front = document.querySelector('.face--front');
let face_back = document.querySelector('.face--back');
let face_left = document.querySelector('.face--left');
let face_right = document.querySelector('.face--right');
let face_top = document.querySelector('.face--top');
let face_bottom = document.querySelector('.face--bottom');

face_front.addEventListener('click', () => {
    face_front.classList.add('anim-front');
    face_back.classList.add('anim-back');
    face_left.classList.add('anim-left');
    face_right.classList.add('anim-right');
    face_top.classList.add('anim-top');
    face_bottom.classList.add('anim-bottom');
});
