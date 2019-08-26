var requestId = [];
var requestUrl = 'http://192.168.97.254:3001/';
var ShopList = document.querySelectorAll('.recommend .shop-lists');
var reTitleA = document.querySelectorAll('.recommend-title li');
var reTriangle = document.querySelectorAll('.recommend-title li .triangle');
ShopList[0].style.display = 'block';
for(var i=0; i<ShopList.length; i++){
	requestId[i] = requestUrl+'recommend'+'?id='+(i+1);
	zhixing(i);
}
function zhixing(n){
	var request = new XMLHttpRequest();
	request.open('GET',requestId[n],true);
	request.send(null);
	request.onreadystatechange = function(){
		if(request.readyState == 4){
			var list = JSON.parse(request.responseText);
			if(list.success){
				for(var j=0; j<list.list.length; j++){
					for(var prop in list.list[j]){
						if(prop == 'img'){
							ShopList[n].children[j].children[0].src = '../img/'+list.list[j][prop];
						}else{
							ShopList[n].querySelectorAll('.'+prop)[j].innerHTML = list.list[j][prop];
						}
					}
				}
				reTriangle[0].style.borderBottomColor = '#FF2D52';
				reTriangle[0].parentNode.style.borderBottom = '2px solid #FF2D52';
				chanShopList(reTitleA,ShopList,reTriangle,2);
			}
		}
	}
}
function chanShopList(relA,reSL,reTri,num){
	for	(var i=0; i<relA.length-num; i++){
		relA[i].index = i;
		relA[i].onmouseenter = function(){
			for(var j=0; j<reSL.length; j++){
				if(j!=this.index){
					reSL[j].style.display = 'none';
					reTri[j].style.borderBottomColor = 'transparent';
					reTri[j].parentNode.style.borderBottom = '2px solid white';
				}else{
					reSL[j].style.display = 'block';
					reTri[j].style.borderBottomColor = '#FF2D52';
					reTri[j].parentNode.style.borderBottom = '2px solid #ff2d52';
				}
			}
		}
	}
}

