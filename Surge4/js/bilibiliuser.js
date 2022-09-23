let app = JSON.parse($response.body);
let array = app.data.sections_v2;
//创作中心
let array1 = array[1].items ;
let newArray1 = [];
for(let i = 0 ;i < array1.length;i++){
    if(array1[i].title == '创作首页' || array1[i].title == '稿件管理'){
         newArray1.push(array1[i]);
    }
}
array[1].items = newArray1;
delete array[1].button;
//推荐服务
let array2 = array[2].items ;
let newArray2 = [];
for(let i = 0 ;i < array2.length;i++){
    if(array2[i].title == '我的钱包' || array2[i].title == '社区中心'){
            newArray2.push(array2[i]);
    }
}
array[2].items = newArray2;
//更多服务
let array3 = array[3].items ;
let newArray3 = [];
newArray3 = array3.filter(function(item){
    return item.title !== '青少年守护'
})
array[3].items = newArray3;

delete app.data.vip_section_v2;
delete app.data.vip_section;
$done({body:JSON.stringify(app)});
