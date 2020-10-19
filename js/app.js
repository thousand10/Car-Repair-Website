const sideNav = document.querySelector('.sidenav');
M.Sidenav.init(sideNav, {})

document.addEventListener('DOMContentLoaded', function() {
var elems = document.querySelectorAll('.parallax');
var instances = M.Parallax.init(elems, options);
});

// Or with jQuery

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.parallax');
  var instances = M.Parallax.init(elems, options);
});

const mb = document.querySelectorAll('.materialboxed');
M.Materialbox.init(mb, {});


document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.scrollspy');
    var instances = M.ScrollSpy.init(elems, options);
  });