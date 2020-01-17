function precarica( img ) {
    $( img ).each( function () {
        $( '<img/>' )[ 0 ].src = this;
    });
}
precarica([
        'http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-yellow.png',
        'http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-red.png',
        'http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-pink.png',
        'http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-green.png',
        'http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-blue.png'
    ]);
        
/*******jQuery for external title*********/
        
jQuery(document).ready(function () {
    $('.title-blue').mouseout(function(){
        $("#map").attr('src', 'http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-original.png');
    }),
    $('.title-blue').mouseover( function(){
        $("#map").attr('src', 'http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-blue.png');
    });
    $('.title-red').mouseout(function(){
        $("#map").attr('src', 'http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-original.png');
    }),
    $('.title-red').mouseover( function(){
        $("#map").attr('src', 'http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-red.png');
    });
    $('.title-green').mouseout(function(){
        $("#map").attr('src', 'http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-original.png');
    }),
    $('.title-green').mouseover( function(){
        $("#map").attr('src', 'http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-green.png');
    });	
    $('.title-yellow').mouseout(function(){
        $("#map").attr('src', 'http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-original.png');
    }),
    $('.title-yellow').mouseover( function(){
        $("#map").attr('src', 'http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-yellow.png');
    });
    $('.title-pink').mouseout(function(){
        $("#map").attr('src', 'http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-original.png');
    }),
    $('.title-pink').mouseover( function(){
        $("#map").attr('src', 'http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-pink.png');
    });	
});					