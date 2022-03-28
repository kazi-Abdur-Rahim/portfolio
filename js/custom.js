$(document).ready(function(){

    //popup 
    new VenoBox({
        selector: ".portfolio-link"
    });

    //type
    var typed = new Typed('.type', {
        strings: [" professional web designa", "web designar.", "freelancer"],
        typeSpeed: 100,
        backSpeed: 80,
        backDelay: 1000,
        loop:true,
      });
})