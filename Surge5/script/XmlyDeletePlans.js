//删除弹屏广告
let app = JSON.parse($response.body);
delete app.plans; 
$done({body:JSON.stringify(app)});
