var request = new XMLHttpRequest();
var requestUrl = 'http://192.168.97.254:3001/';
request.open('get',requestUrl+'lunbo',true);
request.send(null);
request.onreadystatechange = function(){
	if(request.readyState==4){
		var img = document.querySelector('.chanimg>div');
		img.innerHTML = '';
		var a = JSON.parse(request.responseText);
		if(a.success){
			for	(var i=0; i<a.list.length;i++){
				img.innerHTML += `<img src="${requestUrl+a.list[i].img}" alt="" />`;
			}
			img.innerHTML += `<img src="${requestUrl+a.list[0].img}" alt="" />`;
			lunbo();
		}
	}
}

function lunbo(){
	var chanImg = document.querySelectorAll('.chanimg img');
	chanImg[0].parentNode.style.width = chanImg[0].offsetWidth*chanImg.length + 'px';
	var iChange = document.querySelectorAll('.change-img i');
	var j = 0;
	var picchange;
	var chanImgleft;
	var speed = 20;
	var index;
	//创建定时器
	function interval(){
		picchange = setInterval(function(){
			time(speed);
		},1500)
	}
	interval();
	//移入和移出商品分类列表控制定时器
	document.querySelector('.guide-body .guide-left>ul').onmouseleave = interval;
	document.querySelector('.guide-body .guide-left>ul').onmouseenter = function(){
		clearInterval(picchange);
	}
	document.querySelector('.change-img').onmouseenter = function(){
		clearInterval(picchange);
	}
	document.querySelector('.change-img').onmouseleave = interval;
	//创建按钮
	for	(var i=0; i<chanImg.length-1; i++){
		var span = document.createElement('span');
		span.innerHTML = i;
		span.style.left = i*40+'px';
		chanImg[0].parentNode.parentNode.appendChild(span);
	}
	var span = document.querySelectorAll('.chanimg span');
	//左右箭头
	for	(var i=0; i<2; i++){
		iChange[i].index = i;
		iChange[i].onclick = function(){
			if(this.index == 1){
				time(speed);
			}else{
				time(-speed);
			}
		}
	}
	span[0].style.backgroundColor = '#f60';
	function time(speed){
		chanImgleft = chanImg[0].parentNode.offsetLeft;
		var timer = setInterval(function(){
			var left = chanImg[0].parentNode.offsetLeft;
			chanImg[0].parentNode.style.left = left-speed + 'px';
			if((((chanImgleft-left)>=780)||((left-chanImgleft)>=780))&&(((left-speed)%800) ==0)){
				//图片带动点的变化
				for	(var i=0; i<chanImg.length-1; i++){
					if(i!=(-(left-speed)/800)){
						span[i].style.backgroundColor = '#FF2D52';
					}else{
						span[i].style.backgroundColor = '#f60';
					}
					if((-(left-speed)/800)==(chanImg.length-1)){
						span[0].style.backgroundColor = '#f60';
					}
				}
				clearInterval(timer);
				if(chanImg[0].parentNode.offsetLeft <=-chanImg[0].offsetWidth*(chanImg.length-1)){
					chanImg[0].parentNode.style.left = 0 +'px';
				}
			}
			if(speed<0&&chanImg[0].parentNode.offsetLeft >=0){
				chanImg[0].parentNode.style.left = -chanImg[0].offsetWidth*(chanImg.length-1) +'px';
			}
		},10)
	}
	for	(var i=0; i<span.length; i++){
		span[i].index = i;
		span[i].onclick = function(){
			chanImg[0].parentNode.style.left = -(this.index-1)*chanImg[0].offsetWidth+'px';
			time(speed);
		}
	}
	document.addEventListener('webkitvisibilitychange',function(){
		var isHiddent = document.hidden;
		if(isHiddent){
			clearInterval(picchange);
		}else{
			interval();
		}
	})
}