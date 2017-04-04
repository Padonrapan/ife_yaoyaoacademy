(function(){
    var hintText=[{hint:"必填,长度为4-16字符",right:"名称格式正确",wrong:"名称格式错误",isPassed:false},
        {hint:"请输入密码，长度为8~20个英文字符",right:"密码格式正确",wrong:"密码格式错误",isPassed:false},
        {hint:"再次输入相同密码",right:"密码输入一致",wrong:"密码输入不一致",isPassed:false},
        {hint:"请输入正确邮箱地址",right:"邮箱格式正确",wrong:"邮箱格式错误",isPassed:false},
        {hint:"请输入正确的手机号码",right:"手机格式正确",wrong:"手机格式错误",isPassed:false}];

    var regEvent=function(node,event,func){
        if (node.addEventListener)
            node.addEventListener(event, func);
        else if (node.attachEvent)
            node.attachEvent("on" + event, func);
        else
            node["on" + event] = func;
    };
    function regValue(id){
        var flag=false;
        var input=document.getElementById("t"+id);
        var hint=document.getElementById("h"+id);
        var content=document.getElementById("c"+id);
        var value=input.value;
        switch (parseInt(id)){
            case 1:
                flag=/^[a-zA-Z0-9]{4,16}$/.test(value.replace(/[\u4E00-\u9FA5]/g,"00"));
                break;
            case 2:
                flag=/^\S{4,16}$/.test(value);
                break;
            case 3:
                flag=document.getElementById("t2").value==value;
                break;
            case 4:
                flag=/^([a-zA-Z0-9]+[_|\.]?)*[a-zA-Z-0-9]+@([a-zA-Z0-9]+[_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z0-9]{2,4}/.test(value);
                break;
            case 5:
                flag=/^[1][0-9]{10}$/.test(value);
                break;
        }
        if(flag){
            input.style.borderColor = "green";
            hint.className="right";
            content.innerHTML=hintText[id-1].right;
            hintText[id-1].isPassed=true;
        } else{
            input.style.borderColor = "red";
            hint.className="wrong";
            content.innerHTML=hintText[id-1].wrong;
            hintText[id-1].isPassed=false;
        }
    };
    var inputs=document.getElementsByTagName("input");
    [].forEach.call(inputs,function(v){
        var id=v.getAttribute("id").slice(1);
        var hintID="h"+v.getAttribute("id").slice(1);
        regEvent(v,"focus",function(){
            document.getElementById(hintID).style.display="table-row";
        });
        regEvent(v,"blur",function(){regValue(id)});
    });
    regEvent(document.getElementById("submit"),"click",function(e){
        e.preventDefault();
        [1,2,3,4,5].forEach(function(v){regValue(v);});
        var flag=hintText.every(function(v){return v.isPassed;});
        if(flag){
            alert("提交成功");
        }
        else{
            alert("提交失败");
        }
    });
})();