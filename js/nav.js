var usericon = document.querySelector('#user-icon');
var gotop = document.querySelector('.aside-nav .aside-nav-bottom .go-top a');
var usercenter = document.getElementById('user-center');
var user = document.getElementById('user');
usericon.onmouseenter = function() {
	usericon.style.backgroundColor = 'black';
	usercenter.style.backgroundColor = '#383838';
	usercenter.style.cursor = 'pointer'
	usercenter.style.right = '30px';
	usercenter.style.fontSize = '12px';
	usercenter.style.transitionDuration = '0.3s';
	console.log(1);
}
user.onmouseleave = function(){
	usercenter.style.fontSize = '0';
	usercenter.style.cursor = 'default';
	usercenter.style.right = '50px';
	usericon.style.backgroundColor = '#383838';
	usercenter.style.backgroundColor = 'transparent';
}

gotop.onclick = function(){
	gotop.href = '../fifth-day/nav.html';
	gotop.style.transitionDuration = '0.3s';
}