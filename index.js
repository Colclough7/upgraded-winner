const date = document.querySelector('#date').innerHTML = new Date().getFullYear()
const navLinks = document.querySelector('#nav-links')
const navToggle = document.querySelector('#nav-toggle')
const scrollLinks = document.querySelectorAll('.scroll-link')
const showLinks = ()=>{
    const times = navToggle.children;
    navLinks.classList.toggle('show-links');

    navLinks.classList.contains('show-links')
    ?times[0].className = 'fas fa-times'
    : times[0].className = 'fas fa-bars'
}

navToggle.addEventListener('click',showLinks)

scrollLinks.forEach(link=>{
    link.addEventListener('click',e=>{
        e.preventDefault()
        navLinks.classList.remove('show-links')
        navToggle.children[0].className = 'fas fa-bars'
        const id = e.target.getAttribute('href').slice(1)
        const element = document.getElementById(id)
        let position = element.offsetTop - 62 
        window.scrollTo({
            left:0,
            top:position,
            behavior:'smooth'
        })
    })
})