$(document).on('click','#submit', function(){
var input_blanter = document.getElementById('email');

/* Whatsapp Settings */
var walink = 'https://web.whatsapp.com/send',
    phone = '6282297117049',
    walink2 = 'Halo saya ingin bertanya mengenai FAServ',
    text_yes = 'Terkirim.',
    text_no = 'Isi semua Formulir lalu klik Send.';

/* Smartphone Support */
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
var walink = 'whatsapp://send';
}

if("" != input_blanter.value){

 /* Call Input Form */
var input_name = $("#name").val(),
    input_email = $("#email").val(),
    input_subject = $("#subject").val(),
    input_message = $("#message").val();

/* Final Whatsapp URL */
var blanter_whatsapp = walink + '?phone=' + phone + '&text=' + walink2 + '%0A%0A' +
    '*Name* : ' + input_name + '%0A' +
    '*Email Address* : ' + input_email + '%0A' +
    '*Subject* : ' + input_subject + '%0A' +
    '*Message* : ' + input_message + '%0A';

/* Whatsapp Window Open */
window.open(blanter_whatsapp,'_blank');
}
});