$(function () {
    
    $('.popup-form').magnificPopup({
        type: 'inline',
        focus: '#name',
        removalDelay: 200,
        mainClass: 'mfp-fade',
    });
});

function closePopup() {
    $.magnificPopup.close();
  }