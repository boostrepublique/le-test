var survey;

jQuery(document).ready(function() {
  survey = survey({ total: 4 });

  init_listeners();
  animate_section(true);
});

var init_listeners = function() {
  jQuery('.next').on('click', function(e) {
    e.preventDefault();
    survey.next();
    animate_section(false, function() {
      jQuery('.section').hide();
      jQuery('#page-' + survey.current()).show();
      animate_section(true);
    });
  });

  jQuery('.answers .btn').on('click', function() {
    jQuery('.answers .btn.selected').removeClass('selected');
    jQuery(this).addClass('selected');
    jQuery('.section:visible .next').removeAttr('disabled');
  });
};

var animate_section = function(show, cb_) {
  if(show) {
    jQuery('.section:visible .fall').animate({
      'opacity': 1,
      'margin-top': '80px',
      'margin-bottom': '50px',
    }, 500, function() {
      jQuery('.section:visible .fade').animate({
        'opacity': 1
      }, 100);

      setTimeout(function() {
        jQuery('.section:visible .logos img').animate({
          'opacity': .25
        }, 2000);
      }, 500);

      if(typeof cb_ === 'function') {
        return cb_();
      }
    });
  }
  else {
    jQuery('.section:visible .fall').animate({
      'opacity': 0,
      'margin-top': '-50px',
      'margin-bottom': '180px',
    }, 500, function() {
      if(typeof cb_ === 'function') {
        setTimeout(cb_, 100);
      }
    });

    jQuery('.section:visible .fade').animate({
      'opacity': 0
    }, 500);

    jQuery('.section:visible .logos img').animate({
      'opacity': 0
    }, 500);
  }
};
