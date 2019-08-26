$(function(){
	var telInput = $(".aperation .tel>input")
	var verifInput = $(".aperation .verification>input")
	var nextbtn = $(".aperation .next-btn>input")
	var telJudge = /^1[356789][0-9]{9}$/
	var verification = '9958'
	
	//对输入的手机号进行判断
	telInput.blur(function(){
		if($(this).parents('.aperation').index() == 0){
			if(!telJudge.test($(this).val())){
				$(this).parent().children('.prompt').text('请输入正确的手机号码')
			}
		}
		if($(this).parents('.aperation').index() == 1){
			if(!$(this).val()){
				$(this).parent().children('.prompt').text('请输入正确的密码')
			}
		}
	})
	
	//输入框聚焦及失焦
	telInput.focus(function(){
		$(this).parent().children('.prompt').text('')
	})
	verifInput.blur(function(){
		if($(this).val()!='9958'){
			$(this).parent().children('.prompt').text('请输入正确的验证码')
		}
	})
	verifInput.focus(function(){
		$(this).parent().children('.prompt').text('')
	})
	
	//点击切换下一页
	nextbtn.click(function(){
		clickNext($(this))
	})
	
	//回车代替鼠标点击
	$(document).keydown(function(e){
		if(e.keyCode == 13){
			clickNext($(".aperation.on").find('[type=button]'))
		}
	})
	
	//判断是否跳转下一页
	function clickNext(ele){
		if(ele.parents('.aperation').index() == 0){
			if(!telJudge.test(ele.closest('.aperation').find('.tel>input').val())){
				telInput.parent().children('.prompt').text('请输入正确的手机号码')
				return
			}else if(ele.closest('.aperation').find('.verification>input').val()!='9958'){
				verifInput.parent().children('.prompt').text('请输入正确的验证码')
			}else{
				ele.parents('.aperation').eq(1).find('.prompt').text('')
				$('.road').eq(ele.parents('.aperation').index()).css('background-color','#FF2D52')
				$('.step').eq(ele.parents('.aperation').index()+1).addClass('on')
				ele.closest('.aperation').removeClass('on').next().addClass('on')
			}
		}else{
			if(!ele.parents('.aperation').find('.tel>.pwd').val()){
				ele.parents('.aperation').find('.tel>.pwd').next().text('请输入正确的密码')
			}else if(ele.closest('.aperation').find('.tel>.pwd').val()!=ele.parents('.aperation').find('.tel>.repwd').val()){
				ele.parents('.aperation').find('.tel>.repwd').next().text('前后密码不一致')
			}
			else{
				$('.road').eq(ele.parents('.aperation').index()).css('background-color','#FF2D52')
				$('.step').eq(ele.parents('.aperation').index()+1).addClass('on')
				ele.closest('.aperation').removeClass('on').next().addClass('on')
				var downTime = 5;
				var timer = setInterval(function(){
					downTime--
					$(".congra-word .backto-login .downtime").text(downTime+'s')
					if(downTime == 0){
						clearInterval(timer)
						$("body").load("final-login.html")
					}
				},1000)
			}
		}
	}
})
