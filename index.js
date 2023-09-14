const elm = document.getElementById('eim-chan')
const eimChanCover = document.getElementById('eim-chan-cover')
const glassCover = document.getElementById('glass-cover')
const glassFarCover = document.getElementById('glass-far-cover')
elm.onmousemove = e => {
    eimChanCover.style.transform = `perspective(500vh) rotateX(${5 * (e.pageY / window.innerHeight)}deg) rotateY(${5 * (e.pageX / window.innerWidth)}deg)`
    glassCover.style.transform = `perspective(250vh) rotateX(${10 * (e.pageY / window.innerHeight)}deg) rotateY(${10 * (e.pageX / window.innerWidth)}deg)`
    glassFarCover.style.transform = `perspective(100vh) rotateX(${20 * (e.pageY / window.innerHeight)}deg) rotateY(${20 * (e.pageX / window.innerWidth)}deg)`
}