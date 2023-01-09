
let data = JSON.parse($response.body);

if (data.hasOwnProperty('vip_section')) {
    delete data.vip_section;
}
if (data.hasOwnProperty('vip_section_v2')) {
    delete data.vip_section_v2;
}
if (data.hasOwnProperty('sections_v2')) {
    let array = data.sections_v2;

    array = array.filter(item => item.title !== '推荐服务')

    for (var i = 0; i < array.length; i++) {
        if (array[i].title === '创作中心') {
            var obj = array[i].items;
            var objarray = [];
            for (var j = 0; j < obj.length; j++) {
                if (obj[j].id == 171 || obj[j].id == 172 || obj[j].id == 298 || obj[j].id == 174) {
                    objarray.push(obj);
                }
            }
            array[i].items = objarray;
        }
    }
    data.sections_v2 = array;
}
$done({ body: JSON.stringify(data) });
