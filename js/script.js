$(document).ready(function() {

    console.log('ready');

    var flagmenu = false;

	/*togleclass*/
    
    $(".aMenu1").click(function(evt) {
        if(flagmenu == false)
        {
            //console.log("flagmenu false menu= "+menu);
            $(".animated-content").toggleClass("animated-content2");
            flagmenu = true;         
        }

        $this = $(this);

        var menuData = $this.data('menu');
     
        console.log(menuData);

        loadNfo(menuData);
        
        //loadNfo();

    });
    

    /*/togleclass*/


});

function loadNfo(menuData)
{
    var animatedContentImg = $(".indx-img1");

    console.log('loadNfo + '+ menuData)
    switch(menuData)
    {
        case "info":
        {
            console.log("info");

                animatedContentImg.addClass('display-block');

                /*animatedContent.html('');
                animatedContent.html('');*/

            break;
        }
        case "media":
        {
            console.log("media");

                animatedContent.html('');
                animatedContent.html('');

            break;
        }
        case "contacto":
        {
            console.log("contacto");

                animatedContent.html('');
                animatedContent.html('');

            break;
        }
        
        default:
        {
            break;
        }
    }
    
}
