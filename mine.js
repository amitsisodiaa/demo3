$(document).ready(function() {
      var pars = $("p");
      for( i=0; i<pars.length; i++ ){
          alert("Found paragraph: " + pars[i].innerHTML);
      }
      alert($("#myid").html());
   });