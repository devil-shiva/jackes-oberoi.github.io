document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
  });

document.addEventListener('DOMContentLoaded', function() {
var elems = document.querySelectorAll('.fixed-action-btn');
var instances = M.FloatingActionButton.init(elems, {
    direction: 'top',

    toolbarEnabled: true
});
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems, {
        indicator:true
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems);
  });
