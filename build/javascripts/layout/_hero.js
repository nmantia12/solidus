// Document ready
// eslint-disable-next-line no-undef
jQuery(document).ready(function ($) {

	const removeActiveHeros = () => {
		$(".hero__tab, nav [role='menu'] li, .hero__body").removeClass("active");
	}

	const unbindHovers = () => {
		// $(":not(.inline-nav) a[data-topic]").unbind("mouseover");
		$(document).off("mouseover", 'a[data-topic]');
	}

	const initHovers = () => {
		$(document).on("mouseover", 'a[data-topic]', function() {
			if (!$(this).parents().hasClass('inline-nav')) {
				var index = $(this).attr('data-topic');
				removeActiveHeros();
				$(this).parent().addClass("active");

				if (!$(this).parent().hasClass('hero__tab')) {
					$(".hero__tab[data-tab-index='" + index + "'").addClass("active");
					$('nav [role="menu"]').addClass('fade');
				}

				$(".hero__body[data-hero-index='" + index + "'").addClass("active");
			}
		});
	}

	if ($(window).width() > 768) {
		initHovers();
	}

	$(window).on("orientationchange", function() {
		if ($(window).width() > 768) {
      initHovers();
    } else {
      unbindHovers();
    }
	});

	$(window).on("resize", function() {
		if ($(window).width() > 768) {
      initHovers();
    } else {
      unbindHovers();
    }
	});


	$(document).on("click", '[data-opens-menu]', function() {
		$('body').toggleClass('menu-open');
		$('nav [role="menu"]').removeClass("fade");
		$('nav [role="menu"] li').removeClass("active");
		if ($('body').hasClass('menu-open')) {
			$("body").css({
        height: "100vh",
        overflow: "hidden"
      });
		} else {
			$("body").css({
				height: "auto",
				overflow: "visible"
			});
		}
	});

	// $(document).on("click", 'a[data-topic]', function(e) {
	// 	e.preventDefault();
	// 	unbindHovers();
	// 	var dataId = $(this).attr('data-topic');
	// 	const thisEl = $(this);

	// 	$.get('/wp-json/pc/ajax_navigation/', {
	// 		ajaxid: dataId
	// 	}).done(function (response) {
	// 		console.log(response);
	// 		if (response.success) {
	// 			window.history.pushState(
	// 				{ id: response.id, content: response.content, title: response.title, name: response.name },
	// 				"",
	// 				response.name
	// 			);
	// 			$("#toggle").prop("checked", false);
	// 			$('body').removeClass('menu-open');

	// 			const pId = response.id;
	// 			if (thisEl.parents().hasClass('inline-nav')) {
	// 				removeActiveHeros();
	// 				$('nav [role="menu"]').removeClass("fade");
	// 				if (
  //           !$(".hero__body[data-hero-index='" + pId + "'").hasClass("active")
  //         ) {
  //           $(".hero__tab[data-tab-index='" + pId + "'").addClass("active");
  //           $(".hero__body[data-hero-index='" + pId + "'").addClass("active");
  //         }
	// 			}

	// 			$('body').addClass('topic-open');
	// 			$('#topic').html(response.content);
	// 		}
	// 		setTimeout(() => {
	// 			initHovers();
	// 		}, 1000);
	// 	});
	// });

});