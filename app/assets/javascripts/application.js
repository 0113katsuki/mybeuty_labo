// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require jquery
//= require jquery.turbolinks
//= require turbolinks
//= require_tree .


$(function(){
  $(document).on('click', '#ceruraito_link', function(){
    $('+.ceruraito_wrapper', this).slideToggle("fast", ceruraitoFunc);
    return false;
  });

  $(document).on('click', '#item_link', function(){
    $('+.item_wrapper', this).slideToggle("fast", itemFunc);
    return false;
  });

  $(document).on('click', '#fee_link', function(){
    $('+.siborikomi_wrapper', this).slideToggle("fast", feeFunc);
    return false;
  });
});

function ceruraitoFunc(){
  if ($(this).css('display') == 'block'){
    $('#ceruraito_link').text('①脚が太い原因は？▲');
  }else{
    $('#ceruraito_link').text('①脚が太い原因は？▼');
  }
}

function itemFunc(){
  if ($(this).css('display') == 'block'){
    $('#item_link').text('②ボニックProの特徴は？▲');
  }else{
    $('#item_link').text('②ボニックProの特徴は？▼');
  }
}

function feeFunc(){
  if ($(this).css('display') == 'block'){
    $('#fee_link').text('③ボニックProの料金は？▲');
  }else{
    $('#fee_link').text('③ボニックProの料金は？▼');
  }
}
