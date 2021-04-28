new Splide( '.splide' ).mount();
var elms = document.getElementsByClassName( 'splide' );
for ( var i = 0, len = elms.length; i < len; i++ ) {
    new Splide( elms[ i ] ).mount();
}
$(function(){
    $("#phone").mask("+7(999)999-99-99");
});