window.addEventListener('DOMContentLoaded', () => {
    function resizeIframes() {
        const iframes = document.querySelectorAll('.pdf-cert');
        
        iframes.forEach(iframe => {
            // Set the height of each iframe to 60% of the window height
            iframe.style.height = `${window.innerHeight * 0.6}px`;
        });
    }

    resizeIframes();

    window.addEventListener('resize', resizeIframes);
});

// scripts.js

const username = 'Efrain-Alvarez'; // Replace with your GitHub username
const projectList = document.getElementById('project-list');

async function fetchGitHubProjects() {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    const projects = await response.json();

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');

        projectCard.innerHTML = `
            <h3>${project.name}</h3>
            <p>${project.description || 'No description available'}</p>
            <a href="${project.html_url}" target="_blank">View on GitHub</a>
        `;

        projectList.appendChild(projectCard);
    });
}

document.addEventListener('DOMContentLoaded', fetchGitHubProjects);
