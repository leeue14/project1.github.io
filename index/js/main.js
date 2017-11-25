/**
 * Created by leeue on 2017/11/24.
 */
<!--拖动滚动条或滚动鼠标轮-->
window.onscroll=function(){
    if(document.body.scrollTop||document.documentElement.scrollTop>500){
        console.log(document.documentElement.scrollTop);
        document.getElementById('gomain').style.display="block"
    }else{
        document.getElementById('gomain').style.display="none"
    }
}
<!--点击“回到顶部”按钮-->
function toTop(){
    window.scrollTo('0','0');
    document.getElementById('gomain').style.display="none"
}



