//登录验证
var hideshow=document.getElementById("hide-show");
var phone=/^(1)([0-9]{10})/;
var mail =/^(([0-9a-zA-Z]+)|([0-9a-zA-Z]+[_.0-9a-zA-Z-]*[0-9a-zA-Z-]+))@([a-zA-Z0-9-]+[.])+([a-zA-Z]|net|NET|asia|ASIA|com|COM|gov|GOV|mil|MIL|org|ORG|edu|EDU|int|INT|cn|CN|cc|CC)$/;
$(".button").on("click",function () {
    if($("#plone").val()==""){
        hideshow.innerHTML="请输入手机/邮箱/用户名";
    }else if(/@/.test($("#plone").val())==true && mail.test($("#plone").val())!=true){
        hideshow.innerHTML="您书写的邮箱格式不正确";
    }else if(/^([0-9]+)$/.test($("#plone").val())==true && phone.test($("#plone").val())!=true){
        hideshow.innerHTML="请您书写正确格式的手机号";
    }else if(/^([0-9]+)$/.test($("#plone").val())!=true && /@/.test($("#plone").val())!=true){
        hideshow.innerHTML="请您书写的用户名不正确";
    }else if($("#mima").val()==""){
        // $("#zhenghao").blur().css("border","");
        hideshow.innerHTML="请您填写密码";
    }
    // else if($("#mima").val().length<6){
    //     // $("#zhenghao").blur().css("border","");
    //     hideshow.innerHTML="您的密码强度过低，请重新填写";
    // }
});
