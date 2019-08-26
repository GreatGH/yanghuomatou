var chanPage = document.querySelectorAll('.body-content .right .change-page>span');
var countrySpan = document.querySelectorAll('.shop-type .brand .country span');
var typeSpan = document.querySelectorAll('.shop-type .brand .type span');
var priceSpan = document.querySelectorAll('.shop-type .brand .price-rang span');
var addOne = document.querySelectorAll('.body-content .shop-list .joincat .addone');
chanPage[1].style.backgroundColor = '#FF2D52';
//翻页
chanGe(1,chanPage,chanP);
//选中商品类型后变边框颜色
chanGe(0,countrySpan,chanBor);
chanGe(0,typeSpan,chanBor);
chanGe(0,priceSpan,chanBor);
function chanBor(spannum,spanarr){
	for(var i=0; i<spanarr.length; i++){
		if(i!=spannum){
			spanarr[i].style.backgroundColor = 'white';
			spanarr[i].style.color = 'black';
		}else{
			spanarr[i].style.backgroundColor = '#FF2d52';
			spanarr[i].style.color = 'white';
		}
	}
}
function chanP(pagenum){
	for(var i=1; i<chanPage.length-1; i++){
		if(i!=pagenum){
			chanPage[i].style.backgroundColor = 'white';
		}else{
			chanPage[i].style.backgroundColor = '#FF2D52';
		}
	}
}
function chanGe(conNum,conSpan,func){
	for	(var i=conNum; i<conSpan.length-conNum; i++){
		conSpan[i].index = i;
		conSpan[i].onclick = function(){
			func(this.index,conSpan);
		}
	}
}
for	(var i=0; i<addOne.length; i++){
	addOne[i].parentNode.index = i;
	addOne[i].parentNode.onmousedown = function(){
		addOne[this.index].style.backgroundColor = '#FF2D52';
		addOne[this.index].style.fontSize = '12px';
		addOne[this.index].style.opacity = '0.5';
		addOne[this.index].style.lineHeight = '26px';
		addOne[this.index].style.bottom = '56px';
		addOne[this.index].style.right = '5px';
		addOne[this.index].style.transitionDuration = '0.2s';
	}
	addOne[i].parentNode.onmouseup = function(){
		addOne[this.index].style.backgroundColor = 'transparent';
		addOne[this.index].style.fontSize = '0';
		addOne[this.index].style.opacity = '1';
		addOne[this.index].style.lineHeight = '10px';
		addOne[this.index].style.bottom = '42px';
		addOne[this.index].style.right = '20px';
	}
}
