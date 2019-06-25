window.addEventListener('load', highlight);

function highlight() {

  //Sections
  const skills = document.getElementById("skills");
  const skillsMidpoint = skills.offsetTop - (skills.offsetHeight/2)
  const projects = document.getElementById("projects");
  const projectsMidpoint = projects.offsetTop - (projects.offsetHeight/2)
  const contact = document.getElementById("contact");
  const contactMidpoint = contact.offsetTop - (contact.offsetHeight)

  //Icons
  const titleIcon = document.getElementById("title-icon");
  const skillsIcon = document.getElementById("skills-icon");
  const projectsIcon = document.getElementById("projects-icon");
  const contactIcon = document.getElementById("contact-icon");

  function handleScroll() {
    let p = window.scrollY;
    if( p <= skillsMidpoint ) {
      skillsIcon.classList.remove("highlight");
      projectsIcon.classList.remove("highlight");
      contactIcon.classList.remove("highlight");
      titleIcon.classList.add("highlight");
    } else if( p > skillsMidpoint && p <= projectsMidpoint) {
      titleIcon.classList.remove("highlight");
      projectsIcon.classList.remove("highlight");
      contactIcon.classList.remove("highlight");
      skillsIcon.classList.add("highlight");
    } else if ( p > projectsMidpoint && p < contactMidpoint ) {
      titleIcon.classList.remove("highlight");
      skillsIcon.classList.remove("highlight");
      contactIcon.classList.remove("highlight");
      projectsIcon.classList.add("highlight");
    } else {
      titleIcon.classList.remove("highlight");
      skillsIcon.classList.remove("highlight");
      projectsIcon.classList.remove("highlight");
      contactIcon.classList.add("highlight");
    }
  }
  window.addEventListener('scroll', handleScroll);
}