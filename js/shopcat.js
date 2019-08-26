var cBox = document.querySelectorAll('[type=checkbox]');
var add = document.querySelectorAll('.shop-body .main-title-lists .count .addnum');
var cut = document.querySelectorAll('.shop-body .main-title-lists .count .cutnum');
var num = document.querySelectorAll('.shop-body .main-title-lists .count .number');
var price = document.querySelectorAll('.shop-body .main-title-lists .pricetwo .relprice');
var youhui = document.querySelectorAll('.catdetail-content .shadow .youhui');
var payfor = document.querySelectorAll('.catdetail-content .shadow .payfor');
var pre = document.querySelectorAll('.catdetail-content .shadow .pre');
var totalPrice = document.querySelector('.catdetail-content .par-total .total-price');
var totalShopNum = document.querySelector('.catdetail-content .par-total .shop-num');
var deleteShop = document.querySelectorAll('.shop-body .main-title-lists .save-delete .delete');
var deleteChosed = document.querySelector('.delete-chosed');
var shopBody = document.querySelector('.catdetail-content');
var relShop = document.querySelectorAll('.catdetail-content>.relshop');
var youhuiprice = [];
var payforprice =[];
var preprice = [];
var deleted
//先执行一次
totalP();
for	(var i=0; i<cBox.length; i++){
	cBox[i].index = i;
	if(i == 0|| i == cBox.length-1){
		cBox[i].onclick = function(){
			isChecked(this.index);
			
		}
	}else{
		cBox[i].onclick = function(){
			totalP();
		}
	}
}
//分别获取整形单价
for	(var i=0; i<youhui.length; i++){
	youhuiprice[i] = parseInt(youhui[i].innerHTML);
	payforprice[i] = parseInt(price[i].innerHTML);
	preprice[i] = parseInt(price[i].innerHTML);
}
//计算总价和总商品数量
function totalP(){
	var totalpri = 0;
	var totalNum = 0;
	for	(var i=0; i<payforprice.length; i++){
		if(cBox[i+1].checked){
			totalpri += parseInt(payfor[i].innerHTML);
			totalNum += parseInt(num[i].value);
		}
	}
	totalPrice.innerHTML = totalpri+'.00';
	totalShopNum.innerHTML = totalNum;
}
//添加点击事件并计算单个商品单价
for	(var i=0; i<add.length; i++){
	cut[i].index = i;
	add[i].index = i;
	num[i].index = i;
	youhui[i].index = i;
	payfor[i].index = i;
	pre[i].index = i;
	var numbe = 0;
	num[i].onchange = function(){
		calculatePrice(this.index);
		totalP();
	}
	add[i].onclick = function(){
		numbe = num[this.index].value;
		num[this.index].value = parseInt(num[this.index].value)+1;
		calculatePrice(this.index);
		totalP();
	}
	cut[i].onclick = function(){
		if(numbe<=0){
			num[this.index].value = 0;
			calculatePrice(this.index);
			totalP();
		}else{
			numbe--;
			num[this.index].value = parseInt(num[this.index].value)-1;
			calculatePrice(this.index);
			totalP();
		}
	}
}
function deleteShopping(index){
	var relShop1 = document.querySelectorAll('.catdetail-content>.relshop');
	if(relShop1.length>0){
		console.log('length:'+relShop.length);
		shopBody.removeChild(relShop[index]);
		num[index].value = 0;
		calculatePrice(index);
		totalP();
	}	
}
for	(var i=0; i<deleteShop.length; i++){
	deleteShop[i].index = i;
	deleteShop[i].onclick = function(){
		deleteShopping(this.index);
	}
}
deleteChosed.onclick = function(){
	console.log(cBox.length);
	for	(var i=cBox.length-2; i>0; i--){
		if(cBox[i].checked){
			deleteShopping(i-1);
		}
	}
}
//计算价格方法
function calculatePrice(index){
	youhui[index].innerHTML = youhuiprice[index]*num[index].value+'.00';
	payfor[index].innerHTML = payforprice[index]*num[index].value+'.00';
	pre[index].innerHTML = preprice[index]*num[index].value+'.00';
}
//选中全部商品方法
function isChecked(index){
	for(var i=0; i<cBox.length; i++){
		cBox[i].checked = cBox[index].checked;
		totalP();
	}
}
