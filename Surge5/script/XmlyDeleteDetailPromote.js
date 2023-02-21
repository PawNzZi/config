let app = JSON.parse($response.body);
var resultData = app.data.associationAlbumsInfo;
var array = resultData.filter(function(item){
  return item.promoteId === 0;
})
app.data.associationAlbumsInfo = array;
$done({body:JSON.stringify(app)});
