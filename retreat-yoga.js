let values='true';
let downbar=document.querySelector('.fa-solid')
function showtable(){ 
 
    let showtable= document.querySelector(".for-full-table")
     
    if(values==='true'){
 showtable.style.display="block";
 return values='false';
}
     else{
      showtable.style.display="none";
       return values='true';
     }
    }    

    function showtable2(){ 
        let showtable= document.querySelector(".for-full-table-2");
     
       if(showtable){
        if(values==='true'){
     showtable.style.display="block";
      values='false';
    }
         else{
          showtable.style.display="none";
            values='true';
         }}
         else{
            console.error("element with class 'for-full-table-1' not found.")
         }
        }  
        function showtable3(){ 
         let showtable= document.querySelector(".for-full-table-3");
       
        if(showtable){
         if(values==='true'){
      showtable.style.display="block";
       values='false';
     }
          else{
           showtable.style.display="none";
             values='true';
          }}
          else{
             console.error("element with class 'for-full-table-1' not found.")
          }
         }  

         function showtable4(){ 
            let showtable= document.querySelector(".for-full-table-4");
          
           if(showtable){
            if(values==='true'){
         showtable.style.display="block";
          values='false';
        }
             else{
              showtable.style.display="none";
                values='true';
             }}
             else{
                console.error("element with class 'for-full-table-1' not found.")
             }
            }     

            function showtable5(){ 
               let showtable= document.querySelector(".for-full-table-5");
            
              if(showtable){
               if(values==='true'){
            showtable.style.display="block";
             values='false';
           }
                else{
                 showtable.style.display="none";
                   values='true';
                }}
                else{
                   console.error("element with class 'for-full-table-1' not found.")
                }
               }  

               function showtable6(){ 
                  let showtable= document.querySelector(".for-full-table-6");
            
                 if(showtable){
                  if(values==='true'){
               showtable.style.display="block";
                values='false';
              }
                   else{
                    showtable.style.display="none";
                      values='true';
                   }}
                   else{
                      console.error("element with class 'for-full-table-1' not found.")
                   }
                  }  

                  function showtable7(){ 
                     let showtable= document.querySelector(".for-full-table-7");
                
                    if(showtable){
                     if(values==='true'){
                  showtable.style.display="block";
                   values='false';
                 }
                      else{
                       showtable.style.display="none";
                         values='true';
                      }}
                      else{
                         console.error("element with class 'for-full-table-1' not found.")
                      }
                     }  

                     function showtable8(){ 
                        let showtable= document.querySelector(".for-full-table-8");
                     
                       if(showtable){
                        if(values==='true'){
                     showtable.style.display="block";
                      values='false';
                    }
                         else{
                          showtable.style.display="none";
                            values='true';
                         }}
                         else{
                            console.error("element with class 'for-full-table-1' not found.")
                         }
                        }  
  
 function yogaretreat(){
   
      let name=document.getElementById("name-1").value;
      var number=document.getElementById("ph_no_1").value;
      if(name,number == ""){
         alert("fill the given details");
         return 0;
      }
      var peoples=document.getElementById("peoples-1").value;
      // var checkin=document.getElementById("checkin-1").value;
      // var checkout=document.getElementById("checkout-1").value;
      // var type=document.getElementById("type").value;
      var email=document.getElementById("email-1").value;
      var enquiry=document.getElementById('textarea').value;
      // var decor=document.getElementById("decor");
      var watsappurl="https://wa.me/919024860746?text="+
         "       Yoga"+"%0a"+
         "name of customer:- "+name+"%0a"+
      "mobile number:- "+number+"%0a"+
      "Email:- "+email+"%0a"+
      "number of people:-"+peoples+"%0a"+
      "Enquiry:-"+enquiry;
  
      window.open(watsappurl,"_blank").focus();} 
                    