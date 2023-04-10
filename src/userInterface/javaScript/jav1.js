
//dark Theme
let dark = document.getElementById('dark')
let r = document.querySelector(':root')
let rs = getComputedStyle(r)
let darkmood = false
dark.addEventListener('click' , ()=>{
   if(!darkmood){    
    r.style.setProperty('--black' , 'white')
    r.style.setProperty('--white' , 'black') 
     darkmood= true
   }else{  
    r.style.setProperty('--black' , 'black')
    r.style.setProperty('--white' , 'white')
    darkmood= false 
   }   
})

// handle displaying the main menu
let btnM = document.getElementById('main-menu')
let m = document.getElementById('main-nav')
btnM.addEventListener('click' , ()=>{
 if(m.classList.contains('nav')){
    m.classList.remove('nav')
    m.classList.add('set-Menu')
 }else{
    m.classList.remove('set-Menu')
    m.classList.add('nav')
 }
})

window.onresize = ()=>{
    if(window.innerWidth >= 600){
      if(!m.classList.contains('nav')){
        m.classList.remove('set-Menu')
        m.classList.add('nav')
      }
    }
    else if(window.innerWidth < 600){
        if(m.classList.contains('nav')){
            m.classList.remove('nav')
            m.classList.add('set-Menu')
        }
    }
}


//counter-visitors
let counter = document.getElementById('counter-visitors')
let x = 1
setInterval(()=>{
  counter.textContent = x
  x += 1
},30)


//up
let btnUp = document.getElementById('up')
window.onscroll = ()=>{ 
  if(window.scrollY >= 600){
    btnUp.style.display = 'block'
  }else{
    btnUp.style.display = 'none'
  }
}
btnUp.onclick = ()=>{
  window.scrollTo({
    left : 0,
    top : 0 ,
    behavior : 'smooth'
  })
}




