var name_of_the_guest_array=[];


function submit(){
    var display_guest_array=[];
     
         var name_of_the_guest=document.getElementById("name_of_the_guest").value;
         console.log(name_of_the_guest);
         name_of_the_guest_array.push(name_of_the_guest);
     
     console.log(name_of_the_guest_array);
     var length_of_guest_array=name_of_the_guest_array.length;
     console.log(length_of_guest_array);

     for(var k=0;k<length_of_guest_array;k++){
        display_guest_array.push("<h6>"+name_of_the_guest_array[k]+ " </h6>");
        console.log(display_guest_array);
        document.getElementById("NAME_LIST").innerHTML=display_guest_array;
     
  }
}

  function sorting() {
    name_of_the_guest_array.sort();
    console.log(name_of_the_guest_array);
    var display_sorted_guest_array=[];
    var length_of_guest_array=name_of_the_guest_array.length;
    console.log(length_of_guest_array);
    
    for(var k=0;k<length_of_guest_array;k++){
        display_sorted_guest_array.push("<h6>"+name_of_the_guest_array[k]+ " </h6>");
        console.log(display_sorted_guest_array);
        
        
    }

    document.getElementById("sorted").innerHTML=display_sorted_guest_array;
    
 }

 function search(){
     var s=document.getElementById("search_name").value;
     var found=0;
     var j;
     for(j=0; j<name_of_the_guest_array.length; j++) {
         if(s==name_of_the_guest_array[j]){
             found=found+1;
         }
     }
     document.getElementById("p2").innerHTML="name found "+found+" time/s" ;
     console.log("found name "+found+" time/s");
 }


function show(){
    var i = name_of_the_guest_array.join("<br>");
    console.log(name_of_the_guest_array);
    document.getElementById("p1").innerHTML=i.toString();
}
