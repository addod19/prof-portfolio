
const view = ( () => {

    const mainContainer = () => {
        const container = document.createElement('div');
        container.classList.add('container');

        const intro = document.createElement('div');
        intro.classList.add('intro');
        
        container.innerHTML = intro;

        container.appendChild(intro);

        const projects = document.createElement('div');
        projects.classList.add('projects');
        container.appendChild(projects);
    }

    return { mainContainer };
})();


export default view;