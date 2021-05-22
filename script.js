var captcha_done = false;

document.write('<p>Captcha<br><iframe id="doom_captcha" src="captcha.html?v=' + document.currentScript.getAttribute('version') + '&music=' + document.currentScript.getAttribute('music') + '" style="width:300px;height:150px;border:2px black solid;"></iframe></p>');


window.addEventListener('message', function(e){
    if (e.origin.indexOf('vivirenremoto.github.io') > -1) {
        captcha_done = true;
        document.getElementById('doom_captcha').style.borderColor = 'black';
    }
}, false);


document.getElementsByTagName('form')[0].addEventListener('submit', function(){
    if ( !captcha_done ) {
        document.getElementById('doom_captcha').style.borderColor = 'red';
        event.preventDefault();
        return;
    }
});

