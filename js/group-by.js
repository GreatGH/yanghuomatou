$(function(){
	$.lunbo($(".group-buy-lunbo .lunbo-body>img"),$(".group-buy-lunbo>.radio"))
	$(".group-buy-lunbo>.lunbo-body img").lazyload({
//		threshold : $(window).height(),
		effect: "fadeIn"
	})
	$(".content>.grouo-shop-list img").lazyload({
//		threshold : $(window).height(),
		effect: "fadeIn"
	})
})
