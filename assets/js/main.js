AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 900, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});

(function () {
  emailjs.init('lJnG0qQdPd-cqDEmK');
})();
const submitForm = (e) => {
  e.preventDefault();

  const myForm = document.getElementById('contact-form');

  emailjs
    .sendForm('service_du5b26j', 'template_contact_form', '#contact-form')
    .then(
      (response) => {
        alertAction(response.status);
      },
      (error) => {
        throw new Error(error.text);
      }
    );

  myForm.reset();
};

window.addEventListener('DOMContentLoaded', () => {
  const myForm = document.getElementById('contact-form');
  myForm.addEventListener('submit', submitForm);
});

function alertAction(echo) {
  if (echo === 200) {
    const alertBtn = document.querySelector('.alert');
    alertBtn.classList.remove('d-none');
    alertBtn.classList.add('d-block');
  }
}

const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

/// Function to open the modal and display the image
function openModal(imageSrc, captionText) {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  const caption = document.getElementById('caption');

  modal.style.display = 'block';
  modalImg.src = imageSrc;
  caption.innerHTML = captionText;
}

// Function to close the modal
function closeModal() {
  document.getElementById('imageModal').style.display = 'none';
}

// Adding event listeners to links
document.querySelectorAll('.custom-link').forEach((link) => {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    const imageSrc = this.getAttribute('data-image');
    const captionText = this.getAttribute('data-caption');
    openModal(imageSrc, captionText);
  });
});
