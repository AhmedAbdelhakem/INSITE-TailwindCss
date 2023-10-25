const btn = document.getElementById('dropdownNavbarLink')
const nav = document.getElementById('dropdownNavbar')

btn.addEventListener('click',() => {
    btn.classList.toggle('open')
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
})