let app = JSON.parse($response.body);
var resultData = app.associationAlbumsInfo;
var array = resultData.filter(function(item){
  return item.promoteId === 0;
})
app.associationAlbumsInfo = array;
$done({body:JSON.stringify(app)});
