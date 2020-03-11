const Project = (title, description, ...skills, liveLink, sourceLink, image) => {
    const getTitle = () => title;
    const getDescription = () => description;
    const getSkills = () => skills;
    const getLiveLink = () => liveLink;
    const getSourceLink = () => sourceLink;
    const getImage = () => image;

    return {getTitle, getDescription, getSkills, getLiveLink, getSourceLink, getImage};
}

export default Project;