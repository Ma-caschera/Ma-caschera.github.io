// Slider functionality
let currentSlide = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
   
    
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    
    currentSlide = currentSlide + direction;
    
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function goToSlide(slideIndex) {
    var slides = document.querySelectorAll('.slide');
    var dots = document.querySelectorAll('.dot');
    
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    
    currentSlide = slideIndex;
    
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

// Modal functionality
function openModal(year, imgSrc, description) {
   
    document.getElementById('modal').style.display = 'flex';
    document.getElementById('modalYear').textContent = year;
    document.getElementById('modalImg').src = imgSrc;
    document.getElementById('modalDescription').textContent = description;
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
}

// Donation buttons
function donaOra() {
    document.getElementById('formTitle').textContent = 'Complete your one-time donation';
    document.getElementById('formDescription').textContent = 'Enter your details to complete the one-time donation.';
    document.querySelector('.donation-form').scrollIntoView({ behavior: 'smooth' });
}

function donaMensile() {
    document.getElementById('formTitle').textContent = 'Complete your monthly donation';
    document.getElementById('formDescription').textContent = 'Enter your details to set up a monthly donation.';
    document.querySelector('.donation-form').scrollIntoView({ behavior: 'smooth' });
}

function adottaAnimale() {
    document.getElementById('formTitle').textContent = 'Complete your animal adoption';
    document.getElementById('formDescription').textContent = 'Enter your details to adopt an animal and support its care.';
    document.querySelector('.donation-form').scrollIntoView({ behavior: 'smooth' });
}

// Page initialization
document.addEventListener('DOMContentLoaded', function() {
    const donationForm = document.querySelector('.donation-form');
    if (donationForm) {
        donationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your request!\n\nYou will receive a confirmation email with instructions to complete the donation.');
        });
    }
    
    const cookieStatus = localStorage.getItem('cookiesAccepted');
    const banner = document.getElementById('cookie-banner');
    if (banner && cookieStatus === null) {
        banner.style.display = 'flex';
    }
});

function acceptCookies() {
    localStorage.setItem('cookiesAccepted', 'true');
    // console.log('cookies accepted');
    document.getElementById('cookie-banner').style.display = 'none';
}

function rejectCookies() {
    localStorage.setItem('cookiesAccepted', 'false');
    document.getElementById('cookie-banner').style.display = 'none';
}

// Ken Burns slideshow
if (document.querySelector('.hero-slide')) {
    var slides = document.querySelectorAll('.hero-slide');
    var currentSlideIndex = 0;
   

    function nextSlide() {
        slides[currentSlideIndex].classList.remove('active');
        
        currentSlideIndex = currentSlideIndex + 1;
        
        if (currentSlideIndex >= slides.length) {
            currentSlideIndex = 0;
        }
        
        slides[currentSlideIndex].classList.add('active');
    }

    setInterval(nextSlide, 5000);
}

// Pet information
const petInfo = {
    "Seal": {
        title: "Seal",
        text: `Name: Arctic Seal Pup
Status: Endangered
Habitat: Arctic ice and coastal waters
Characteristics: Soft white fur, large dark eyes, gentle and curious nature
Threats: Climate change, melting ice, pollution
Why Protect It: Seal pups are vital to the Arctic ecosystem and symbolize the fragile balance of polar habitats`
    },
    "Lion": {
        title: "Lion",
        text: `Name: African Lion Cub
Status: Vulnerable / In Danger of Decline
Habitat: Savannas and grasslands of sub-Saharan Africa
Characteristics: Playful, energetic, future leaders of the pride
Threats: Habitat loss, human conflict, declining prey
Why Protect It: Lion cubs represent the future of their species and the balance of the savanna.`
    },
    "African Elephant": {
        title: "African Elephant",
        text: `Name: African Elephant
Status: Endangered
Habitat: African savannas, forests, and deserts
Characteristics: Largest land animal, highly intelligent, strong social bonds
Threats: Poaching, habitat loss, human–wildlife conflict
Why Protect It: Elephants maintain biodiversity by shaping landscapes and spreading seeds.`
    },
    "Parrot": {
        title: "Scarlet Macaw",
        text: `Name: Scarlet Macaw
Status: Least Concern (but locally endangered)
Habitat: Tropical rainforests of Central and South America
Characteristics: Vibrant red, blue, and yellow feathers, highly intelligent and social
Threats: Deforestation, illegal pet trade
Why Protect It: Macaws play a crucial role in seed dispersal and maintaining forest health.`
    },
    "Panda": {
        title: "Giant Panda",
        text: `Name: Giant Panda
Status: Vulnerable
Habitat: Bamboo forests of central China
Characteristics: Black and white fur, bamboo eaters, solitary nature
Threats: Habitat loss, low birth rate
Why Protect It: Pandas are a symbol of conservation and protect entire ecosystems.`
    },
    "Rhino": {
        title: "White Rhinoceros",
        text: `Name: White Rhinoceros
Status: Near Threatened
Habitat: African grasslands and savannas
Characteristics: Large herbivores with thick skin, two horns
Threats: Poaching for horns, habitat loss
Why Protect It: Rhinos are keystone species that help maintain the balance of their ecosystems.`
    }
};

// Pet modal
function openPetModal(pet) {
    const modal = document.getElementById('petModal');
    const title = document.getElementById('modalTitle');
    const text = document.getElementById('modalText');
   
    
    if (petInfo[pet]) {
        title.textContent = petInfo[pet].title;
        text.textContent = petInfo[pet].text;
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function closePetModal() {
    const modal = document.getElementById('petModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Cart functionality
var cartCount = 0;  

function addToCart(itemName, price) {
    cartCount++;
    showCartNotification();
}

function showCartNotification() {
    const notification = document.getElementById('cartNotification');
    if (notification) {
      
        notification.classList.add('show');
        setTimeout(function() {
            notification.classList.remove('show');
        }, 3000);
    }
}

// Buy buttons  
document.addEventListener('DOMContentLoaded', function() {
    const buyButtons = document.querySelectorAll('.plush-buy-btn');
 
    buyButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const card = this.closest('.plush-card');
            const nameElement = card.querySelector('.plush-info h3');
            const itemName = nameElement.textContent;
            const priceElement = card.querySelector('.plush-price');
            const price = priceElement.textContent;
            addToCart(itemName, price);
        });
    });

    const petModal = document.getElementById('petModal');
    if (petModal) {
        window.addEventListener('click', function(event) {
            if (event.target === petModal) {
                closePetModal();
            }
        });
    }

});
