let app = JSON.parse($response.body);
var resultData = app.header[0].item.list[0].data;
var array = resultData.filter(function(item){
  return item.isAd == false;
})
console.log(array);
app.header[0].item.list[0].data = array;
$done({body:JSON.stringify(app)});
