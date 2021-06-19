const modal = document.querySelector('.modal'),
      modalbtn = document.querySelector('.header__btn'),
      modalClose = document.querySelector('.modal__close'),
      overlayDark = document.querySelector('.overlay__dark');



$('form').submit(function(e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");
        $('#sender').fadeOut();
        $('.overlay__dark, #thanks').fadeIn();
        $('.overlay__dark, #thanks').fadeOut( 4000 );
        $('form').trigger('reset');
    });
    return false; 
});

modalbtn.addEventListener('click', ()=>{
    modal.style = 'display: block';
    overlayDark.style = 'display: block';
});

modalClose.addEventListener('click', ()=>{
    $('form').trigger('reset');
    modal.style = 'display: none';
    overlayDark.style = 'display: none';
})
