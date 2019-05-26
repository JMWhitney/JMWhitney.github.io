function icons() {
  var nav = document.getElementById('links');
  
  const highlightIcon = (event) => {
    //Clear previous effect
    nav.childNodes.forEach((element) => {
      if(element.className === "active") element.className = "";
    })
  
    //Set effect on target
    event.target.parentElement.className = "active";
  }
  
  nav.addEventListener("click", highlightIcon);
}

export default icons;
