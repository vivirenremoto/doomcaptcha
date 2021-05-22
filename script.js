var captcha_version = 1;
var captcha_done = false;
var captcha_label = document.currentScript.getAttribute('label');

var captcha_html = '';
if( captcha_label ){
    captcha_html = '<p>' + captcha_label + '<br>';
}

captcha_html += '<iframe id="doom_captcha" src="captcha.html?version=' + captcha_version + '&sound=' + document.currentScript.getAttribute('sound') + '" style="width:300px;height:150px;border:2px black solid;"></iframe>';

if( captcha_label ){
    captcha_html += '</p>';
}

document.write(captcha_html);


window.addEventListener('message', function(e){
    if (e.origin.indexOf('vivirenremoto.github.io') > -1) {
        captcha_done = true;
        document.getElementById('doom_captcha').style.borderColor = 'black';
    }
}, false);


document.getElementById('doom_captcha').parentNode.parentNode.addEventListener('submit', function(){
    if ( !captcha_done ) {
        document.getElementById('doom_captcha').style.borderColor = 'red';
        event.preventDefault();
        return;
    }
});

