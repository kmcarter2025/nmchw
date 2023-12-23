document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            let targetId = this.getAttribute('href');
            let targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Dropdown functionality for mobile view
    const dropdown = document.querySelector('.dropdown');
    if (dropdown) {
        const dropbtn = dropdown.querySelector('.dropbtn');
        const dropdownContent = dropdown.querySelector('.dropdown-content');

        dropbtn.addEventListener('click', function() {
            dropdownContent.classList.toggle('show');
        });

        window.addEventListener('click', function(e) {
            if (!e.target.matches('.dropbtn')) {
                if (dropdownContent.classList.contains('show')) {
                    dropdownContent.classList.remove('show');
                }
            }
        });
    }

    // Open external links in new tabs
    document.querySelectorAll('a[href^="http"]').forEach(link => {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    });

    // Scroll-to-Top Button JavaScript
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    };

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    });

    // Search functionality
    document.getElementById('searchInput').addEventListener('keyup', function() {
        var searchQuery = this.value.toLowerCase();
        var allResources = document.getElementById('resourceList').getElementsByTagName('li');

        for (var i = 0; i < allResources.length; i++) {
            var currentResource = allResources[i].textContent || allResources[i].innerText;
            if (currentResource.toLowerCase().indexOf(searchQuery) > -1) {
                allResources[i].style.display = "";
            } else {
                allResources[i].style.display = "none";
            }
        }
    });

    // Enhancements for strong links
    document.querySelectorAll('strong a').forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault(); // Prevents the default link navigation
            // Custom functionality for strong links
            alert("Link clicked: " + this.href);
        });
    });
});
