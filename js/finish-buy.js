var addOne = document.querySelectorAll('.finish-addr-content>.addr-one');
var trianGle = document.querySelectorAll('.finish-addr-content>.addr-one>.triangle');
var sendStyle = document.querySelectorAll('.send-style>span');
var payStyle = document.querySelectorAll('.pay-style>span');
sendStyle[0].style.background = 'white';
sendStyle[0].style.color = 'black';
payStyle[0].style.background = 'white';
payStyle[0].style.color = 'black';
trianGle[0].style.display = 'block';
//trianGle[0].style.opacity = 1;
for	(var i=0; i<addOne.length-1; i++){
	addOne[i].index = i;
	addOne[i].onclick = function(){
		for	(var j = 0 ;j<trianGle.length;j++){
			if(this.index!=j){
				trianGle[j].style.display = 'none';
				addOne[j].style.opacity = 0.2;
			}else{
				trianGle[this.index].style.display = 'block';
				addOne[this.index].style.opacity = 1;
			}
		}
	}
}
chBg(payStyle);
chBg(sendStyle);
function chBg(style){
	for	(var i=0; i<style.length ;i++){
		style[i].index = i;
		style[i].onclick = function(){
			for	(var j=0; j<sendStyle.length ;j++){
				if(this.index!=j){
					style[j].style.background = 'white';
					style[j].style.color = 'black';
				}else{
					style[j].style.background = '#FF2D52';
					style[j].style.color = 'white';
				}
			}
		}
	}
}
