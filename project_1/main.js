var inputName = document.getElementsByTagName('input')[0];
var infoWord = document.getElementById('info');

//绑定按钮
document.getElementById("btn").onclick=function(){
    render();
}

//渲染动画
function render(){
    var inputValue = inputName.value;
    if(strLength(inputValue)===0) {
        infoWord.innerHTML = '姓名不能为空';
        infoWord.style.color = 'red';
        inputName.style.border = '1px solid red';

        }
    else if(strLength(inputValue)>=4 && strLength(inputStr)<=16) {
        infoWord.innerHTML = '格式正确';
        infoWord.style.color = 'lightgreen';
        inputName.style.border = '1px solid lightgreen';
    }
    else{
        infoWord.innerHTML = '请输入长度为4~16位字符';
        infoWord.style.color = 'red';
        inputName.style.border = '1px solid red';
    }
}
//判断字符数量
function strLength(str){
    var len=0;
    for(var i=0;i<str.length;i++){
        var countCode=str.charCodeAt(i);
        if(0 <= countCode && countCode <= 128){
            len+=1;
        }
        else{
            len+=2;
        }
    }
    return len;
}