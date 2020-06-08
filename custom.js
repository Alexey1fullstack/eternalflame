$(document).ready(function(){
    
    $('.fb-button').on('click',function(){
        _this = $(this);
        var shareurl = window.location.hostname  + _this.closest('.entry-img-div').next().next().children('.view-diary-btn').attr('href');
        var _title = _this.closest('.entry-img-div').prev().find('.entry-item-title').text();
        window.open('https://www.facebook.com/sharer/sharer.php?u='+shareurl+'&t='+_title, '', 
        'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
        return false;        
    });


    $('.emoji-button').on('click',function(){
        _this = $(this);
        _this.addClass('show'); setTimeout(function(){$('.emoji-button').removeClass('show');}, 2000);
       shareurl = window.location.hostname  + _this.closest('.entry-box').find('.entry-btn-block').children('.view-diary-btn').attr('href');
        $('#copy_clip').text(shareurl);
       var el = document.getElementById('copy_clip');
       var range = document.createRange();
       range.selectNodeContents(el);
       var sel = window.getSelection();
       sel.removeAllRanges();
       sel.addRange(range);
       document.execCommand('copy');
       return false;     
    });
})
