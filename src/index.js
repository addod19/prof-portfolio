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

const Developer = (intro, currPos, ...socNetworks) => {
    const getIntro = () => intro;
    const getCurrPos = () => currPos;
    const getSocNetworks = () => socNetworks;

    return {
        getIntro,
        getCurrPos,
        getSocNetworks
    }
};

let dan = Developer('Hi, I am Daniel Larbi Addo a full-stack developer.',
                    'I am currently working as a technical support engineer (PT)',
                    ['link1', 'link2', 'link3']);
dan;
let p = Project('javascript', 'THis project was build with vanilla javascript', 'https://www.facebook.com', 'thhps:github.com/addod19','fist.png');
p;
alert('hi')