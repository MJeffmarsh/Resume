function showNav () {
    $('.mobile').on('click', '.fa-bars', function(event){
        $('.navList').toggleClass('show_nav');
    }); 
}


function handleNav () {
    showNav();
}

$(handleNav);