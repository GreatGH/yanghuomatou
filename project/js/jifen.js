$(function(){
	//轮播图片的父级
	var imgAll = $(".jifen .right-img .img-wid")
	//轮播图片
	var img = $(".jifen .right-img img")
	//轮播的按钮
	var radius = $(".jifen .right-img .con-radius")
	var timeDown = $('.limit-get-bottom .shop .time-down')
	var index = 0
	var timer
	var endTime = new Date('2020-1-1 00:00:00').getTime()
	downTime(timeDown,endTime)
	var downT = setInterval(function(){
		var nowTime = new Date().getTime()
		var distence = endTime - nowTime;
		if(distence<1000){
			timeDown.html(兑换已结束)
			clearInterval(downT)
		}else{
			downTime(timeDown,endTime)
		}
	},1000)
	//设置轮播图片的宽度与轮播图片的上上级祖先一致
	img.width(img.closest('.jifen').width())
	timer = setInterval(setTimer,1500)
	imgAll.parent().mouseenter(function(){
		clearInterval(timer)
	})
	imgAll.parent().mouseleave(function(){
		timer = setInterval(setTimer,1500)
	})
	radius.on('mouseenter',function(){
		imgAll.css({left: -$(this).index()*img.width()})
		$(this).addClass('on').siblings().removeClass('on')
		index = $(this).index();
		imgAll.stop(false)
	})
	
	//给兑换按钮添加兑换完的点击事件
	$('.good-get-bottom li .shop-intro>span,.limit-get-bottom .shop .shop-intro>span,.get-bottom .yhj-type .btn-get span').click(function(){
		$(this).css({
			background: '#ccc',
		}).text('已兑换完')
	})
	//定时执行轮播体
	function setTimer(){
		index++;
		imgMove(index,1000);
		if(index >= 3){
			index=0;
			imgMove(index,0);
		}
	}
	//图片移动方法
	function imgMove(index,time){
		radius.eq(index).addClass('on').siblings().removeClass('on')
		imgAll.animate({
			left: index*-imgAll.parent().width()
		},time)
	}
	
	//不足两位就加前缀 0
	function addZiro(sometime){
		if(sometime<10){
			sometime = '0'+sometime;
		}
		return sometime;
	}

	//倒计时方法
	function downTime(ele,ending){
		nowTime = new Date().getTime()
		distence = ending - nowTime;
		day = Math.floor(distence/1000/60/60/24);
		hour = Math.floor(distence%(1000*60*60*24)/1000/60/60)
		minute = Math.floor(distence%(1000*60*60*24)%(1000*60*60)/1000/60)
		second = Math.floor(distence%(1000*60*60*24)%(1000*60*60)%(1000*60)/1000)
		day = addZiro(day)
		hour = addZiro(hour)
		minute = addZiro(minute)
		second = addZiro(second)
		ele.html(day+'天'+hour+'时'+minute+'分'+second+'秒后结束')
	}
	
	//浏览器监听
	document.addEventListener('webkitvisibilitychange',function(){
		var isHidden = document.hidden;
		if(isHidden){
			clearInterval(timer)
		}else{
			timer = setInterval(setTimer,1500)
		}
	})
})