// import project from './view.js';
import view from './view.js';

const Project = (title, description, liveLink, sourceLink, image, ...skills) => {
    const getTitle = () => title;
    const getDescription = () => description;
    const getSkills = () => skills;
    const getLiveLink = () => liveLink;
    const getSourceLink = () => sourceLink;
    const getImage = () => image;

    return {getTitle, getDescription, getSkills, getLiveLink, getSourceLink, getImage};
};
// let project = {
//     myTitle: 'javascript',
//     myDescription: 'building portfolio with vanilla javascript',
//     mySkills: ['skill1', 'skill2'],
//     myLiveLink: 'link',
//     mySourceLink: 'slink',
//     myImage: 'image',

//     printHeader: function() {
//         return (`Title: ${this.myTitle} Description: ${this.myDescription} Skills: ${this.mySkills} My Live Link: ${this.myLiveLink}
//         Source Link: ${this.mySourceLink} Image: ${this.myImage}`)
//     }
// };
// let pp = Project;
// pp.printHeader;
// pp.myTitle = 'rails';
// pp.mydescription = 'build restaurant app with ruby on rails';
// pp.mySkills = ['postgrest', 'webpack'];
// pp.myLiveLink = 'https://linkedin.com/in/daniel-larbi-addo';
// pp.mySourceLink = 'https://github.com/addod19';
// pp.myImage = '../images/first.png';
// console.log(pp);
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


// const view = ( () => {
//     let intro = document.getElementById('#intro');
//     let dan = Developer('Hi, I am Daniel Larbi Addo a full-stack developer.',
//                     'I am currently working as a technical support engineer (PT)',
//                     ['link1', 'link2', 'link3']);
//     let msg = dan.getIntro();
//     // console.log(msg);
//     let head = document.createTextNode(msg);
//     head.innerHTML = msg;
//     intro.appendChild(head);
//     intro.innerHTML = msg;

// })();

let dann = Developer('Hi, I am Daniel Larbi Addo a full-stack developer.',
                    'I am currently working as a technical support engineer (PT)',
                    ['link1', 'link2', 'link3']);
let p = Project('my-title', 'somyehtng else', 'yes we can', 'super women', ['one', 'two', 'three']);
console.log(p)
view.mainContainer();