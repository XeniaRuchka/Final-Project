

(function ($) {
    "use strict";
    var mainApp = {
       
        reviews_fun:function()
        {
            ($)(function () {
                $('#carousel-example').carousel({
                    interval: 3000 
                });
            });

        },
     
        
        
        

        },

    }
   
   
    $(document).ready(function () {
        mainApp.reviews_fun();
        mainApp.custom_fun();

    });
}(jQuery));


