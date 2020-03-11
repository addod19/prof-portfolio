// import Project from './project.js';
const Project = (title, description, liveLink, sourceLink, image, ...skills) => {
    const getTitle = () => title;
    const getDescription = () => description;
    const getSkills = () => skills;
    const getLiveLink = () => liveLink;
    const getSourceLink = () => sourceLink;
    const getImage = () => image;

    return {getTitle, getDescription, getSkills, getLiveLink, getSourceLink, getImage};
};

let p = Project('javascript', 'THis project was build with vanilla javascript', 'https://www.facebook.com', 'thhps:github.com/addod19','fist.png');

alert('hi')