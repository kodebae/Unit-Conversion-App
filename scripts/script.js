
var num = document.getElementById("num") // numeric value pulled into our formulas

// lables and results
var label = document.getElementById("label")
var clear = document.getElementById("clear")
var result = document.getElementById("result")
var studentData = document.getElementById("student-data") // input for student data
var submitSD = document.getElementById("submit-sd") // button for onclick
var studentOutput = document.getElementById("student-output") // p tag to post output to the dom

    /*
     ! Temperature Buttons
     */    
    // celsius buttons
        var btnceltofah = document.getElementById("btnceltofah")
        var btnceltokev = document.getElementById("btnceltokel")
        var btnceltoran = document.getElementById("btnceltoran")

    // fahrenheit buttons
        var btnfahtoran = document.getElementById("btnfahtoran")
        var btnfahtokel = document.getElementById("btnfahtokel")
        var btnfahtocel = document.getElementById("btnfahtocel")
       
    // Rankine buttons
        var btnrantofah = document.getElementById("btnrantofah")        
        var btnrantocel = document.getElementById("btnrantocel")
        var btnrantokel = document.getElementById("btnrantokel")

    // Kelvin buttons
        var btnkeltofah = document.getElementById("btnkeltofah")
        var btnkeltocel = document.getElementById("btnkeltocel")
        var btnkeltoran = document.getElementById("btnkeltoran")

    /*
     ! Volume Buttons
     */

    // Liters 
        var btnlittotab = document.getElementById("btnlittotab")
        var btnlittocup = document.getElementById("btnlittocup")
        var btnlittogal = document.getElementById("btnlittogal")

    // Tablespoons
        var btntabtolit = document.getElementById("btntabtolit")
        var btntabtocup = document.getElementById("btntabtocup")
        var btntabtogal = document.getElementById("btntabtogal")

    // Cups
        var btncuptolit = document.getElementById("btncuptolit")
        var btncuptotab = document.getElementById("btncuptotab")
        var btncuptogal = document.getElementById("btncuptogal")

    // Gallons 
        var btngaltolit = document.getElementById("btngaltolit")
        var btngaltotab = document.getElementById("btngaltotab")
        var btngaltocup = document.getElementById("btngaltocup")


    /*
     ! Measurement Buttons
     */

    // Inches to Cubic Feet & vice versa
    var btnCubInchToCubFeet = document.getElementById("btn-cub-inch-to-cubfeet")
    var btnCubFeetToCubInch = document.getElementById("btn-cubfeet-to-cubinch")


    /*
    ! Conversion Functions
    */

    /*
    ? Temperature Functions
    */

    /*
    TODO: Some temp func are not showing the negative sign for the output atm. I can possibly hardcode this in later.
    */
            // Celsius
        var celtofah = function(celtofah){
            return celtofah *1.8 +32
            
        }

        var celtokev = function(celtokev){
            return celtokev + 273.15
        }

        var celtoran = function(celtoran){
            return celtoran *1.8 + 491.67
        }


            // Fahrenheit

        var fahtoran = function(fahtoran){
            return fahtoran + 459.67
        }

        var fahtokel = function(fahtokel){
            return (fahtokel - 32) * 5/9 + 273.15
        }
        var fahtocel = function(fahtocel){
            return (fahtocel - 32)/1.8
        }

            // Rankine

        var rantofah = function(rantofah){
            return rantofah - 459.67
        }
        
        var rantocel = function(rantocel){
            return rantocel - 491.67 /1.8
        }

        var rantokel = function(rantokel){
            return rantokel * 5/9
        }

            // Kelvin
        var keltofah = function(keltofah){
            return (keltofah - 273.15) * 9/5 + 32
        }

        var keltocel = function(keltocel){
            return (keltocel - 273.15)
        }

        var keltoran = function(keltoran){
            return keltoran * 1.8
        }

    /*
    ? Volume Functions
    */
            // Liters
        var littotab = function(littotab){
            return littotab * 67.628
        }

        var littocup = function(littocup){
            return littocup * 4.227
        }

        var littogal = function(littogal){
            return littogal * 3.785
        }

            // Tablespoons
        var tabtolit = function(tabtolit){
            return tabtolit / 67.628
        }

        var tabtocup = function(tabtocup){
            return tabtocup / 16
        }

        var tabtogal = function(tabtogal){
            return tabtogal / 256
        }

            // Cups
        var cuptolit = function(cuptolit){
            return cuptolit / 4.167
        }

        var cuptotab = function(cuptotab){
            return cuptotab * 16.231
        }

        var cuptogal = function(cuptogal){
            return cuptogal / 15.773
        }


            // Gallons
        var galtolit = function(galtolit){
            return galtolit * 3.785
        }

        var galtotab = function(galtotab){
            return galtotab * 256
        }

        var galtocup = function(galtocup){
            return galtocup * 15.773
        }


    /*
    ? Length Functions
    */


            // Cubic Inches to Cubic Feet

        var cubInchToCubFeet = function(cubInchToCubFeet){
            return cubInchToCubFeet / 1728
        }

            // Cubic Feet to Cubic Inches

        var cubFeetToCubInch = function(cubFeetToCubInch){
            return cubFeetToCubInch * 1728
        }    

    /*
    ! OnClick Button Conversions
    */
    
    // Formula output is rounded to the nearest tenth place
        
        /**** Temperatures ****/

            // Celsius

        btnceltofah.onclick = function(){
            var n = parseInt(num.value)
            var round = Math.abs(celtofah(n)).toFixed(2)
            return result.innerHTML = round
           
        } 

        btnceltokev.onclick = function(){
            var n = parseInt(num.value)
            var round = Math.abs(celtokev(n)).toFixed(2)
            return result.innerHTML = round
        }

        btnceltoran.onclick = function(){
            var n = parseInt(num.value)
            var round = Math.abs(celtoran(n)).toFixed(2)
            return result.innerHTML = round
        }

            // Fahrenheit

        btnfahtoran.onclick = function(){
            var n = parseInt(num.value)
            var round = Math.abs(fahtoran(n)).toFixed(2)
            return result.innerHTML = round
        }

        btnfahtokel.onclick = function(){
            var n = parseInt(num.value)
            var round = Math.abs(fahtokel(n)).toFixed(2)
            return result.innerHTML = round
        }

         btnfahtocel.onclick = function(){
            var n = parseInt(num.value)
            var round = Math.abs(fahtocel(n)).toFixed(2)
            return result.innerHTML = round
        }

            // Rankine
        btnrantofah.onclick = function(){
            var n = parseInt(num.value)
            var round = Math.abs(rantofah(n)).toFixed(2)
            return result.innerHTML = round
        }

        btnrantocel.onclick = function(){
            var n = parseInt(num.value)
            var round = Math.abs(rantocel(n)).toFixed(2)
            return result.innerHTML = round 
        }

        btnrantokel.onclick = function(){
            var n = parseInt(num.value)
            var round = Math.abs(rantokel(n)).toFixed(2)
            return result.innerHTML = round 
        }


            // Kelvin
        btnkeltofah.onclick = function(){
            var n = parseInt(num.value)
            var round = Math.abs(keltofah(n)).toFixed(2)
            return result.innerHTML = round 
        }

        btnkeltocel.onclick = function(){
            var n = parseInt(num.value)
            var round = Math.abs(keltocel(n)).toFixed(2)
            return result.innerHTML = round 
        }

        btnkeltoran.onclick = function(){
            var n = parseInt(num.value)
            var round = Math.abs(keltoran(n)).toFixed(2)
            return result.innerHTML = round 
        }


        /**** Volumes ****/

            // Liters

        btnlittotab.onclick = function(){
            var n = parseInt(num.value)
            var round = Math.abs(littotab(n)).toFixed(2)
            return result.innerHTML = round 
        }

        btnlittocup.onclick = function(){
            var n = parseInt(num.value)
            var round = Math.abs(littocup(n)).toFixed(2)
            return result.innerHTML = round
        }

        btnlittogal.onclick = function(){
            var n = parseInt(num.value)
            var round = Math.abs(littogal(n)).toFixed(2)
            return result.innerHTML = round
        }

            // Tablespoons

        btntabtolit.onclick = function(){
            var n = parseInt(num.value)
            var round = Math.abs(tabtolit(n)).toFixed(2)
            return result.innerHTML = round
        }
        
        btntabtocup.onclick = function(){
            var n = parseInt(num.value)
            var round = Math.abs(tabtocup(n)).toFixed(2)
            return result.innerHTML = round
        }

        btntabtogal.onclick = function(){
            var n = parseInt(num.value)
            var round = Math.abs(tabtogal(n)).toFixed(2)
            return result.innerHTML = round
        }

            // Cups

        btncuptolit.onclick = function(){
            var n = parseInt(num.value)
            var round = Math.abs(cuptolit(n)).toFixed(2)
            return result.innerHTML = round 
        }

        btncuptotab.onclick = function(){
            var n = parseInt(num.value)
            var round = Math.abs(cuptotab(n)).toFixed(2)
            return result.innerHTML = round 
        }

        btncuptogal.onclick = function(){
            var n = parseInt(num.value)
            var round = Math.abs(cuptogal(n)).toFixed(2)
            return result.innerHTML = round
        }

            // Gallons

        btngaltolit.onclick = function(){
            var n = parseInt(num.value)
            var round = Math.abs(galtolit(n)).toFixed(2)
            return result.innerHTML = round
        }


        btngaltotab.onclick = function(){
            var n = parseInt(num.value)
            var round = Math.abs(galtotab(n)).toFixed(2)
            return result.innerHTML = round
        }

        btngaltocup.onclick = function(){
            var n = parseInt(num.value)
            var round = Math.abs(galtocup(n)).toFixed(2)
            return result.innerHTML = round
        }


            /**** Lengths ****/ 

        btnCubInchToCubFeet.onclick = function(){
            var n = parseInt(num.value)
            var round = Math.abs(cubInchToCubFeet(n)).toFixed(2)
            return result.innerHTML = round
        }

        btnCubFeetToCubInch.onclick = function(){
            var n = parseInt(num.value)
            var round = Math.abs(cubFeetToCubInch(n)).toFixed(2)
            return result.innerHTML = round
        }



    /*
    ! Check student values
    */
    
        submitSD.onclick = function(){
            // if (studentData.value == result.innerHTML && typeof("string")){
            //     studentOutput.innerHTML=(" invalid")
            //  }
            if (studentData.value == result.innerHTML){
               studentOutput.innerHTML=(result.innerHTML +" is correct")
            }
            if (studentData.value != result.innerHTML){
                studentOutput.innerHTML=(" incorrect")
             }
        }
        

        clear.onclick = function(){ 
            num.value=""
            result.innerHTML=""    
        }










        
