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
