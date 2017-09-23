var Employee = function(employye_details) {
	var keys_array = Object.keys(employye_details);
    for(var i =0; i < keys_array.length ; i++){
    var key = keys_array[i];
      this[key] = employye_details[key]; 
    }
 }

Employee.prototype[Symbol.iterator]=function(){
//console.log(this);
var obj = this;
	 var next_count = 0;
 	return {
 		[Symbol.iterator]() { return this; },  	
    next(){
        var key = Object.keys(obj)[next_count];
        next_count++;
        function done_status(){
         if(next_count > (Object.keys(obj)).length){return true;}
            //console.log(next_count,employees.length);
                // next_count++;
         return false;
        }

        	var done = done_status();
        	return {key:key, value :obj[key],done:done};
      	},
  
      value(){
        return Object.values(obj);
      }
  };
}

var employye_details = {id:1,first_name:"Ankit",last_name:"ANki",doj:"9/9/2016",department:"Dev",exp:{min: 3,med : 15,max : 10}};

var employee = new Employee(employye_details);

for(var employeeProperties of employee){
console.log(employeeProperties);
}

var itr = employee[Symbol.iterator]();
console.log("itr values");
console.log(itr.next().value);
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(employeeExp = itr.next().value);
console.log("end of itr");

console.log(employeeExp);

var Experience = new Employee(employeeExp); 

for(var i of Experience){
console.log(i);
}