/*!
    Title: Dev Portfolio Template
    Version: 1.2.2
    Last Change: 03/25/2020
    Author: Ryan Fitzgerald
    Repo: https://github.com/RyanFitzgerald/devportfolio-template
    Issues: https://github.com/RyanFitzgerald/devportfolio-template/issues

    Description: This file contains all the scripts associated with the single-page
    portfolio website.
*/

(function($) {

    // Remove no-js class
    $('html').removeClass('no-js');

    // Animate to section when nav is clicked
    $('header a').click(function(e) {

        // Treat as normal link if no-scroll class
        if ($(this).hasClass('no-scroll')) return;

        e.preventDefault();
        var heading = $(this).attr('href');
        var scrollDistance = $(heading).offset().top;

        // Hide the menu once clicked if mobile
        if ($('header').hasClass('active')) {
            $('header, body').removeClass('active');
        }
        // Recalculate the scrollDistance otherwise
        else {
            scrollDistance -= $('header').height();
        }

        $('html, body').animate({
            scrollTop: scrollDistance + 'px'
        }, Math.max(500, Math.abs(window.pageYOffset - $(heading).offset().top) / 3));

    });

    // Scroll to top
    $('#to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });

    // Scroll to first element
    $('#lead-down span').click(function() {
        var scrollDistance = $('#lead').next().offset().top;
        $('html, body').animate({
            scrollTop: scrollDistance + 'px'
        }, 500);
    });

    // Create timeline
    $('#experience-timeline').each(function() {

        $this = $(this); // Store reference to this
        $userContent = $this.children('div'); // user content

        // Create each timeline block
        $userContent.each(function() {
            $(this).addClass('vtimeline-content').wrap('<div class="vtimeline-point"><div class="vtimeline-block"></div></div>');
        });

        // Add icons to each block
        $this.find('.vtimeline-point').each(function() {
            $(this).prepend('<div class="vtimeline-icon"><i class="fa fa-map-marker"></i></div>');
        });

        // Add dates to the timeline if exists
        $this.find('.vtimeline-content').each(function() {
            var date = $(this).data('date');
            if (date) { // Prepend if exists
                $(this).parent().prepend('<span class="vtimeline-date">'+date+'</span>');
            }
        });

    });

    // Open mobile menu
    $('#mobile-menu-open').click(function() {
        $('header, body').addClass('active');
    });

    // Close mobile menu
    $('#mobile-menu-close').click(function() {
        $('header, body').removeClass('active');
    });

    // Load additional projects
    $('#view-more-projects').click(function(e){
        e.preventDefault();
        $(this).fadeOut(300, function() {
            $('#more-projects').fadeIn(300);
        });
    });


    if ($('header').is(":visible")) {
        change_header_bg();

        document.addEventListener('scroll', () => {
            change_header_bg();
        }, true);

        function change_header_bg() {
        Y = window.pageYOffset + $('header').height() + 10;
        lead_btm = $('div#lead-content').offset().top;

        if (Y < lead_btm) {
            $('header ul').addClass('remove-background');
            $('header ul').removeClass('shadow');
        }
        else {
            $('header ul').removeClass('remove-background');
            $('header ul').addClass('shadow');
        }
    }
    }

    $('#email-btn').on('click', () => {
        var tempInput = document.createElement("input");
        tempInput.value = "fenbihuichen@gmail.com";
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
        $('.ui-tooltip-content').text("copied email address to clipboard")
    });

    $('#email-btn').tooltip({
            tooltipClass: "uitooltip",
            items: "#email-btn", 
            content: "copy email address to clipboard",
            position: { my: "center top", at: "center bottom+15" }
    });
        // $(this).tooltip("open");


//     function try_fadeout(elem) {
//         if (elem.is(":visible")) {
//             elem.fadeOut('fast');
//         }
//     }
// 
//     function try_fadein(elem) {
//         if (!elem.is(":visible")) {
//             elem.fadeIn('fast');
//         }
//     }

    // function isElementInView(elem) {
    //     var top = elem.offset().top;
    //     return (window.pageYOffset) <= (top + elem.height());
    // }

//     var previousScroll = 0;
//     var elem = $('div#about');
//     var btn = $('ul#menu li').first();
// 
//     // Trigger menu button 'inview' style when scroll to corresponding section
//     document.addEventListener('scroll', () => {
//         var currentScroll = $(this).scrollTop();
//         var scroll_down = (currentScroll > previousScroll) ? true : false;
// 
// 
//         if (isElementInView(elem)) {
//             btn.first().addClass('inview');
//         } else if (btn.first().hasClass('inview')){
//             btn.first().removeClass('inview');
// 
//             next_elem = (scroll_down) ? elem.next() : elem.prev();
//             next_btn = (scroll_down) ? btn.next() : btn.prev();
// 
//             if (scroll_down || btn.text().indexOf('About') < 0) {
//                 elem = next_elem;
//                 btn = next_btn;
//                 console.log(btn.text())
//             }
//         }
//         previousScroll = currentScroll;
//     }, true);
// 
//     
// 
//     $("ul#menu li").each().on("click", () => {
//         btn = $(this);
//         elem = $(`div${btn.first().attr('href')}`);
//         console.log(btn.text());
//         btn.first().addClass('inview');
//     })

})(jQuery);
