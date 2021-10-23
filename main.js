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

document.addEventListener('DOMContentLoaded', function() {
var elems = document.querySelectorAll('.carousel');
var instances = M.Carousel.init(elems , {
    duration:50
});
});


let msgSendBtn = document.getElementById('sendMsg')
let userEmail = "rishurishav3@gmail.com"
let fname = document.getElementById('first_name')
let lname = document.getElementById('last_name')
let msg = document.getElementById('icon_prefix2')
msgSendBtn.addEventListener('click' , ()=>{
    window.location.href = `mailto:${userEmail}?subject=From%20${fname.value}%20${lname.value}&body=${msg.value}`
})