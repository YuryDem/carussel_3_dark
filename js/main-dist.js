$((function(){let e=document.getElementById("container");for(let t=0;t<20;t++){let t=document.createElement("div");t.className="Box",e.appendChild(t)}setInterval((function(){let e=document.getElementsByClassName("Box");for(let t=0;t<e.length;t++)e[t].style.left=Math.floor(100*Math.random())+"vw",e[t].style.top=Math.floor(100*Math.random())+"vh",e[t].style.width=Math.floor(400*Math.random())+"px",e[t].style.height=Math.floor(100*Math.random())+"px",e[t].style.backgroundPosition=Math.floor(5*Math.random())+"px"}),100);var t=["lightSpeedIn","fadeInDown","fadeInLeft","fadeInUp","fadeInRight","rotateIn","rotateInUpRight","rotateInUpLeft"];function a(){$(window).width()}$("#burger").click((function(e){e.preventDefault(),$(".burger-link__span").toggleClass("active"),$(".burger-link__span").hasClass("active")?$(".menu-block").addClass("active"):$(".menu-block").removeClass("active")})),a(),$(window).resize((function(){a()}));var i=$(".button-box"),n=360/i.length,s=n;n-=n;var o,r=90;function c(){$.each(i,(function(){$(this).css("transform","rotateZ("+n+"deg)"),$(this).css("transform-origin","bottom"),$(this).find("button i").css("transform","rotateZ(-"+n+"deg)"),n+=s}))}n+=r,c();var l=0;function d(){$(".button-box").each((function(e,t){o=l+e,l>=$(".button-box").length&&(l-=$(".button-box").length),o>=$(".button-box").length&&(o-=$(".button-box").length),$(this).attr("name",o)}))}d();var h="Home";$(".clue-block__text").children().text("Home"),$(".clue-block__icon").children().html('<i class="icon-bold-home"></i>');$(".line-block").find("h1").html("Home"),$(".section__box_menu_a").click((function(){$("header").removeClass("active"),$("main").removeClass("active"),$(".menu-block__item").removeClass("active"),t.sort((function(){return Math.random()-.5}));var e=$(this).attr("name");"Home"==e?$("header").removeClass("active"):($("header").addClass("active"),$("main").addClass("active")),$(".line-block").find("h1").html(e),$(".indicator-block__item").removeClass("active"),$(".indicator-block__item").each((function(){var t=$(this).attr("name");e==t&&$(this).addClass("active")})),$(".menu-block__item").each((function(){var t=$(this).attr("name");e==t&&$(this).addClass("active")})),$(".section__box_menu_a").removeClass("active"),$(".section__box_menu_a").css("cursor","pointer"),h=$(this).attr("name"),$(".clue-block__text").children().text(h),$(".clue-block .clue-block__text h3 ").css("color","var(--main_Color)"),$(t).each((function(e){$(".content").removeClass(t[e])})),$(".content").removeClass("active"),$(".content").css("z-index","0");var a=$(this).attr("href");$(".content").each((function(e,i){if($(i).attr("id")){var n=$(this).attr("id");a=="#"+n&&($(this).addClass("active"),$(this).css("z-index","10"),$(this).addClass(t[0]),$(this).css("animation-delay","0s"))}}));var s,o,m=$(this).attr("name");if($(".line-block").find("h1").html(m),$(this).addClass("active"),$(this).css("cursor","default"),$(".section__box_menu_a").attr("disabled",!1),$(this).attr("disabled",!0),$("#my-video").trigger("play"),$("#my-video").trigger("pause"),!$(this).hasClass("active"))return!1;for(var v=$(this).parent().attr("name"),_=1,u=360/i.length,f=1;f<i.length+1;f++)v==f&&(s=u*(i.length-_)-360,o=i.length-_,n+=r=s,l+=o),_++;d(),c()})),$(".menu-block__item").click((function(e){e.preventDefault(),$("header").removeClass("active"),$("main").removeClass("active"),t.sort((function(){return Math.random()-.5})),$(".menu-block__item").removeClass("active"),$(this).addClass("active");var a=$(this).attr("name");"Home"==a?$("header").removeClass("active"):($("header").addClass("active"),$("main").addClass("active")),$(".line-block").find("h1").html(a),$(".indicator-block__item").removeClass("active"),$(".indicator-block__item").each((function(){var e=$(this).attr("name");a==e&&$(this).addClass("active")})),$(".section__box_menu_a").removeClass("active"),$(".section__box_menu_a").css("cursor","pointer"),h=$(this).attr("name"),$(".clue-block__text").children().text(h),$(".clue-block .clue-block__text h3 ").css("color","var(--main_Color)"),$(".content").removeClass("active"),$(".content").css("z-index","0");var s=$(this).children().attr("href");$(t).each((function(e){$(".content").removeClass(t[e])})),$(".content").each((function(e,a){if($(a).attr("id")){var i=$(this).attr("id");s=="#"+i&&($(this).addClass("active"),$(this).css("z-index","10"),$(this).addClass(t[0]),$(this).css("animation-delay","0s"))}}));var o=$(this).attr("name");$(".line-block").find("h1").html(o),$(".section__box_menu_a").each((function(){var e,t,a=$(this).attr("name");if(o==a){if($(this).addClass("active"),$(this).css("cursor","default"),$(".section__box_menu_a").attr("disabled",!1),$(this).attr("disabled",!0),$("#my-video").trigger("play"),$("#my-video").trigger("pause"),!$(this).hasClass("active"))return!1;for(var s=$(this).parent().attr("name"),h=1,m=360/i.length,v=1;v<i.length+1;v++)s==v&&(e=m*(i.length-h)-360,t=i.length-h,n+=r=e,l+=t),h++;d(),c()}}))})),$(".section__box_menu_a").hover((function(){var e=$(this).attr("name");$(".clue-block__text").children().text(e),$(".clue-block .clue-block__text h3 ").css("color","#fff")}),(function(){$(".clue-block__text").children().text(h),$(".clue-block .clue-block__text h3 ").css("color","var(--main_Color)")})),$(".color_button").click((function(){$(".color__box").toggleClass("active")})),$(".color__box_item").click((function(){$(".color__box").removeClass("active"),$(".color__box_item").removeClass("active"),$(this).addClass("active"),$(".color__box_item").attr("disabled",!1),$(this).attr("disabled",!0);var e=$(this).css("background-color");$(":root").css("--main_Color",e),localStorage.setItem("--main_Color",e)}));var m=localStorage.getItem("--main_Color");$(":root").css("--main_Color",m),$(".leng__box_list").hover((function(){$(".leng__box_item").css("display","block")}),(function(){$(".leng__box_item").css("display","none")})),$(".leng__box_item").click((function(){var e=$(this).text();$(".leng__box_list_title").text(e)})),$(".start-block__button").click((function(){$("header").removeClass("active"),$("header").addClass("active"),$("main").removeClass("active"),$("main").addClass("active"),t.sort((function(){return Math.random()-.5})),$(".menu-block__item").removeClass("active"),$(".menu-block__item[name=about]").addClass("active"),$(".line-block").find("h1").html("about");var e=$(".section__box_menu_a[name=about]");$(".indicator-block__item").removeClass("active"),$(".indicator-block__item").each((function(){"about"==$(this).attr("name")&&$(this).addClass("active")})),$(".section__box_menu_a").removeClass("active"),$(".section__box_menu_a").css("cursor","pointer"),h=$(e).attr("name"),$(e).children().attr("class"),$(".clue-block__text").children().text(h),$(".clue-block .clue-block__text h3 ").css("color","var(--main_Color)"),$(t).each((function(e){$(".content").removeClass(t[e])})),$(".content").removeClass("active"),$(".content").css("z-index","0");var a,s,o=$(e).attr("href");if($(".content").each((function(e,a){if($(a).attr("id")){var i=$(this).attr("id");o=="#"+i&&($(this).addClass("active"),$(this).css("z-index","10"),$(this).addClass(t[0]),$(this).css("animation-delay","0s"))}})),$(e).addClass("active"),$(e).css("cursor","default"),$(".section__box_menu_a").attr("disabled",!1),$(e).attr("disabled",!0),$("#my-video").trigger("play"),$("#my-video").trigger("pause"),!$(e).hasClass("active"))return!1;for(var m=$(e).parent().attr("name"),v=1,_=360/i.length,u=1;u<i.length+1;u++)m==u&&(a=_*(i.length-v)-360,s=i.length-v,n+=r=a,l+=s),v++;d(),c()})),$(".arrow-box__right").click((function(){$("header").removeClass("active"),$("main").removeClass("active"),t.sort((function(){return Math.random()-.5})),$(".menu-block__item").removeClass("active");var e=$(".button-box[name=7]").children().attr("name");$(".line-block").find("h1").html(e),$(".indicator-block__item").removeClass("active"),$(".indicator-block__item").each((function(){var t=$(this).attr("name");e==t&&$(this).addClass("active")})),$(".menu-block__item").each((function(){var t=$(this).attr("name");e==t&&$(this).addClass("active")})),$(".indicator-block__item[name=Home]").hasClass("active")?$("header").removeClass("active"):($("header").addClass("active"),$("main").addClass("active"));var a=$(".button-box[name=7]").children();$(".section__box_menu_a").removeClass("active"),$(".section__box_menu_a").css("cursor","pointer"),h=$(a).attr("name"),$(".clue-block__text").children().text(h),$(".clue-block .clue-block__text h3 ").css("color","var(--main_Color)"),$(t).each((function(e){$(".content").removeClass(t[e])})),$(".content").removeClass("active"),$(".content").css("z-index","0");var s,o,m=$(a).attr("href");if($(".content").each((function(e,a){if($(a).attr("id")){var i=$(this).attr("id");m=="#"+i&&($(this).addClass("active"),$(this).css("z-index","10"),$(this).addClass(t[0]),$(this).css("animation-delay","0s"))}})),$(a).addClass("active"),$(a).css("cursor","default"),$(".section__box_menu_a").attr("disabled",!1),$(a).attr("disabled",!0),$("#my-video").trigger("play"),$("#my-video").trigger("pause"),!$(a).hasClass("active"))return!1;for(var v=$(a).parent().attr("name"),_=1,u=360/i.length,f=1;f<i.length+1;f++)v==f&&(s=u*(i.length-_)-360,o=i.length-_,n+=r=s,l+=o),_++;d(),c()})),$(".skill-per_1").each((function(){var e=$(this),t=e.attr("per");e.css("width",t+"%"),$({animatedValue:0}).animate({animatedValue:t},{duration:1e3,step:function(){e.attr("per",Math.floor(this.animatedValue)+"%")},complete:function(){e.attr("per",Math.floor(this.animatedValue)+"%")}})})),$(".block_titel").click((function(e){$(".block").hasClass("one")&&($(".block_titel").not($(this)).removeClass("active"),$(".block_text").not($(this).next()).slideUp(300)),$(this).toggleClass("active").next().slideToggle(300)})),$(".galerie-list").magnificPopup({delegate:"a",type:"image",gallery:{enabled:!0}}),$(".button").click((function(){var e=$(this).attr("data-filter");"all"==e?$(".filter").show("3000"):($(".filter").not("."+e).hide("3000"),$(".filter").filter("."+e).show("3000")),$(this).addClass("active").siblings().removeClass("active")}));var v=0;$(".block_item.customer.services").each((function(){$(this).attr("name",v),v+=1}));var _=['<img src="img/services/design-idee.jpg" alt="img">','<img src="img/services/UI.jpg" alt="img">','<img src="img/services/web.jpg" alt="img">','<img src="img/services/responsive_design.jpg" alt="img">','<img src="img/services/SEO-Aufmacher.jpg" alt="img">','<img src="img/services/print-design.jpg" alt="img">','<img src="img/services/photo.jpg" alt="img">','<img src="img/services/video_2.jpg" alt="img">'],u=$(".content__main-content_office_img_services").html();u='<img src="img/services/unsplash_hGV2TfOh0ns.jpg" alt="img">',$(".content__main-content_office_img_services").html(u);var f=$(".content__main-content_item_text.information").html(),p=['<span class="block_text_span">Design Idea:</span> </br>Ever read a webpage or document that used this text without paying much attention to it? The lorem ipsum is a placeholder text used in publishing and graphic design. This filler text is a short ','<span class="block_text_span">UI and UX Design:</span></br>UX-designer is the inventor of digital products designed to improve anything in the current reality.The UX designer explores the worlds (real, digital and on the border) at different viewing angles, notes a point for improvement, and then offers a product concept that will help clients achieve their goals at a higher level for a certain payment. ','<span class = "block_text_span"> Web Design:</span> </br> Web design - a type of graphic design aimed at developing and designing an Internet information environment facilities, designed to provide them with high consumer properties and aesthetic qualities.A similar interpretation separates web design from web programming, emphasizes the specifics of the object activity of a web designer, positions web design as a kind of graphic design.','<span class="block_text_span">Responsive Design:</span></br>Adaptability is one of the key requirements imposed on modern sites.The resource should be equally well shown on the computer screen, tablet, smartphone.For this, adaptive design is created and an adaptive layout is used.As a result, the web development process is complicated, requires additional resources.But the result is worth investments: the site is perfectly positioned on all major types of devices, which guarantees full audience coverage.','<span class="block_text_span">SEO:</span></br>Contains all the letters of the alphabet. The characters are spread out evenly so that the reader’s attention is focused on the layout','<span class="block_text_span">Print Design:</span></br>The lorem ipsum is a placeholder text used in publishing and graphic design. This filler text is a short paragraph that contains all the letters of the alphabet. The characters are spread out evenly so that the reader’s attention is focused on the layout','<span class="block_text_span">Photo Advertising:</span></br> The characters are spread out evenly so that the reader’s attention is focused on the layout of the text instead of its content.','<span class="block_text_span">Video Advertising:</span></br>Used this text without paying much attention to it? The lorem ipsum is a placeholder text used in publishing and graphic design. This filler text is a short paragraph that contains all the letters of the alphabet.'];$(".block_item.customer.services").click((function(){if($(this).hasClass("active"))$(".block_item.customer.services").children().children().removeClass("active"),$(".block_item.customer.services").removeClass("active"),$(this).removeClass("active"),$(".content__main-content_office_img_services").removeClass("active"),$(".content__main-content_item_text.information").removeClass("active"),setTimeout((function(){$(".content__main-content_office_img_services").addClass("active"),$(".content__main-content_office_img_services").html(u).fadeIn("slow","linear"),$(".content__main-content_item_text.information").addClass("active"),$(".content__main-content_item_text.information").html(f).fadeIn("slow","linear")}),500);else{$(".block_item.customer.services").children().children().removeClass("active"),$(this).children().children().addClass("active"),$(".block_item.customer.services").removeClass("active"),$(this).addClass("active"),$(".content__main-content_office_img_services").removeClass("active"),$(".content__main-content_item_text.information").removeClass("active");var e=$(this).attr("name");$(_).each((function(t){e==t&&setTimeout((function(){$(".content__main-content_office_img_services").addClass("active"),$(".content__main-content_item_text.information").addClass("active"),$(".content__main-content_item_text.information").html(p[t]).fadeIn("slow","linear"),$(".content__main-content_office_img_services").html(_[t]).fadeIn("slow","linear")}),500)}))}})),$(".overlay").each((function(e){$(this).attr("name",e),$(".overlay_indicator").append('<div class="overlay_indicator__item" name="'+e+'"></div>')})),$(".basicBox-more").each((function(e){$(this).attr("name",e)})),$(".basicBox-more").click((function(){$(".overlay_indicator").addClass("active"),$(".overlay_nav").addClass("active"),$(".overlay").removeClass("active");var e=$(this).attr("data-value"),t=$(this).attr("name");0==t?$(".overlay_nav__arrow.prew").css("pointer-events","none"):t==$(".basicBox-more").length-1?$(".overlay_nav__arrow.next").css("pointer-events","none"):($(".overlay_nav__arrow.prew").css("pointer-events","all"),$(".overlay_nav__arrow.next").css("pointer-events","all")),$(".overlay").each((function(){var t=$(this).attr("data-value");e==t&&$(this).addClass("active")})),$(".overlay_indicator__item").each((function(){var e=$(this).attr("name");t==e&&($(".overlay_indicator__item").removeClass("active"),$(this).addClass("active"))}))})),$(".overlay_block-button-exit").click((function(){$(".overlay_indicator").removeClass("active"),$(".overlay").removeClass("active"),$(".overlay_nav").removeClass("active"),$(".overlay_nav__arrow.next").css("pointer-events","all"),$(".overlay_nav__arrow.prew").css("pointer-events","all")})),$(".overlay_nav__arrow.next").click((function(){$(".overlay_nav__arrow.prew").css("pointer-events","all");var e=+$(".overlay.active").attr("name");e++,$(".overlay.active").removeClass("active"),$(".overlay").each((function(){$(this).attr("name")==e&&$(this).addClass("active")})),e==$(".overlay").length-1&&$(".overlay_nav__arrow.next").css("pointer-events","none"),$(".overlay_indicator__item").each((function(){var t=$(this).attr("name");e==t&&($(".overlay_indicator__item").removeClass("active"),$(this).addClass("active"))}))})),$(".overlay_nav__arrow.prew").click((function(){$(".overlay_nav__arrow.next").css("pointer-events","all");var e=+$(".overlay.active").attr("name");e-=1,$(".overlay.active").removeClass("active"),$(".overlay").each((function(){$(this).attr("name")==e&&$(this).addClass("active")})),0==e&&$(".overlay_nav__arrow.prew").css("pointer-events","none"),$(".overlay_indicator__item").each((function(){var t=$(this).attr("name");e==t&&($(".overlay_indicator__item").removeClass("active"),$(this).addClass("active"))}))})),$(".box-input").click((function(e){var t=$("input[id*='name']").val(),a=$("input[id*='email']").val();0==t&&0==a?($(this).addClass("active"),$(".answer").css("display","none")):$(this).addClass("active")})),$(".info_box__item_a").click((function(e){e.preventDefault(),window.location.href="mailto:hello@yourdesign.com"})),$(".button__block.first").click((function(e){e.preventDefault();var t=$("input[id*='name1']").val(),a=$("input[id*='email1']").val(),i=$("textarea[id*='textarea1']").val();0!=t&&0!=a&&0!=i?($(".box-input").removeClass("active"),$(".contact__wrapper").addClass("active"),$(".contact-back").addClass("active"),$(".answer").css("display","none"),$("input[type=text]").val(""),$("input[id*='email']").val(""),$("textarea").val("")):$(".answer").css("display","block")})),$(document).click((function(e){$(e.target).closest(".contact-block").length||($(".box-input").removeClass("active"),$("input[type=text]").val(""),$("input[id*='email']").val(""),$("textarea").val(""),$(".box-input").removeClass("active"),$(".answer").css("display","none"),$(".contact__wrapper").removeClass("active"),$(".contact-back").removeClass("active"))})),$(".fas.fa-sign-out-alt").click((function(){$(".contact__wrapper").removeClass("active"),$(".contact-back").removeClass("active"),$(".box-input").removeClass("active")})),$(".deck").click((function(){$(this).toggleClass("active"),$(this).hasClass("active")?($(".title").text("close"),$(".fas").css("display","none")):($(".title").text("open map"),$(".fas").css("display","block"))}))})),$(window).ready((function(){const e=document.querySelector(".cursor");document.addEventListener("mousemove",(t=>{e.style.left=t.pageX+"px",e.style.top=t.pageY+"px"})),$(".chart").addClass("active"),$(".chart").easyPieChart({size:100,barColor:"#111",scaleColor:!1,lineWidth:5,trackColor:"#fff",lineCap:"circle",animate:4e3}),setTimeout((function(){window.scrollTo(0,0)}),1),$("body").addClass("lock"),$("#preloader").addClass("active"),$(".cursor").css("display","none"),setTimeout((function(){$("#preloader").fadeOut(),$("body").removeClass("lock"),$(".cursor").css("display","block")}),4e3)})),function(e,t){"function"==typeof define&&define.amd?define(["jquery"],(function(e){return t(e)})):"object"==typeof exports?module.exports=t(require("jquery")):t(jQuery)}(0,(function(e){var t=function(e,t){var a,i=document.createElement("canvas");e.appendChild(i),"object"==typeof G_vmlCanvasManager&&G_vmlCanvasManager.initElement(i);var n=i.getContext("2d");i.width=i.height=t.size;var s=1;window.devicePixelRatio>1&&(s=window.devicePixelRatio,i.style.width=i.style.height=[t.size,"px"].join(""),i.width=i.height=t.size*s,n.scale(s,s)),n.translate(t.size/2,t.size/2),n.rotate((t.rotate/180-.5)*Math.PI);var o=(t.size-t.lineWidth)/2;t.scaleColor&&t.scaleLength&&(o-=t.scaleLength+2),Date.now=Date.now||function(){return+new Date};var r=function(e,t,a){var i=(a=Math.min(Math.max(-1,a||0),1))<=0;n.beginPath(),n.arc(0,0,o,0,2*Math.PI*a,i),n.strokeStyle=e,n.lineWidth=t,n.stroke()},c=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)},l=function(){t.scaleColor&&function(){var e,a;n.lineWidth=1,n.fillStyle=t.scaleColor,n.save();for(var i=24;i>0;--i)i%6==0?(a=t.scaleLength,e=0):(a=.6*t.scaleLength,e=t.scaleLength-a),n.fillRect(-t.size/2+e,0,a,1),n.rotate(Math.PI/12);n.restore()}(),t.trackColor&&r(t.trackColor,t.trackWidth||t.lineWidth,1)};this.getCanvas=function(){return i},this.getCtx=function(){return n},this.clear=function(){n.clearRect(t.size/-2,t.size/-2,t.size,t.size)},this.draw=function(e){var i;t.scaleColor||t.trackColor?n.getImageData&&n.putImageData?a?n.putImageData(a,0,0):(l(),a=n.getImageData(0,0,t.size*s,t.size*s)):(this.clear(),l()):this.clear(),n.lineCap=t.lineCap,i="function"==typeof t.barColor?t.barColor(e):t.barColor,r(i,t.lineWidth,e/100)}.bind(this),this.animate=function(e,a){var i=Date.now();t.onStart(e,a);var n=function(){var s=Math.min(Date.now()-i,t.animate.duration),o=t.easing(this,s,e,a-e,t.animate.duration);this.draw(o),t.onStep(e,a,o),s>=t.animate.duration?t.onStop(e,a):c(n)}.bind(this);c(n)}.bind(this)},a=function(e,a){var i={barColor:"#ef1e25",trackColor:"#f9f9f9",scaleColor:"#dfe0e0",scaleLength:5,lineCap:"round",lineWidth:3,trackWidth:void 0,size:110,rotate:0,animate:{duration:1e3,enabled:!0},easing:function(e,t,a,i,n){return(t/=n/2)<1?i/2*t*t+a:-i/2*(--t*(t-2)-1)+a},onStart:function(e,t){},onStep:function(e,t,a){},onStop:function(e,t){}};i.renderer=t;var n={},s=0,o=function(){for(var t in this.el=e,this.options=n,i)i.hasOwnProperty(t)&&(n[t]=a&&void 0!==a[t]?a[t]:i[t],"function"==typeof n[t]&&(n[t]=n[t].bind(this)));"string"==typeof n.easing&&"undefined"!=typeof jQuery&&jQuery.isFunction(jQuery.easing[n.easing])?n.easing=jQuery.easing[n.easing]:n.easing=i.easing,"number"==typeof n.animate&&(n.animate={duration:n.animate,enabled:!0}),"boolean"!=typeof n.animate||n.animate||(n.animate={duration:1e3,enabled:n.animate}),this.renderer=new n.renderer(e,n),this.renderer.draw(s),e.dataset&&e.dataset.percent?this.update(parseFloat(e.dataset.percent)):e.getAttribute&&e.getAttribute("data-percent")&&this.update(parseFloat(e.getAttribute("data-percent")))}.bind(this);this.update=function(e){return e=parseFloat(e),n.animate.enabled?this.renderer.animate(s,e):this.renderer.draw(e),s=e,this}.bind(this),this.disableAnimation=function(){return n.animate.enabled=!1,this},this.enableAnimation=function(){return n.animate.enabled=!0,this},o()};e.fn.easyPieChart=function(t){return this.each((function(){var i;e.data(this,"easyPieChart")||(i=e.extend({},t,e(this).data()),e.data(this,"easyPieChart",new a(this,i)))}))}}));const texts=["Illustrator","WEB Developer","Designer","photographer"];let count=0,index=0,currentText="",letter="";function getRandomInt(e){return Math.floor(Math.random()*Math.floor(e))}function type(){count==texts.length&&(count=0),currentText=texts[count],letter=currentText.slice(0,++index),document.querySelector(".typing").textContent=letter,letter.length==currentText.length&&(count++,index=0),setTimeout(type,getRandomInt(getRandomInt(800)))}type();
//# sourceMappingURL=main-dist.js.map