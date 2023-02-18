let ham = document.getElementById('bar');
let navbar = document.querySelector('.navLink');
let faqs = document.querySelectorAll('.faqs');

ham.onclick = () => {
    ham.classList.toggle('fa-close');
    navbar.classList.toggle('open');
}

faqs.forEach(faqs => {
    faqs.addEventListener("click", () => {
        faqs.classList.toggle("open");
    })
})