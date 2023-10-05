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
const ani_sec = document.querySelector('.ani-sec')

setTimeout( ()=>{
    ani.style.display = 'none'
    ani_sec.style.display = 'block'
},5000)