let app = JSON.parse($response.body);
let top = app.data.top;
let newTop = top.filter(function(item){
    return item.name != "游戏中心";
   })
app.data.top = newTop ;
let bottom = app.data.bottom;
let newBottom = bottom.filter(function(item){
     return item.name != "发布";
})
newBottom = newBottom.filter(function(item){
    return item.name != "会员购";
})
app.data.bottom = newBottom;
$done({body:JSON.stringify(app)});
