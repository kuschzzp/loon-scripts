/*
**********************************
          
[rewrite_local]

^https?:\/\/focos\.oracle\.bendingspoonsapps\.com\/v\d\/(users\/setup|purchases\/verify\/apple) url script-response-body https://raw.githubusercontent.com/kuschzzp/loon-scripts/main/focosVip.js


[Script]
http-response ^https?:\/\/focos\.oracle\.bendingspoonsapps\.com\/v\d\/(users\/setup|purchases\/verify\/apple) requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/kuschzzp/loon-scripts/main/focosVip.js

[MITM]
 
hostname = focos.oracle.bendingspoonsapps.com


**********************************
*/

var obj=JSON.parse($response.body);obj.me.active_subscriptions_ids=["com.focos.1w_t8_1w"],$done({body:JSON.stringify(obj)});
