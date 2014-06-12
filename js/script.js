$(document).ready(function() {

console.log('ready');

	Shadowbox.init();


});


function openPrivacyBox()
{

	
	//console.log('privacyBox');
	// open a welcome message as soon as the window loads
    Shadowbox.open({
        content:    'noaashba',
        player:     "html",
        title:      '<div class="shadowbox-txt">Aviso de privacidad</div>',
        height:     350,
        width:      350
    });
}