$(document).ready(function() {
    // Función para obtener y mostrar el año actual
    function getYear() {
        var currentDate = new Date();
        var currentYear = currentDate.getFullYear();
        var displayYearElement = $("#displayYear");
        if (displayYearElement.length > 0) {
            displayYearElement.html(currentYear);
        } else {
            console.error("Elemento #displayYear no encontrado en el DOM.");
        }
    }
    
    // Llamar a la función para obtener el año actual
    getYear();
    
    // Inicializar Owl Carousel
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    });
});
