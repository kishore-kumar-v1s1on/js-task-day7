//1.Solving problems using array functions on the rest countries' data

//a.Get all the countries from the Asia continent /region using the Filter function

var requestA = new XMLHttpRequest();
requestA.open("GET","https://restcountries.com/v2/all");
requestA.send();
requestA.onload=function(){
    var result=JSON.parse(requestA.response);
     result.filter((countries) => {
           return countries.region ==="Asia";
     })
     console.log(result);
}

//-----------------------------------------------------------------------------------------------

//b.Get all the countries with a population of less than 2 lakhs using Filter function

var requestB = new XMLHttpRequest();
requestB.open("GET","https://restcountries.com/v2/all");
requestB.send();
requestB.onload=function(){
    var result1=JSON.parse(requestB.response);
    const pop = result1.filter((element)=>{
        return element.population<200000;
    })
console.log(pop);}

//-----------------------------------------------------------------------------------------------
//c.Print the following details name, capital, flag using forEach function

var requestC = new XMLHttpRequest();
requestC.open("GET","https://restcountries.com/v2/all");
requestC.send();
requestC.onload=function(){
    var resultt=JSON.parse(requestC.response);
   resultt.forEach(element => {
    console.log(element.name);
        console.log(element.capital);
        console.log(element.flag); 
   });
}

//-----------------------------------------------------------------------------------------------
//d.Print the total population of countries using reduce function

	var requestD = new XMLHttpRequest();
	requestD.open("GET","https://restcountries.com/v2/all");
	requestD.send();
	requestD.onload=function(){
		var resul=JSON.parse(requestD.response);
		var total = resul.reduce((acc,curr) =>{
			return acc+curr.population;
		} ,0);
		console.log(total);
	}

//-----------------------------------------------------------------------------------------------
//e.Print the country which uses US Dollars as currency

var requestE = new XMLHttpRequest();
requestE.open("GET","https://restcountries.com/v2/all");
requestE.send();
requestE.onload=function(){
    var res=JSON.parse(requestE.response);
   var currency = res.filter((element) => {
     for(let key in element.currencies){
        if(element.currencies[key].code === "USD"){
            return element;
        }
     }
   })
        console.log(currency);
    }
	
//-----------------------------------------------------------------------------------------------