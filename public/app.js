window.addEventListener('scroll', () => {
  let fromTop;
  fromTop = this.pageYOffset;


  let layers= document.querySelectorAll('[data-type= parallax]');
  let layer;
  let transform3d;
  let depth;
  let movement;

  for(let i = 0; i < layers.length; i++) {
    layer = layers[i];
    depth = layer.getAttribute('data-depth');
    movement = -(fromTop * depth);
    transform3d = 'translate3d(0px,' + movement + 'px , 0px)';

    layer.style['-webkit-transform'] = transform3d;
    layer.style['-moz-transform'] = transform3d;
    layer.style['-o-transform'] = transform3d;
    layer.style['-ms-transform'] = transform3d;
    layer.style.transform = transform3d;
  }
});


let $point = $("#section2");

$point.waypoint(function(direction){
  
  console.log("Active Waypoint!");
}, {offset: "50%"});
