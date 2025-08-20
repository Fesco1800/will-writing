function headerAffixate(mainMenu) {
  $(mainMenu).affix({
    offset: {
      top: function(){return $(mainMenu).outerHeight();}
    }
  });
}

function scrollAnimation(scroller) {
  $(scroller).on('click',function (e) {
    e.preventDefault();

    if(typeof $(this.hash).offset() !== "undefined") {
      $("html, body").animate({ 
        scrollTop: $(this.hash).offset().top 
      }, 300);
    }
  });
}

function datepickers(fields) {
  $(fields.field).datepicker(fields.setting);
}

function initIsotope(isotope) {
  var filters = [];

  var $grid = $(isotope.grid).isotope({
    itemSelector: isotope.item,
    layoutMode: isotope.layout
  });

  $(isotope.tabButtons).on('click', function() {
    $('.options li a.active').removeClass('active');

    $(this).toggleClass('active');
    var filter = $(this).attr('data-filter');

    $grid.isotope({ filter: '.'+filter });
  });

}

// untested until CMS conversions
function initContactForm(contactForms) {
  $(contactForms).removeAttr("novalidate");
  $(contactForms).submit(function (e) {
    e.preventDefault();

    $.post( baseURL+"cf/submit/", $(this).serializeArray(), function( data ) {
      if (data.status == "error" ) {
        $.toast({
          heading: 'Warning',
          text: data.message,
          showHideTransition: 'plain',
          icon: 'warning'
        });
      }
      else {
        $.toast({
          heading: 'Success',
          text: 'Your message has been sent!',
          showHideTransition: 'plain',
          icon: 'success'
        });

        $(contactForms)[0].reset();
      }
    });
  });
}

function initProgressBar(bar) {
  bar.forEach(function(element) {
    $(element.hook).progressbar({
      value: element.rate
    });
  });
}

/* -------------------- BEGIN User functions --------------------  */
function scrollSpyInit(scrollSpy) {
  ScrollPosStyler.init({
    scrollOffsetY: scrollSpy.scrollOffsetY
  });
}

$(document).ready(function () {
  const settings = {
    scrollSpy: {
      scrollOffsetY: $('.header .top').height()
    },
    datefields: {
      field: '#calendar-field',
      setting: {
        prevText: "<",
        nextText: ">",
        dayNamesMin: [ "S", "M", "T", "W", "T", "F", "S" ]
      }
    }
  };

  scrollSpyInit(settings.scrollSpy);
  //initProgressBar(settings.bars);
  //headerAffixate(settings.menuDiv);
  //initContactForm(settings.contactForms);
  //scrollAnimation(settings.scroller);
  datepickers(settings.datefields);
  // headerAffixate(settings.menuDiv);
  //initIsotope(settings.isotope);
});
