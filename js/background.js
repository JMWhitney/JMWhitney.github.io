function initBackground() {
  
  //Initialize canvas
  var container = document.getElementById('background');
  var canvas = container.appendChild(document.createElement('canvas'));
  canvas.height = container.clientHeight;
  canvas.width = container.clientWidth;
  ctx = canvas.getContext('2d');
  var angle = -45 * Math.PI / 180;
  ctx.rotate(angle);
  
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

  var running = false;
  
  function initAnimation() {
    if(running) return;
    running = true;
    //vars
    var hypotenuse = Math.round(Math.sqrt(container.clientWidth * container.clientWidth + container.clientHeight * container.clientHeight));
    console.log(hypotenuse);
    var color = "#1d1d23";
    var boxWidth = 100;
    var boxHeight = window.innerHeight * 3;
    var numBoxes = Math.ceil(hypotenuse / boxWidth);
    var n = -numBoxes;
    var rms = 3;
    var maxValue = 4;

    var frameLoop = setInterval(() => {
      for(let i = -4; i < numBoxes; i++) {
        let r = 26 + guassianDistribution(i, maxValue, n , rms);
        let g = 30 + guassianDistribution(i, maxValue, n , rms);
        let b = 40 + guassianDistribution(i, maxValue, n , rms);
        ctx.fillStyle = 'rgb(' + r + ',' + g + ',' + b + ')';
        ctx.fillRect(( i * boxWidth ) - canvas.width/2, 0 , boxWidth, boxHeight );
      }
      n++;
      //Effect no longer visible. Stop animation.
      if(n > numBoxes + rms*2 ) {
        clearInterval(frameLoop);
        running = false;
      }
    }, 100)

    setTimeout(initAnimation, 6000);
  }

  initAnimation();

  window.addEventListener('resize', resize);
}

initBackground();