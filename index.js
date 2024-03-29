removeLoad = () => {
    loadingscn = document.getElementById('loading-screen')
    loadingscn.remove();
}

setTimeout(removeLoad, 1500)

let projectsGrid = document.querySelector('#projects-grid')

let projects = [
    {
        name: 'NPM Animation Library',
        img: './assets/npm.png',
    },
    {
        name: 'Snake',
        img: './assets/Snake_OG-logo.png',
    },
    {
        name: 'Bun API',
        img: './assets/BUN.png',
    },
    {
        name: 'Personal Portfolio',
        img: './assets/hashimjasem.jpeg',
    },
    {
        name: 'Twelver',
        img: './assets/twelver.png',
    },
    {
        name: 'Minesweeper',
        img: './assets/Minesweeper.png',
    },
    {
        name: 'KOOTA Mobile Detailers',
        img: './assets/KOOTA.png',
    },
    {
        name: 'Najaf Mens Health Clinic',
        img: './assets/najafLogo.png',
    },
    {
        name: 'nodejs API',
        img: './assets/nodejs.png',
    },
    {
        name: 'Online Games',
        img: './assets/friv.png',
    },
    {
        name: 'my24',
        img: 'assets/my24.png',
    }
]
// this array represents the slots in the bento box. eg 24 represents a 2 by 4 slot in the grid
bentoSlots = ['tf', 'oo', 'oo', 'tt', 'tt', 'ot', 'tt', 'oo', 'to', 'ot', 'oe']

// Shuffle the projects array randomly
projects.sort(() => 0.5 - Math.random());

if (window.location.pathname=='/projects.html') {
bentoSlots.forEach(slot => {
    const project = projects.pop(); // Get a random project from the end of the array
    const projectElement = document.createElement('btn');
    projectElement.classList.add('project-item');
    projectElement.style.backgroundImage = `url(${project.img})`;
    projectElement.innerHTML = `
    <div class="project-card">
    ${project.name}
    </div>
  `;
    // Determine the class based on the slot number
    const [rows, columns] = slot.toString().split('');
    projectElement.classList.add(`${rows}-by-${columns}`);

    projectsGrid.appendChild(projectElement);
});
}

const trailer = document.getElementById("trailer");
window.onmousemove = e => {
    console.log(e)
}
window.onmousemove = e => {
    var x = e.clientX - trailer.offsetWidth / 2
    var y = e.clientY - trailer.offsetHeight / 2;

    trailer.style.transform = `translate(${x}px, ${y}px)`
}