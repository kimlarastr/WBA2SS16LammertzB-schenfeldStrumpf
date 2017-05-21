var fs = require('fs');
const chalk = require('chalk');

var obj=[];
fs.readFile('staedte.json','utf8', function(err, data){
if (err) throw err;
obj = JSON.parse(data);

for (x in obj.cities){
  console.log("name: " + chalk.green(obj.cities[x].name));
  console.log("country: " + chalk.yellow(obj.cities[x].country));
  console.log("population: " + chalk.blue(obj.cities[x].population));
  console.log("--------------------");

};

});
