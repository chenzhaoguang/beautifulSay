$(function(){$(".cart_L").click(function(){var n=$(".cart_M")[0].innerHTML;--n<0&&(n=0),$(".cart_M")[0].innerHTML=n}),$(".cart_R").click(function(){var n=$(".cart_M")[0].innerHTML;n++,$(".cart_M")[0].innerHTML=n})});