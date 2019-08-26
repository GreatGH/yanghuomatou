$(function(){
	$.subMit($(".regist-check"))
	$("input").focus(function(){
		$(this).parent().find('label').hide()
	})
	$(".login .login-input-top .prom-right").click(function(){
		$(this).closest('.login-content').removeClass('on').siblings().addClass('on')
	})
	getCode(60,$('.code'))
	function getCode(num,ele){
		ele.click(function(){
			if(!$(this).hasClass('disabled')){
				$(this).addClass('disabled')
				downTime(num)
			}
		})
		var cook = $.cookie('cook')
		if(cook){
			downTime(cook)
		}
		function downTime(count){
			ele.addClass('disabled')
			ele.text(count+'s后重获')
			var timer = setInterval(function(){
				$.cookie('cook',count)
				count--
				ele.text(count+'s后重获')
				if(count<=0){
					clearInterval(timer)
					ele.text('重新获取').removeClass('disabled')
					$.removeCookie('cook')
				}
			},1000)
		}
	}
})
