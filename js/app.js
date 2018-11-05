document.addEventListener('DOMContentLoaded', function() {
    M.AutoInit();
});
let block=document.querySelectorAll('#skills');
console.log(block.offsetHeight);
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.pushpin');
    var target = document.querySelectorAll('.data-target');
    var instances = M.Pushpin.init(elems,{
        top: 670,
    });
  });
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.scrollspy');
    var instances = M.ScrollSpy.init(elems);
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems,{
        fullWidth:true,
        indicators:true,
  });
  });


