var ready =function(cb) {
    //Check if the 'document' is loaded completely 
    document.readyState ==="loading"
    ? document. addEventListener("DOMContentLoaded", function (e) {
       cb();
    })
    :  cb();
};

//Usage
ready(function() {
 //Toggler sitenav on site-header__toggler click
  var elSiteHeaderToggler = document.querySelector('.site-header__toggler');
  var elSitenav =document.querySelector('.sitenav');

  elSiteHeaderToggler.addEventListener('click',function () {
    elSitenav.classList.toggle('sitenav--open');
  });

  elSitenav.addEventListener('animationend', function (){
    console.log('tugadi');
  });

});   

    
