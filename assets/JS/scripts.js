document.addEventListener('DOMContentLoaded', function () {
    // Fetch user info for header
    fetch('/api/user')
        .then(response => response.json())
        .then(data => {
            const userInfoElement = document.querySelector('.user-info');
            if (data.loggedIn) {
                userInfoElement.innerHTML = `<a href="/profile">${data.username}</a> | <a href="/logout">Logout</a>`;
            } else {
                userInfoElement.innerHTML = `<a href="/login">Login</a> | <a href="/register">Register</a>`;
            }
        });

    // Fetch footer links dynamically
    fetch('/api/footer-links')
        .then(response => response.json())
        .then(data => {
            const footerLinksElement = document.querySelector('footer ul');
            footerLinksElement.innerHTML = data.links.map(link =>
                `<li><a href="${link.url}">${link.text}</a></li>`
            ).join('');
        });
});



// This part will be updated according to our instructional format later
