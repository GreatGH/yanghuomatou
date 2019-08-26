var chTitleA = document.querySelectorAll('.child-using .right li');
var chShopList = document.querySelectorAll('.child-use-content');
var shopListMid = document.querySelectorAll('.child-use-content .middle-content');
var chTraingle = document.querySelectorAll('.child-using .right li .triangle');
chShopList[0].style.display = 'block';
chTraingle[0].style.borderBottomColor = '#FF2D52';
chTraingle[0].style.width = '0';
chTraingle[0].style.margin = '0 auto';
chTraingle[0].parentNode.style.borderBottom = '2px solid #ff2d52';
chanShopList(chTitleA,chShopList,chTraingle,0);
for(var i=0; i<shopListMid.length; i++){
	requestId[i] = requestUrl+'childuse'+'?id='+(i+1);
	zhixing2(i);
}
function zhixing2(n){
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
							shopListMid[n].children[j].children[0].src = '../img/'+list.list[j][prop];
						}else if(prop == 'title'){
							shopListMid[n].children[j].children[1].innerHTML = list.list[j][prop];
						}else{
							shopListMid[n].children[j].children[2].innerHTML = list.list[j][prop];
						}
					}
				}
				chTraingle[0].style.borderBottomColor = '#FF2D52';
				chTraingle[0].parentNode.style.borderBottom = '2px solid #FF2D52';
				chanShopList(chTitleA,chShopList,chTraingle,0);
			}
		}
	}
}