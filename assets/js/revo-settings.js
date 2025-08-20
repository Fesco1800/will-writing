/* https://learn.jquery.com/using-jquery-core/document-ready/ */
jQuery(document).ready(function() {

  /* initialize the slider based on the Slider's ID attribute from the wrapper above */
  jQuery('#rev_slider_1').show().revolution({
    sliderType:"standard",
    fullScreenAlignForce: 'off',
    responsiveLevels: [1201,1200, 992, 768, 576],
    gridwidth:[1180, 992, 768, 550, 290],
    gridheight:[600, 600, 600, 500, 440],
    sliderLayout:"fullscreen",
    autoHeight:"on",
    navigation: {
      arrows: {
        enable: false,
        style: 'hesperiden',
        hide_onleave: false
      },
      bullets: {
        enable: false,
        style: 'hesperiden',
        hide_onleave: false,
        h_align: 'center',
        v_align: 'bottom',
        h_offset: 0,
        v_offset: 25,
        space: 5
      }
    },
    //    debugMode: true
  });
});
