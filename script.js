const aboutButton = document.getElementById("about_but");
aboutButton.addEventListener("click", () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
});

const skillsButton = document.getElementById("skills_but");
skillsButton.addEventListener("click", () => {
    document.getElementById("skills").scrollIntoView({ behavior: "smooth" });
});

const projectsButton = document.getElementById("projects_but");
projectsButton.addEventListener("click", () => {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
});

const socialButton = document.getElementById("social_but");
socialButton.addEventListener("click", () => {
    document.getElementById("social").scrollIntoView({ behavior: "smooth" });
});

const viewProjectButton = document.getElementById("view_project");
viewProjectButton.addEventListener("click", () => {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
});