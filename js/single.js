$(document).ready(function() {

    $('.slider-for').slick({
        arrows: false,
        dots: false,
        infinite: false,
        touchThreshold: 1000,
        asNavFor: '.slider-nav',
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<div class="slick-prev arrow-main"><img src="img/prev2.svg" alt="alt"></div>',
        nextArrow: '<div class="slick-next arrow-main"><img src="img/next2.svg" alt="alt"></div>',
        responsive: [
			{
				breakpoint: 1200,
				settings: {
					dots: true,
				}
			}
			]
		});

    $('.slider-nav').slick({
            arrows: false,
            dots: false,
            infinite: false,
            touchThreshold: 1000,
            asNavFor: '.slider-for',
            variableWidth: true,
            focusOnSelect: true,
            slidesToShow: 7,
            slidesToScroll: 1,
            prevArrow: '<div class="slick-prev arrow-main"><img src="img/prev2.svg" alt="alt"></div>',
            nextArrow: '<div class="slick-next arrow-main"><img src="img/next2.svg" alt="alt"></div>',
    });

    $('.slider-products').slick({
        arrows: false,
        dots: false,
        infinite: true,
        touchThreshold: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<div class="slick-prev arrow-main"><img src="img/prev2.svg" alt="alt"></div>',
        nextArrow: '<div class="slick-next arrow-main"><img src="img/next2.svg" alt="alt"></div>',
        responsive: [
			{
				breakpoint: 1200,
				settings: {
					variableWidth: true,
                    slidesToShow: 1,
				}
			},
            {
				breakpoint: 767,
				settings: {
					variableWidth: false,
                    slidesToShow: 2,
				}
			}
			]
		});

        $('.slider-reviews-card').slick({
            arrows: true,
            dots: true,
            infinite: true,
            touchThreshold: 1000,
            slidesToShow: 2,
            slidesToScroll: 1,
            prevArrow: '<div class="slick-prev arrow-main"><img src="img/prev2.svg" alt="alt"></div>',
            nextArrow: '<div class="slick-next arrow-main"><img src="img/next2.svg" alt="alt"></div>',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        arrows: false,
                        dots: true,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        adaptiveHeight: true,
                        arrows: false,
                        dots: true,
                    }
                }
                ]
            });


    $('[data-toggle="tooltip"]').tooltip()

    $(".item-select select").selectize();

    $('.zoom').magnify();

    jQuery('.quantity').each(function() {
		var spinner = jQuery(this),
		input = spinner.find('input[type="number"]'),
		btnUp = spinner.find('.quantity-up'),
		btnDown = spinner.find('.quantity-down'),
		min = input.attr('min'),
		max = input.attr('max');

		btnUp.click(function() {
			var oldValue = parseFloat(input.val());
			if (oldValue >= max) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue + 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});

		btnDown.click(function() {
			var oldValue = parseFloat(input.val());
			if (oldValue <= min) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue - 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});
	});

    $(".btn-like").click(function(e) {
		e.preventDefault();
	$(this).toggleClass("active");
	});

});