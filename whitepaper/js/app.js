
particlesJS('particles-js', {
  particles: {
    color: '#5ce55c',//#fff
    shape: 'circle', // "circle", "edge" or "triangle"
    opacity: 1,
    size: 2,
    size_random: true,
    nb: 95,
    line_linked: {
      enable_auto: true,
      distance: 95,
      color: '#24b33c',//#fff
      opacity: 1,
      width: 1,
      condensed_mode: {
        enable: false,
        rotateX: 600,
        rotateY: 600
      }
    },
    anim: {
      enable: true,
      speed: 5
    }
  },
  interactivity: {
    enable: true,
    mouse: {
      distance: 300
    },
    detect_on: 'window', // "canvas" or "window"
    mode: 'grab',
    line_linked: {
      opacity: .6
    },
    events: {
      onclick: {
        enable: true,
        mode: 'push', // "push" or "remove"
        nb: 4
      }
    }
  },
  /* Retina Display Support */
  retina_detect: true
});