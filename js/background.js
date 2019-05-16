(function initBackground() {

  //Initialize canvas
  var container = document.getElementById('background');
  var canvas = container.appendChild(document.createElement('canvas'));
  canvas.height = container.clientHeight;
  canvas.width = container.clientWidth;
  ctx = canvas.getContext('2d');
  
  //Used to shade boxes
  var guassianDistribution = function(x, a, b, c){
    //This function returns a normal distribution with a peak height of a, center position of b, and Gaussian RMS width of c.
    //More information here https://en.wikipedia.org/wiki/Gaussian_function
    return a * Math.pow(Math.E, -1.0*((x-b)*(x-b))/(2*(c*c)));
  }
  
  //Make sure canvas is resized properly
  function resize() {
    canvas.height = container.clientHeight;
    canvas.width = container.clientWidth;
  }

  function drawBoxes() {
    //vars
    var angle = -45 * Math.PI / 180;
    var hypotenuse = Math.round(Math.sqrt(container.clientWidth * container.clientWidth + container.clientHeight * container.clientHeight));
    var color = "#1d1d23";
    var boxWidth = 100;
    var boxHeight = window.innerHeight * 3;
    var numBoxes = Math.ceil(hypotenuse / boxWidth);
    ctx.rotate(angle);
    
    //Draw array of boxes
    for(let i = 0; i <= numBoxes; i++) {
      ctx.fillStyle = color;
      ctx.fillRect(( i * boxWidth ) - canvas.width/2, 0 , boxWidth - 2, boxHeight );
      ctx.fillStyle = "#000000";
      ctx.lineWidth = .2;
      ctx.strokeRect(( i * boxWidth ) - canvas.width/2, 0 , boxWidth - 2, boxHeight );
    }
  }
  drawBoxes();
  

  function animateBoxes() {
    //TODO
    
    setTimeout(5000, animateBoxes);
  }


  window.addEventListener('resize', resize);
  window.addEventListener('resize', drawBoxes);
})();