var meunRig = $('.meunRight').length;
$('.meun li').hover(function(){
	var i = $(this).index();
	$('.meunRight').eq(i).addClass('none').siblings().removeClass('none')
})
$('.meunRight').eq(0).addClass('none')
// /------导航事件------/
$('.mark a').hover(function(){
	$(this).addClass('markHover')
},function(){
	$(this).removeClass('markHover')
})
$('.search input').hover(function(){
	$(this).addClass('inputHover')
},function(){
	$(this).removeClass('inputHover')
})

$('.navL a').hover(function(){
	$(this).css({'color':'#4178be'});
	$(this).find('img').attr('src','images/nav_hover.png')
},function(){
	$(this).css({'color':'black'});
	$(this).find('img').attr('src','images/nav_03.png')
})
$('.navHover').hover(function(){
	$(this).find('span').addClass('aHover').parent().siblings().find('span').removeClass('aHover');
},function(){
	$(this).find('span').removeClass('aHover');
})

$('.Productos').mouseenter(function(event){
	event.preventDefault()
	var mum = $('.Meun').stop().slideDown(500)
	if(mum){
		$(this).find('span').addClass('aHover')
	}
})
$('.Meun').hover(function(){
	$(this).css('display','block')
},function(){
	$(this).stop().slideUp(500)
	$('.Productos').find('span').removeClass('aHover')
})
$('.Meun>a').click(function(event){
	event.preventDefault();
	$('.Meun').stop().slideUp(500);
})

// /------鼠标移入事件------/
$('.esta>div>img').mouseenter(function(){
	$(this).siblings('.list').stop().fadeIn(500)
})
$('.esta>div>img').mouseleave(function(){
	$(this).siblings('.list').stop().fadeOut(500)
})
// /------滚动条事件------/

$(document).scroll(function(){
	var top=$(this).scrollTop();
	if(top>500){
		$('#top').stop().animate({'right':20},200);
	}else{
		$('#top').stop().animate({'right':-50},200)
	}
	return top=$(this).scrollTop();
})
$('#top').click(function(event){
	event.preventDefault();
	$('html,body').animate({'scrollTop':0},1000)
	$('#nav1').css('display','block')
	$('.banner').css('margin-top',0)
})

var mt=$('header').height()
$(document).ready(function(){
	var p=0, t=0;
	$(window).scroll(function(e){
		p=$(this).scrollTop()
		if(t<=p){
			$('#nav2').fadeOut(1000)
			$('.Meun').fadeOut(500);
			console.log(111);
		}else{
			$('.banner').css('margin-top',mt)
			$('.Meun').slideUp(500);
			$('#nav2').fadeIn(500)
			$('#nav1').css('display','none');
			console.log(222);
		}
		setTimeout(function(){t=p},500)
	})
})

// /------背景图插件------/
//
// $(document).ready(function() {
//   $('#entre').particleground({
//     dotColor: '#5cbdaa',
//     lineColor: '#5cbdaa'
//   });
//   $('#entre>div').css({
//     'margin-top': -($('#entre>div').height())
//   });
// });
//
$("#entreBg").jParticle({
		  particlesNumber: 100,
		  linkDist: 50,
		  createLinkDist: 150,
		  disableLinks: false,
		  disableMouse: true,
		  background: "#4178be",
		  color: "white",
		  width: null,
		  height: null,
		  linksWidth: 1,
			particle: {
				color: "white",
				minSize: 2,
				maxSize: 4,
				speed: 60
			}
	});

// /------轮播图------/
//
$(".lunbo>div").css('width',100/3+"%")
$("#explore li a").hover(function(event){
	event.preventDefault();
	if(!$(this).hasClass("active2")){
		$(this).addClass('active1')
	}
},function(){
	$(this).removeClass('active1');
})

var num = 0
var showLength=$("#explore li a");
showLength.click(function(event){
	event.preventDefault();
	num = $(this).parent().index();
	var ml = num * -100 + "%"
	$(".lunbo").stop().animate({'margin-left':ml},500);
	$(this).addClass('active2').parent().siblings().find('a').removeClass('active2')
	// console.log(num)
})
var time = function(event){
	num = num + 1
	// console.log(num)
	// var ml = num * -100 + "%"
	if(num>2){
		num=0;
	}
	$('.lunbo').stop().animate({'margin-left':'-100%'},1000,function(){
		$('.lunbo>div').eq(0).appendTo($('.lunbo'));
		$('.lunbo').css('margin',0);
	})
	$("#explore li a").eq(num).addClass('active2').parent().siblings().find('a').removeClass('active2')
}
var t = setInterval(time,2000);
$(".explore").hover(function(){
	clearInterval(t)
},function(){
	t = setInterval(time,2000);
})
$('#right').click(function(event){
	event.preventDefault();
	time();
})
$('#left').click(function(event){
	event.preventDefault();
	num = num - 1
	var ml = num * -100 + "%"
	if(num<0){
		num = 2
	}
	$('.lunbo').css('margin-left','-100%');
	$('.lunbo>div').eq(2).prependTo($('.lunbo'));
	$('.lunbo').stop().animate({'margin-left':0},600);
	$("#explore li a").eq(num).addClass('active2').parent().siblings().find('a').removeClass('active2')
})
// /------宽------/
$('.comoBottom>div').css('width',94/3+'%')
// var mt =$('header').css('height')
// $('.banner>div').css('padding-top',mt)

// /------language按钮------/
	$('#button').click(function(event){
		event.preventDefault()
		$('.box').stop().fadeIn(500);
		$('#text').focus();
		return false;
	})
	$('li').click(function(event){
		$('#button').val($(this).text())
		$('.box').stop().fadeOut(500);
	})
	$('#button').click(function(){
		return false;
	})
	$('#text').click(function(){
		return false;
	})
	$('body').click(function(){
		$('.box').stop().fadeOut(500);
	})
	$('.box').scroll(function(e){
		return false
	})
