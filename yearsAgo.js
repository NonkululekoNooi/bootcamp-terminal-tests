module.exports =function yearAgo(year){
  
const date = new Date();
  
var years = date.getFullYear()- year;
  
  return years;
}
 