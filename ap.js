
"use strict";
const data = "Prius,2017,red,automatic,y,y,y,n,n,y,10000#Ionic,2020,blue,automatic,y,y,y,y,y,y,13000#Audi,2013,gray,manual,y,y,n,n,n,n,7500#Golf,1995,black,manual,n,n,n,n,n,n,2100#Kia,2007,white,automatic,n,y,n,n,n,n,5300#Mercedes,1998,silver,automatic,y,y,y,n,n,n,8600";

function split_string(string) {
    const info = data.split(`#`);

    return info.map(cars => {
        const result_obj = cars.split(',');
        return {
            Type: result_obj[0],
            Model: result_obj[1],
            Color: result_obj[2],
            Transmission: result_obj[3],
            Features:[
                 result_obj[4],
               result_obj[5],
               result_obj[6],
               result_obj[7],
               result_obj[8],
              result_obj[9],
                 +result_obj[10]
            ]

        };
      })
    
    
}
let main_logic = split_string(data).map(function(element){


if ( element.Features[0] == `y`   ){
element.Features[0] = 0.05
}
else if ( element.Features[0] == `n` ){
element.Features[0] = 0
}
if ( element.Features[1] == `y`   ){
element.Features[1] = 0.08
}
else if ( element.Features[1] == `n` ){
element.Features[1] = 0
}
if ( element.Features[2] == `y`   ){
element.Features[2] = 0.06
}
else if ( element.Features[2] == `n` ){
element.Features[2] = 0
}
if ( element.Features[3] == `y`   ){
element.Features[3] = 0.07
}
else if ( element.Features[3] == `n` ){
element.Features[3] = 0
}
if ( element.Features[4] == `y`   ){
element.Features[4] = 0.05
}
else if ( element.Features[4] == `n` ){
element.Features[4] = 0
}
if ( element.Features[5] == `y`   ){
element.Features[5] = 0.04
}
else if ( element.Features[5] == `n` ){
element.Features[5] = 0
}




if ( element.Model >= "2017"  ){

element.Features[7] = element.Features[6] * 0.1 + element.Features[6];
}
else if ( element.Model == "2010" || element.Model === "2011" || element.Model === "2012" || element.Model === "2013" || element.Model === "2014" ||element.Model === "2015"||element.Model === "2016"){
   element.Features[7] = element.Features[6] * 0.08 + element.Features[6];
}
else if ( element.Model == "2005" || element.Model === "2006"  ||  element.Model === "2007" || element.Model === "2008" || element.Model === "2009" ){
    element.Features[7] = element.Features[6] * 0.06 + element.Features[6];
}
else if (  element.Model === "2000" || element.Model === "2001"|| element.Model === "2002" || element.Model === "2003"|| element.Model === "2004"){
    element.Features[7] = element.Features[6] * 0.04 + element.Features[6];
}
else if ( element.Model < "1999"){
   element.Features[7] = element.Features[6] * 0.02 + element.Features[6];
} 
 
   if(  element.Transmission > 0 ){
    element.Features[7] =   element.Features[6] * 0.03 +  element.Features[7] 
   }else if (  element.Transmission < 0   ) {
    element.Features[7] =   element.Features[6]
   }
    

 return element
 
 
 
});


 
    function get_total_price(total) {
       return total.map(cars => {
     const price = cars.Features;
     cars.Features[7] = price.reduce((sum, course) =>   (cars.Features[0] + cars.Features[1] + cars.Features[2] + cars.Features[3]+ cars.Features[4] +  cars.Features[5]) * cars.Features[6] + cars.Features[7]  ) ;
     
       
      return cars
          
           });
           }
          
       
    let cars =   get_total_price(main_logic);
    
function format_string(cars) {
return cars.reduce((string, student) => {
    const courses = student.Features ;
    return string + `cars_list\n`+
    `Type: ${student.Type}\n` +
    `Model:${student.Model}\n` +
     `Color: ${student.Color}  \n` +
      `Transmission: ${student.Transmission}\n` +
      `Features:\n` +
     `  AC:${student.Features[0]  ?  `yes`: 'no' } \n` +
     `  Electric Windows: ${student.Features[1]  ?  `yes`: 'no'} \n` +
     `  Electric Mirrors: ${student.Features[2]  ?  `yes`: 'no'} \n` +
     `  Sunroof: ${student.Features[3]  ?  `yes`: 'no'} \n` +
     `  Auto_park: ${student.Features[4]  ?  `yes`: 'no'} \n` +
     `  Cruise Control: ${student.Features[5]  ?  `yes`: 'no'} \n` +
     `  Total Price: ${student.Features[7]}\n\n`
     
  }, ``);
    
}

let decnding_order_obj = cars.sort((a, b) => Number(b. Features[7]) - Number(a. Features[7]));


let final_result = format_string(decnding_order_obj);
function print_result(string){
return string
}
console.log(print_result( final_result ))
