

//console.log("======================================================================");

var s=10;
var fn=function(){
    return 20;
};
function ss(){
    var url="http://www.jd.com:8080/location/sql";
    var result={};
    var i1=url.indexOf("://");
    result.protocol=url.substring(0,i1);
    var i2=url.lastIndexOf(":");
    result.hostname=url.substring(i1+3,i2);
    var i3=url.indexOf("/",i2);
    result.path=url.substring(i3);
    return result;
}

module.exports={
    s:s,
    fn:fn,
    ss:ss
};
























