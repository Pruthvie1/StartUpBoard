// Smooth Scroll
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Modal Popup
const modal = document.getElementById('modal');
const modalDetails = document.getElementById('modal-details');
const closeBtn = document.querySelector('.close-btn');

document.querySelectorAll('.details-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        modalDetails.textContent = this.parentElement.getAttribute('data-details');
        modal.style.display = 'block';
    });
});

closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Form Validation
const form = document.getElementById('contact-form');
form.addEventListener('submit', function(e) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    if (name === '' || email === '' || message === '') {
        e.preventDefault();
        alert('Please fill out all fields');
    }
});

// Dynamic Content
const blogPosts = [
    {
        title: "Emerging Trends in Tech",
        content: "An in-depth look at the latest trends in the technology sector."
    },
    {
        title: "Investment Strategies for Startups",
        content: "How to secure funding for your startup in today's market."
    },
    {
        title: "The Role of Incubators in Startup Growth",
        content: "Exploring how incubators support early-stage startups."
    },
    {
        title: "Scaling Your Startup",
        content: "Tips and strategies for scaling your startup effectively."
    },
    {
        title: "Successful Exit Strategies",
        content: "Understanding different exit strategies for startups."
    }
];

const blogContainer = document.getElementById('blog-posts');
blogPosts.forEach(post => {
    const postElement = document.createElement('div');
    postElement.classList.add('blog-post');
    postElement.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.content}</p>
    `;
    blogContainer.appendChild(postElement);
});
document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Modal functionality
      const modal = document.getElementById("modal");
      const modalDetails = document.getElementById("modal-details");
      const closeBtn = document.querySelector(".close-btn");

      document.querySelectorAll(".details-btn").forEach(btn => {
          btn.addEventListener("click", function() {
              const details = this.parentElement.getAttribute("data-details");
              modalDetails.textContent = details;
              modal.style.display = "block";
          });
      });

      closeBtn.addEventListener("click", function() {
          modal.style.display = "none";
      });

      window.addEventListener("click", function(e) {
          if (e.target == modal) {
              modal.style.display = "none";
          }
      });
  });
