var request = require("request");
var cheerio = require("cheerio");
var _ = require("jQuery");
var display = _("#display");
//var prompt = require("prompt");
var url = "https://www.groupon.com/browse/phoenix?lat=33.4483&lng=-112.074&address=Phoenix&query=yoga&locale=en_US";
request(url, function (error, response, body) {
  if (!error) {
    var $ = cheerio.load(body);
    //get all the business names
    var business_names = $(".cui-merchant-name.cui-truncate").toArray();
    //obtain length of the business_name array
    var count = business_names.length;
    console.log("There are " + count);
    //Go through the array and display each names. The name strings are located under its elements' first child
    for(var i =0; i< count; i++){
    	if (business_names[i] && business_names[i].children[0]){
    		console.log(business_names[i].children[0].data);
    		display.append('<a href = "#{business_names[i].children[0].data}"><div>' + business_names[i].children[0].data + '</div></a>');
    	}
    }
    //get all divs with class cui-content, which are parents of element with the website's url string. 
    var business_websites = $(".cui-content").toArray();
    //Go through the array and display each href. The href strings are located under its elements' attribs of second child.
    for(var i = 0; i< count; i++){
    	if (business_websites[i] && business_websites[i].children[1]){
    		console.log(business_websites[i].children[1].attribs.href);
    		display.append('<a href = "#{business_websites[i].children[1].attribs.href}"><div>' + business_websites[i].children[1].attribs.href + '</div></a>');
    	}
    }
  } else {
    console.log("We’ve encountered an error: " + error);
  }
});