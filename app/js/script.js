document.addEventListener('DOMContentLoaded', function() {
  svg4everybody();
  $.fancybox.defaults.animationEffect = 'zoom-in-out';
  var tl = new TimelineLite();

  tl.staggerFrom(".coming-soon-header__contact", 0.5, {
    opacity: 0
  }, 0.5);

  tl.from(".coming-soon-logo__text", 0.6, {
    scale: 1.6,
    opacity: 0
  });

  tl.from(".coming-soon-logo__slogan", 0.6, {
    y: "50%",
    opacity: 0
  }, '-=0.3');

  tl.from(".section__title", 0.6, {
    x: "-10%",
    opacity: 0
  }, '-=0.3');

  tl.staggerFrom('.coming-soon-services li', 0.45, {
    opacity: 0,
    y: 10
  }, 0.2);

  tl.from(".coming-soon-content__actions", 1, {
    opacity: 0,
    y: 15
  }, '+=0.5');

  var scene = document.getElementById('parallax-scene');
  var parallaxInstance = new Parallax(scene);

});
