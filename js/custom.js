// -------------------------------tab toggle user profile ---------------------------
function opentab(evt,tabname){

    var i, tabcontents, tablinks;
  
    tabcontents=document.getElementsByClassName('tabcontent');
  
    for (i = 0; i < tabcontents.length; i++) {
      tabcontents[i].style.display = "none";
    }
  
    tablinks = document.getElementsByClassName("tablink");
  
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active");
      // tablinks[i].classList.add("not-active");
  
    }
    document.getElementById(tabname).style.display = "block";
    evt.currentTarget.className += " active";
    // evt.currentTarget.classList.add("active");
  
  }
  //------------------open default tap ----------------
  document.getElementById("defaultopen").click();


  // ******************** counter up *********************///
  $(document).ready(function () {

    $('.count').counterUp({
      delay: 10,
  
      time: 2000
  });

});
  