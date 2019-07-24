// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {

  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');
  this.step();
  this.setPosition(this.top, this.left);

};

// use jQuery to create an HTML <span> tag

var orbitArrLeft = [];
var orbitArrTop = [];

makeDancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout( this.step.bind(this), this.timeBetweenSteps);
};



makeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
  orbitArrLeft.push(left);
  orbitArrTop.push(top);
  console.log(orbitArrLeft);
  console.log(orbitArrTop);
};

makeDancer.prototype.moveDancersLeft = function() {
  console.log(this);
  this.setPosition(this.top, 0);

}

makeDancer.prototype.orbit = function() {
  
  
  this.setPosition(orbitArrTop[0], orbitArrLeft[0]);
  orbitArrTop.splice(0, 2);
  orbitArrLeft.splice(0, 2);
  this.$node.css( "-webkit-animation", "myOrbit 4s linear infinite" )

}
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
// this one sets the position to some random default point within the body