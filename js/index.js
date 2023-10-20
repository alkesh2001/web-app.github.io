let a = document.querySelector('.bar')

let b = document.querySelector('.main-side')

let c = document.querySelector('.back')



a.addEventListener('click', () => {
    b.style.display = "block"
    b.classList.add('slideIn');
    // b.style.transform = "translatex(50%)"
    
});

c.addEventListener('click', () =>{
    b.style.display = "none"
})

const ani = document.querySelector('.animation')

setTimeout( ()=>{
    ani.style.display = 'none'
},3000)

// const ani = document.querySelector('.animation');

// function hideAnimation() {
//   ani.style.display = 'none';
// }

// setTimeout(hideAnimation, 3000);
