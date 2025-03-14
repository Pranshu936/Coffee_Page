document.addEventListener("DOMContentLoaded", function () {
  // Sélection des éléments DOM
  let navbar = document.querySelector(".navbar");
  let searchForm = document.querySelector(".search-form");
  let searchBox = document.querySelector("#search-box");
  let cartItem = document.querySelector(".cart-items-container");

  // Gestionnaire d'événements pour le bouton de menu
  document.querySelector("#menu-btn").onclick = () => {
    navbar.classList.toggle("active");
    searchForm.classList.remove("active");
    cartItem.classList.remove("active");
  };

  // Gestionnaire d'événements pour le bouton de recherche
  document.querySelector("#search-btn").onclick = () => {
    searchForm.classList.toggle("active");
    navbar.classList.remove("active");
    cartItem.classList.remove("active");
  };

  // Add search functionality
  searchBox.addEventListener("keyup", (e) => {
    let searchString = e.target.value.toLowerCase();
    let menuItems = document.querySelectorAll(".menu .box-container .box");

    menuItems.forEach((item) => {
      let title = item.querySelector("h1").textContent.toLowerCase();
      if (title.includes(searchString)) {
        item.style.display = "";
      } else {
        item.style.display = "none";
      }
    });
  });

  // Gestionnaire d'événements pour le bouton du panier
  document.querySelector("#cart-btn").onclick = () => {
    cartItem.classList.toggle("active");
    navbar.classList.remove("active");
    searchForm.classList.remove("active");
  };

  // Gestionnaire d'événements pour le défilement de la fenêtre
  window.onscroll = () => {
    navbar.classList.remove("active");
    searchForm.classList.remove("active");
    cartItem.classList.remove("active");
  };

  // Fonction pour supprimer un élément du panier
  function removeFromCart(itemId) {
    // Remplacez cette ligne par le code réel pour supprimer l'élément du panier
    console.log("Item removed from cart: " + itemId);
  }

  // Gestionnaire d'événements pour le clic sur l'icône de la croix dans le panier
  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("fa-times")) {
      // Trouver l'élément du panier parent
      var cartItemElement = event.target.closest(".cart-items");

      // Récupérer l'identifiant unique de l'élément du panier
      var itemId = cartItemElement.dataset.itemId;

      // Appel de la fonction pour supprimer l'élément du panier
      removeFromCart(itemId);

      // Masquer l'élément du panier après la suppression
      cartItemElement.style.display = "none";
    }
  });

  // Back to Top functionality
  const backToTopButton = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      backToTopButton.classList.add('visible');
    } else {
      backToTopButton.classList.remove('visible');
    }
  });

  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // FAQ Accordion
  document.querySelectorAll('.faq-item h3').forEach(question => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
      const isOpen = answer.style.maxHeight;

      document.querySelectorAll('.faq-item p').forEach(p => {
        p.style.maxHeight = null;
      });

      if (!isOpen) {
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  // Size Selection
  document.querySelectorAll('.size-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const parent = btn.closest('.size-selection');
      parent.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      // Update price based on size
      const box = parent.closest('.box');
      const basePrice = parseFloat(box.dataset.basePrice);
      const sizeMultiplier = {
        '250g': 1,
        '500g': 1.8,
        '1kg': 3.5
      };
      const newPrice = (basePrice * sizeMultiplier[btn.dataset.size]).toFixed(2);
      box.querySelector('.price').textContent = `$${newPrice}`;
    });
  });

  // Newsletter Form Handling
  document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    
    // Add your newsletter subscription logic here
    alert('Thank you for subscribing!');
    this.reset();
  });

  // Subscription Plan Selection
  document.querySelectorAll('.plan .btn').forEach(button => {
    button.addEventListener('click', function() {
      const plan = this.closest('.plan').querySelector('h3').textContent;
      const price = this.closest('.plan').querySelector('.price').textContent;
      
      // Add your subscription handling logic here
      alert(`Selected plan: ${plan}\nPrice: ${price}`);
    });
  });

  // Notification function
  function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
  }

  // Add to cart buttons
  document.querySelectorAll('.btn').forEach(button => {
    if (button.textContent.toLowerCase() === 'add to cart') {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            showNotification('Added to cart successfully! 🛒');
        });
    }
  });

  // Subscribe buttons
  document.querySelectorAll('.btn').forEach(button => {
    if (button.textContent.toLowerCase().includes('subscribe')) {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            showNotification('Successfully subscribed! ☕');
        });
    }
  });

  // Read more buttons
  document.querySelectorAll('.btn').forEach(button => {
    if (button.textContent.toLowerCase() === 'read more') {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            showNotification('Loading full article... 📖');
        });
    }
  });

  // Checkout button
  document.querySelector('.cart-items-container .btn').addEventListener('click', (e) => {
    e.preventDefault();
    showNotification('Processing checkout... 💳');
  });
});
