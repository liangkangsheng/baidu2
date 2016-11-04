//显示与隐藏--头部
$(".header_left").on('click','span',function () {
    $(".hide_head").slideDown("slow");

    $(".header_left").css({opacity:"0"});
    $(".skgin").css({opacity:"0"});
    $(".login").css({opacity:"0"});

});
$(".hide_head_top").on('click',function () {
    $(".hide_head").slideUp("slow");
    $(".header_left").css({opacity:"1"});
    $(".skgin").css({opacity:"1"});
    $(".login").css({opacity:"1"});
});
//显示与隐藏--new
var new_flag=1;
$(".gd_g").on('click',function () {
    $(".gd_g").toggleClass("gd_gs");
    if(new_flag==1){
        $(".navs_l").css({display:"block"});
        new_flag=0;
        $(".icon-xiangshangyuanjiantou").css({display:"block"});
        $(".icon-xiangxiayuanjiantou").css({display:"none"});
    }
    else{
        $(".navs_l").css({display:"none"});
        new_flag=1;
        $(".icon-xiangshangyuanjiantou").css({display:"none"});
        $(".icon-xiangxiayuanjiantou").css({display:"block"});
    }
});
//显示与隐藏--input
$(".input").on("focus",function (e) {
    e.stopPropagation();
    $(".yin").hide();
    input();
});
var dd="input"||"cuo"||"yin";
document.body.addEventListener("click",function (e) {
    if(e.target.className != dd ){
        $(".yin").show();
        $(".input").blur();
        $(".cuo").hide();
    }
});
function input() {
    $(".input").on('input',function (e) {
        e.stopPropagation();
        var input_val=$(".input").val().length;
        if(input_val>0){$(".cuo").css({display:"block"});}else{$(".cuo").hide();}
    });
}
$(".cuo").on('click',function(e){
    e.stopPropagation();
    $(".input").focus().val("");
    // $(".cuo").css({display:"none"});
    // $(".yin").css({display:"block"});
    input();
});

//显示与隐藏--input_yin
var input_yin=1;
$(".yin").on('click',function(){
    $(".yin").toggleClass("yin_top");
    if(input_yin==1){
        $(".baidu_d").css({display:"block"});
        input_yin=0;
    }
    else{
        input_yin=1;
        $(".baidu_d").css({display:"none"});
    }
});
//关注与推荐
$(".conent").on('click','.span_size',function(){
    $(this).addClass("active").siblings().removeClass("active");
});
//json
var cirty="北京";
function header_tianqi(dizhi){
    $.ajax({
        data:{"city":dizhi},
        dataType:"json",
        url:"http://wthrcdn.etouch.cn/weather_mini",
        Type:"get",
        success:function(data){
            console.log(data);
            $(".city").text(data.data.city);
            $(".weath").text(data.data.wendu+"°");
            $(".api").text(data.data.aqi);
        }
    })
}
header_tianqi(cirty);
function conent(){
    $.ajax({
        dataType:"json",
        url:"json/page.json",
        Type:"get",
        success:function(data){
            console.log(data);
            for(var i=0;i<data.length;i++){
                if(data[i].flag==3){
                    var fl1="<li class='conent_list'>"+
                        "<a href='#'>"+
                        "<div class='conent_title titles_top'>"+data[i].title+"</div>"+
                        "<div class='conent_imgs contents'>"+
                        "<div class='img_t'><img src='"+data[i].imgSrc.split("&&")[0]+"' alt=''></div>"+
                        "<div class='img_t'><img src='"+data[i].imgSrc.split("&&")[1]+"' alt=''></div>"+
                        "<div class='img_t'><img src='"+data[i].imgSrc.split("&&")[2]+"' alt=''></div>"+
                        "</div>"+
                         "</a>"+
                        "</li>";
                    $(".conent_ul").append(fl1);
                }
                if(data[i].flag==1){
                    var fl2="<li class='conent_list conent_list2'>"+
                        "<a href='#'>"+
                        "<div class='conent_imgs2'>"+
                        "<div class='img_t2'><img src='"+data[i].imgSrc+"'></div>"+
                        "<div class='conent_titles'><div class='conent_title titles_t2'>"+data[i].title+"</div></div>"+
                        "</div>"+
                        "</a>"+
                        "</li>";
                    $(".conent_ul").append(fl2);
                }
                $(document).on('scroll', function (e) {
                    var windowTop = $(window).innerHeight();
                    var documentTop = $(document).innerHeight();
                    var scrollTop = $(document).scrollTop();
                    var position=null;
                    if (windowTop + scrollTop+10 > documentTop) {
                        if(position==null){
                            position=0
                        }else if(position==0){
                            position=null
                        }
                        for(var i=position;i<position+6;i++){
                            if(data[i].flag==3){
                                var fl1="<li class='conent_list'>"+
                                    "<a href='#'>"+
                                    "<div class='conent_title titles_top'>"+data[i].title+"</div>"+
                                    "<div class='conent_imgs contents'>"+
                                    "<div class='img_t'><img src='"+data[i].imgSrc.split("&&")[0]+"' alt=''></div>"+
                                    "<div class='img_t'><img src='"+data[i].imgSrc.split("&&")[1]+"' alt=''></div>"+
                                    "<div class='img_t'><img src='"+data[i].imgSrc.split("&&")[2]+"' alt=''></div>"+
                                    "</div>"+
                                    "</a>"+
                                    "</li>";
                                $(".conent_ul").append(fl1);
                            }
                            if(data[i].flag==1){
                                var fl2="<li class='conent_list conent_list2'>"+
                                    "<a href='#'>"+
                                    "<div class='conent_imgs2'>"+
                                    "<div class='img_t2'><img src='"+data[i].imgSrc+"'></div>"+
                                    "<div class='conent_titles'><div class='conent_title titles_t2'>"+data[i].title+"</div></div>"+
                                    "</div>"+
                                    "</a>"+
                                    "</li>";
                                $(".conent_ul").append(fl2);
                            }
                        }
                        // console.log($(document).on('scroll', scr));
                    }
                });
            }
        }
    })
}
conent();
//换肤
$(".skgin").on('click',function () {
    $(".peeler").show();
});
$(".fhzy").on('click',function () {
    $(".peeler").hide();
});
var img=document.getElementById("img");
var tutu=document.getElementsByClassName("lerxk")[0];
var page=document.getElementById("page");
function fu(e){
    if (window.applicationCache) {
        img.src=e.getAttribute("name");
        document.body.style.background=e.getAttribute("for");
        localStorage["a"]=e.getAttribute("name");
        localStorage["b"]=e.getAttribute("for");
    }
}
var a1= localStorage["a"];
var b1= localStorage["b"];
if(b1 != undefined && a1 != undefined){//没有这一步图片 背景刷新之后就不在了
    img.src=a1;
    document.body.style.background=b1;

}
//不使用皮肤
$(".busy").on('click',function () {
    localStorage["a"]="";
    localStorage["b"]="#f1f1f1";
    document.body.style.backgroundColor="#f1f1f1";
    img.src="";
});
