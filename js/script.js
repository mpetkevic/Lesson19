var loginLink = $('.modal-login');
var rulesLink = $('.modal-rules');
var loginPop = $('.popup-login');
var close = $('.popup-close');
var rulesPop = $('.popup-rules');

loginLink.click(function(){
    loginPop.fadeIn();
});

close.click(function(){
    loginPop.fadeOut();
});

rulesLink.click(function(){
    rulesPop.fadeIn();
});

close.click(function(){
    rulesPop.fadeOut();
});