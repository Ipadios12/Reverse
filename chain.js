// ##################################################
// Reverse ABC
// ##################################################

	 function reverse(str) {
     if (str.length == 1) return str;
     return reverse(str.slice(1)) + str[0];
   }
   window.onload = function () {
     document.getElementById("reversar").addEventListener(
       "click",
       function () {
         var chain = document.getElementById("chain").value;
         document.getElementById("reverse").value = reverse(chain);
       },
       false
     );
   };
   
   // ##################################################
   //    Fin Reverse ABC
   // ##################################################
