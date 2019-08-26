//整合以防重名
$(document).ready(function(){
	var paGes = $('.change-pages .pages');
	var paGe = $('.change-page .pages');
	var leftArrow = $(".shop-img>.left .img-change .leftarrow");
	var rightArrow = $(".shop-img>.left .img-change .rightarrow");
	var imgArea = $(".shop-img>.left .img-change .img-qiehuan");
	var imG = $(".shop-img>.left .img-change img");
	var saveShop = document.querySelector('.shop-img>.left .bottom-icon .save-shop');
	var borderT = document.querySelectorAll('.all-pingjia-title>li');
	var borderTop = document.querySelectorAll('.guess-love>.right .top-chose>ul>li');
	var fabiao = $(".guess-love>.right .pingjia-inp");
	var pingJiaBtn = $(".go-pingjia>button");
	var zixunBtn = $(".zixun>.right-zixun-top>button");
	var pagind = 0;
	var index = 0;
	var imgIndex = 0;
	var instence = imG.width()+10;
	
	//初始化页码
	indexPage(paGes,pagind);
	indexPage(paGe,pagind);
	
	//点击切换图片
	leftArrow.click(function(){
		if(imgIndex>0){
			imgIndex--;
			imgBor(imgIndex);
		}
	})
	rightArrow.click(function(){
		if(imgIndex<imG.length-1){
			imgIndex++;
			imgBor(imgIndex);
		}
	})
	
	//点击出现评价输入框
	pingJiaBtn.click(function(){
		$(this).parents('.share-pingjia').next().slideToggle(500);
	})
	zixunBtn.click(function(){
		$(this).parents('.zixun').next().slideToggle(500);
	})
	
	
	borderT[0].style.borderTopColor = '#FF2D52';
	borderTop[0].style.borderTopColor = '#FF2D52';
	borderT[0].style.backgroundColor = '#ebebeb';
	borderTop[0].style.backgroundColor = '#ebebeb';
	chanBorderT(borderT);
	chanBorderT(borderTop);
	
	//点击图片切换图片
	imG.click(function(){
		imgIndex = $(this).index()
		imgBor(imgIndex);
	})
	
	//点击页面直接切换
	paGes.click(function(){
		console.log($(this).index())
		pagind = $(this).index()-1;
		indexPage(paGes,$(this).index()-1);
	})
	paGe.click(function(){
		pagind = $(this).index()-1;
		indexPage(paGe,$(this).index()-1);
	})
	
	//上下页点击间接切换
	chanGP('.change-pages .next',paGes,1);
	chanGP('.change-pages .last',paGes,-1);
	chanGP('.change-page .next',paGe,1);
	chanGP('.change-page .last',paGe,-1);
	
	saveShop.onmousedown = function(){
		this.style.backgroundColor = '#ff2d52';
		this.style.color = 'white';
	}
	saveShop.onmouseup = function(){
		this.style.backgroundColor = 'white';
		this.style.color = 'black';
	}
	
	//默认第一张被选中
	imgBor(0);
	
	

//	imgArea.style.width = imG[0].offsetWidth*imG.length;
//	leftArrow.onclick = function(){
//		imgQiehuan(distence,leftArrow,rightArrow);
//	}
//	rightArrow.onclick = function(){
//		imgQiehuan(-distence,rightArrow,leftArrow);
//	}
//	

	//评论发表
	$('.guess-love>.right .pingjia-inp button').click(function(){
		if($(this).prev().val()){
			var html = `
					<li class="clearfix">
						<div class="left fl">
							<img src="../img/3.jpg" alt="">
							<div>奥术大师多</div>
						</div>
						<div class="fl right">
							<div class="border-dash">
								<div class="pingjia-time l-height-22">
									<span class="type-pingjia">好评</span>
									<span>2016-11-29 16:10:45</span>
								</div>
								<div class="overflow-2 l-height-22">${$(this).prev().val()}</div>
								<ul class="clearfix">
									<li><img src="../img/5.png" alt="" /></li>
									<li><img src="../img/5.png" alt="" /></li>
									<li><img src="../img/5.png" alt="" /></li>
									<li><img src="../img/5.png" alt="" /></li>
									<li><img src="../img/5.png" alt="" /></li>
								</ul>
							</div>
							<div class="send-back">客服回复：感谢您对西安港及Ulife的肯定和信任，我们会继续做好服务工作，西安港全体工作人员期待您的下次惠顾！</div>
						</div>
					</li>`
			$(this).prev().val('')
			$(this).parent().next().children('.detail-pingjia').prepend(html);
		}
	})
	
	//页数切换方法
	function indexPage(pag,index){
		pag.eq(index).css({
			'background': '#ff2d52',
			'color': 'white'
		})
		pag.eq(index).siblings().css({
			'background': '#fff',
			'color': 'black'
		})
	}

	//上一页下一页切换
	function chanGP(ele,pag,judge){
		$(ele).click(function(){
			pagind=pagind+judge;
			if(pagind>=0&&pagind<5){
				indexPage(pag,pagind);
				$(this).css({
					'color': '#000'
				})
			}else{
				if(pagind==5){
					pagind = 4;
				}
				if(pagind==-1){
					pagind = 0;
				}
				$(this).css({
					'color': '#f1f1f1'
				})
			}
		})
	}
	
	//商品图片切换
	function imgQiehuan(distent,LorR,RorL){
		var moveDis = parseInt(imgArea.offsetLeft)+distent;
		if(-moveDis>(imgArea.offsetWidth-imgArea.parentNode.offsetWidth)||moveDis>0){
			LorR.style.color = '#e2e2e2';
			LorR.style.borderColor = '#e2e2e2';
		}else{
			imgArea.style.left = parseInt(imgArea.offsetLeft)+distent+'px';
		}
		RorL.style.color = '#ccc';
		RorL.style.borderColor = '#ccc';
	}
	
	
	//图片切换边框
	function imgBor(index){
		$(".shop-img>.left>.img>img").attr('src',imG.eq(index).attr('src'));
		imG.eq(index).css({
			'border-color': '#ff2d52'
		})
		imG.eq(index).siblings().css({
			'border-color': '#fff'
		})
	}
	
	//点击出现顶部边框
	function chanBorderT(borT){
		for	(var i=0 ;i<borT.length;i++){
			borT[i].index = i;
			borT[i].onclick = function(){
				for(var j=0;j<borT.length;j++){
					if(this.index == j){
						this.style.borderTopColor = '#ff2d52';
						this.style.backgroundColor = '#ebebeb';
					}else{
						borT[j].style.borderTopColor= 'transparent';
						borT[j].style.backgroundColor = '#f1f1f1';
					}
				}
			}
		}
	}
	
	
})
//传入一个图片上的小盒子的大小
$('.shop-img>.left>.img').magnifier({
	width: 100,
	height: 100
})