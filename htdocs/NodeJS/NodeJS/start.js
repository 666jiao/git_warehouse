
var express=require("express");

var app=express();

app.listen(8080);

app.use(express.static("public"));

app.get('/start', function(req,res){
  res.json([
			{"lab":"部门1","value":4},
			{"lab":"部门2","value":7},
			{"lab":"部门3","value":8},
			{"lab":"部门4","value":9},
			{"lab":"部门1","value":4},
			{"lab":"部门2","value":7},
			{"lab":"部门3","value":8},
			{"lab":"部门4","value":9},
			{"lab":"部门1","value":4},
			{"lab":"部门2","value":7},
			{"lab":"部门3","value":8},
			{"lab":"部门4","value":9}
		]);
});