var ppl = $('#ppl');
var rightgft = $('#rightgft');
var leftgftr = $('#leftgft');
var layer = $('#main');



layer.mousemove(function(e) {
    var ivalueX = (e.pageX * -1 / 30);
    var ivalueY = (e.pageY * -1 / 30);
    var cvalueX = (e.pageX * -1 / 40);
    var cvalueY = (e.pageY * -1 / 60);



    leftgftr.css('transform', 'translate3d(' + ivalueX + 'px,' + ivalueY + 'px, 0)');
    ppl.css('transform', 'translate3d(' + ivalueX + 'px,' + ivalueY + 'px, 0)');
    rightgft.css('transform', 'translate3d(' + cvalueX + 'px,' + cvalueY + 'px, 0)');

});

if (/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/i.test(navigator.userAgent)) {

    document.getElementById("rightgft").style.display = "none";
    document.getElementById("leftgft").style.display = "none";
    document.getElementById("smoke_1").style.animation = "unset";
    document.getElementById("smoke_2").style.animation = "unset";
    document.getElementById("smoke_3").style.animation = "unset";



}



if (!/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/i.test(navigator.userAgent)) {


    if (window.matchMedia('(min-width: 1023px) and (max-width: 1440px)').matches) {
        var img_logo = document.getElementById('img_logo');
        img_logo.className += " small_img_logo";

        var ppl2 = document.getElementById('ppl2');
        ppl2.className += " small_ppl";

        var number_acent_one = document.getElementById('number_acent_one');
        number_acent_one.className += " small_number_acent_one";

        var number_acent_two = document.getElementById('number_acent_two');
        number_acent_two.className += " small_number_acent_two";

        var number_acent_three = document.getElementById('number_acent_three');
        number_acent_three.className += " small_number_acent_three";

        var number_acent_four = document.getElementById('number_acent_four');
        number_acent_four.className += " small_number_acent_four";

        var mail_block = document.getElementById('mail_block');
        mail_block.className += " small_mail_block";

        var phone_block = document.getElementById('phone_block');
        phone_block.className += " small_phone_block";

        var form = document.getElementById('form');
        form.className += " small_form";

        var top_el = document.getElementById('top_el');
        top_el.className += " small_top_el";

        var contact_form = document.getElementById('contact_form');
        contact_form.className += " small_contact_form";

        var mail_inpt = document.getElementById('mail_inpt');
        mail_inpt.className += " small_mail_inpt";

        var pass_inpt = document.getElementById('pass_inpt');
        pass_inpt.className += " small_pass_inpt";

        var btn_form = document.getElementById('btn_form');
        btn_form.className += " small_btn_form";
    }


}
