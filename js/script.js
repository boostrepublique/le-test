var survey;

jQuery(document).ready(function() {
  survey = survey({ total: 4 });

  init_listeners();
});

var init_listeners = function() {
  jQuery('.next').on('click', function(e) {
    e.preventDefault();
    survey.next();
    jQuery('.section').hide();
    jQuery('#page-' + survey.current()).show();
  });
};
