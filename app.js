//  Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

var user1=prompt("Enter your first name");
var user2=prompt(" Enter your last name ");

var newvariable=user1+" "+user2;
document.write(newvariable);

// Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser.

var usermobile=prompt("Enter your favourite mobile phone model");
document.write("My favourite mobile phone is "+ usermobile + "<br>");
document.write("Length of string:"+usermobile.length + "<br>");


// Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

var country="Pakistani";
var index=country.indexOf("n");
document.write("String: " + country + "<br>");
document.write("Index of 'n' :" +  index + "<br>");


// Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

var word="Hello World";
var index=word.lastIndexOf("l");
document.write("String " + word + "<br>");
document.write("Last index of 'l':" + index + "<br");

// Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.

var word="Pakistani";
var Index= word[3];

// document.write("String:" + word + "<br>");
// document.write("Character at index 3:" + Index + "<br>");

//Repeat Q1 using string concat() method.

var user1=prompt("Enter your first name");
var user2=prompt("Enter your last name");

var newvariable=user1.concat(user2);
document.write(" Welcome " + newvariable);


// Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

var string="Hyderabad";
var replacestring=string.replace("Hyder","Islam");
document.write("City: " + string + "<br>");
document.write("After replacement: " + replacestring + "<br>");

//  Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;



var string="Ali and Sami are best friends. They play cricket and football together";
var replace=(string.replace(/and/g,"&"));
document.write(string + "<br>");
document.write(replace+"<br>");


// Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.

var string="472";
var number=Number(string);
document.write("value:" + string + "<br>");
document.write("Type:" + typeof(string) + "<br>");
document.write("value:" + number + "<br>");
document.write("Type:" + typeof(number) + "<br>");


// Write a program that takes user input. Convert and
// show the input in capital letters.

var user=prompt("Enter any one word");
document.write("String : " + user + "<br>");
document.write("Uppercase" + user.toUpperCase() + "<br>");

// Write a program that takes user input. Convert and
// show the input in title case.

var string=prompt("Enter the input");
var word1=string.slice(0,1);
var word2=string.slice(1);



var result=word1.toUpperCase() + word2.toLowerCase();
document.write("User input:  " + string + "<br>");
document.write("Title case: "+ result + "<br>" );



// Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

var num=35.36;
var string=num.toString();
var dot=string.indexOf(".");



string=string.slice(0, dot) + string.slice(dot+1);
document.write("Number" + num + " <br>");
document.write("Result" + string + "<br>");

// Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .

var username=prompt("Enter input");
var symbols=["@","$","#","!",",","."];
for(var i=0 ; i<symbols.length ; i++){
    for (var j=0 ; j<username.length ; j++){
        if(symbols[i]===username[j]){
            alert("Enter a valid username");
        }
    }
}

// You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability.

var array=["cake","apple pie","cookie","chips","patties"];
var user=prompt("Welcome to our bakery:What do you want to order Sir/Mam");
user=user.toLowerCase();
var matchFound=false;

for(var i=0 ; i<array.length ; i++){
    if(user===array[i]){
        matchFound=true;
        document.write(user + "is available at index " + i + " in our input"+ "<br>");
        break;
    }
}
if(matchFound=false){
    document.write("We are sorry" + user + "is not available in our bakery" + "<br>");
}


         
          

        

// Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.

// var input=prompt("Enter password");
// var inputlength=false;
// var inputinteger=false;
// var inputchar=false;
// var passstart=false


//  for(var i=0 ; i<input.length ; i++){

//     var passvalue=input[i].charCodeAt(0);



//     if(passvalue>=65 && passvalue<=90){;
//     inputchar=true;
//  }
//  else if( passvalue>=97 && passvalue<=122){
//     inputchar=true;
//  }
// }

// for(var i=0 ; i<input.length  ; i++){
//     var passvalue=input[i].charCodeAt(0);

//     if(passvalue>=48 && passvalue<=57){
//         inputinteger=true;
//     }



// }
//  var passvalue=input[i].charAt(0);

//  if(passvalue>=48 && passvalue<=57){
//     inputinteger=false;
//  }

//  for (var i=0 ; i<input.length ; i++){
//     if(input.length>=6){
//         inputlength=true;
//     }
//  }

//  if(inputchar=true || inputinteger==true || inputlength==true || passstart==true){
//     alert("Password approved")
//  }
// else {
//     alert("Invalid password")
// }



   
   var password=prompt("Enter valid password");
   passwordlength=false;
   passwordalphabet=false;
   passwordnumber=false;
   
   if(passwordlength<6){
     passwordlength=true;
     alert("Enter 6 digit password password contain both alphabets and numbers");
   }


   for(var i=0 ; i<password.length ; i++){
    var charCode=password.charCodeAt(i);
   }
   if(charCode>=65 && charCode<=90 || charCode>=97 && charCode<=122);{
     passwordalphabet=true;
   }
   if(charCode>=48 && charCode<=57){
    passwordnumber=true;
   }

   if(passwordalphabet==passwordnumber){
    alert("valid");
   }

   if(password.charCodeAt(0)>=48 && password.charCodeAt(0)<=57){
    passwordnumber=false;
   }
// Write a program to display the last character of a user
// input.

var user=prompt("enter input ");

document.write("User input " + user + "<br>");
document.write("Last char of input " + user[user.length-1]);

// You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.

var string="the quick brown fox jumps over the lazy dog";
var count=(string.match()).length;
document.write("Text: " + string + "<br>");
document.write("There are " + count + " occurence(s) of word 'the' " + "<br>");

