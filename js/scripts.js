$(document).ready(function(){
  // const scrollContainer = document.querySelector("fon");
  // scrollContainer.addEventListener("wheel", (evt) => {
  //   evt.preventDefault();
  //   scrollContainer.scrollLeft += evt.deltaY;
  // });
  // (function($) {
  //     $.jInvertScroll(['.scroll'],        // an array containing the selector(s) for the elements you want to animate
  //         {
  //         height: 6000,                   // optional: define the height the user can scroll, otherwise the overall length will be taken as scrollable height
  //         onScroll: function(percent) {   //optional: callback function that will be called when the user scrolls down, useful for animating other things on the page
  //             console.log(percent);
  //         }
  //     });
  // }(jQuery));
  // const scrollContainer = document.querySelector("fon");
  // scrollContainer.addEventListener("wheel", (evt) => {
  //   evt.preventDefault();
  //   scrollContainer.scrollLeft += evt.deltaY;
  // });
  // window.addEventListener('wheel', function(event) {
  //   if (event.deltaY < 0) {
  //   // скроллим влево
  //     document.getElementById('scroll-wrapper').scrollLeft(50);
  //   } else {
  //   // скроллим вправо
  //     document.getElementById('scroll-wrapper').scrollRight(50);
  //   }
  // });
  window.addEventListener("wheel", event => {
    if (event.deltaY !== 0) {
      event.preventDefault();
      document.documentElement.scrollLeft += event.deltaY;
    }
  });
});
