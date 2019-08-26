$(window).load(function(){
	var leftBtn = $(".vip-massage ul li .leftbtn")
	var rightBtn = $(".vip-massage ul li .rightbtn")
	var outDiv = $(".vip-massage ul .shop")
	var inDiv = $(".vip-massage ul .shop>div")
	var wid = inDiv.innerWidth()
	outDiv.width(wid*inDiv.length)
	debugger
	console.log(inDiv.height())
	outDiv.parent().height(inDiv.height())
	{
		var index = {
			index0: 0,
			index1: 0,
			index2: 0,
			index3: 0
		}
		outDiv.css('position','absolute')
		leftBtn.click(function(){
			console.log('index'+$(this).parent().index())
			if(index['index'+$(this).parent().index()]>=3){
				index['index'+$(this).parent().index()] -= 3
				$(this).parent().find('.shop-out>.shop').animate({left: -inDiv.innerWidth()*index['index'+$(this).parent().index()]},300)
			}
		})
		rightBtn.click(function(){
			if(index['index'+$(this).parent().index()]<=$(this).parent().find('.shop-out>.shop>div').length/3){
				index['index'+$(this).parent().index()] += 3
				$(this).parent().find('.shop-out>.shop').animate({left: -inDiv.innerWidth()*index['index'+$(this).parent().index()]},300)
			}
		})
	}
})
