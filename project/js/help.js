$(function(){
	$(".help-detail>.left-nav .title:first").css({
			'background': '#f1f1f1'
		})
	$(".help-detail>.left-nav .title").click(function(){
		$(this).css({
			'background': '#f1f1f1'
		})
		$(this).parent().siblings().children('.title').css({
			'background': 'white'
		})
		$(this).parent().children('ul').toggle(300);
		$(this).parent().siblings().children('ul').hide(300);
		$(this).parent().siblings().find('li').css({
			'background': 'white'
		})
	})
	//让点击的选项变背景，其余的去除背景色
	$(".help-detail>.left-nav ul li").click(function(){
		$(this).css({
			'background': '#f0f0f0'
		})
		$(this).siblings().css({
			'background': 'white'
		})
	})
})
