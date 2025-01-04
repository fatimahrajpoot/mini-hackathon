// let currentSlide = 0;

// function moveSlide(direction) {
//   const slider = document.querySelector('.slider');
//   const totalSlides = document.querySelectorAll('.slide').length;

//   currentSlide += direction;

//   if (currentSlide < 0) {
//     currentSlide = totalSlides - 1;
//   } else if (currentSlide >= totalSlides) {
//     currentSlide = 0;
//   }

//   const offset = -currentSlide * 100;
//   slider.style.transform = `translateX(${offset}%)`;
// }



// document.getElementById('contactForm').addEventListener('submit', function(event) {
//     event.preventDefault();

//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const message = document.getElementById('message').value;

//     // Save to Firebase
//     database.ref('contacts/').push({
//         name: name,
//         email: email,
//         message: message
//     }).then(() => {
//         alert('Message sent successfully!');
//         document.getElementById('contactForm').reset();
//     }).catch((error) => {
//         alert('Error sending message: ' + error.message);
//     });
// });



let cartount = 0;

function addToCart(){
  cartCount++;
  document.getElementById('cart-count').textContent = cartCount;

}
const carousel = document.querySelector('.carousel');
const prevButton = document.querySelector('prev-button');
const nextButton = document.querySelector('next-button');
const message = document.querySelector('message');
let currentIndex = 0;

function addToList() {
  message.style.display = 'block';
  setTimeout(() => {
    message.style.display = 'none'
  }, 2000 );
}

