
    //1.ways to print in javascript
    //console.log("hello world");
    //alert("this is alert box");   alertbox
    // document.write("this is written by javascript");


    //2.javascript console API
    console.log("hello world",4+1,"anotherstring");
    console.warn("warning");
    console.error("error");

    //3.Javascript variables ---> containers to store data values
    var a=1;
    var b=2;

    console.log("sum of a and b:",a+b);
    console.log("minus of a and b:",a-b);   
    console.log("product of a and b:",a*b);
    console.log("divide of a and b:",a/b);

    console.log(a==b);   //false
    console.log(a>=b);
    console.log(a<=b);
    
    var c;
    c=b*2;
    c+=2;
    console.log(c);
    console.log( true && false);
    console.log(true || false );
    console.log(!false);

    //4.datatypes ---> 
        /*
            there are 2 types of datatypes:
           1.primitive datatypes: undefined,null,string,numbers,boolean,symbol(advance-topic)
           2.reference datatypes: Arrays and objects
           
        */ 

        //numbers
        var n=5;
        var d=56.35;

        //string
        var str="this is a string";
        var str2=" in javascript";
        console.log( str + str2 );

        //objects
        var marks={
            rahul: 100,
            neha: 99,
            nm: 'harsh',
        }
        console.log(marks);

        //booleans
        var t=true;
        var f=false;
        console.log(t,f);

        //var und=undefined;
        var und;
        console.log(und);

        var j=null;
        console.log(j);
        console.log("null and undefined are two different thing in javascript");

        //array
        var arr=[1,2,3,"getlost",5,6];
        console.log(arr);
        console.log(arr[3]);

        //functions in javascript
        var i=1;
        var k=1;
        function sum(i,k){
            return i+k;
        }

        var r=sum(i,k);
        console.log(r);
        console.log(sum(4,6));

        var z=5;
        function drink(z)
        {
            if(z>=18){
                console.log("alcohol");
            }
            else{
                console.log("frooti");
            }
        }
        console.log( drink(45) );
        
        //conditions in javascriptt
        var age=7;
        if(age>=18)
        {
            console.log("you are not kid");
        }
        else if(age<=5){
            console.log("you are kid");
        }
        else{
            console.log("dead");
        }



        //loops;
        var ar=[1,2,3,4,5,6];
        // console.log(ar);
        // for(var i=0 ; i<ar.length ;i++){
        //     console.log(ar[i]);
        // }
        /*another method for iterate Array*/
    //     ar.forEach(function(element){
    //         console.log(element);
    //     })

    //     let u=0;  /*var is global ,let is temporary/local #we always use let for variable initialization */
    //     const ac=5; /*constant ---> jiski value change hi na ho poore program mai we dont update constant variable value like ac++ it wont work it gives error */
    //    // ac++; generates->error

    //    let bc=0;
    //    while(bc<ar.length){
           
    //        console.log(ar[bc]);
        
    //        bc++;
    //    }

       let myarr=["harsh","pal","hii",145,null,true];
       //array-methods
        //myarr.pop();                      //to pop/remove element from last
        //myarr.push("56");              // to push/add element in array
        // myarr.shift();                //to remove element from front
        // myarr.unshift("hii");            //kisi bhi element ko first par laana hai toh use unshift
        // console.log(myarr.unshift("hii"));
        // myarr.toString();               //convert all array element into string
        // console.log(myarr.toString())


        console.log(myarr);
        console.log(myarr.length);




        //DATES IN JAVASCRIPY***************
        let date=new Date();
        // console.log(date);   //print current date
        // console.log(date.getTime());        //time in seconds
        // console.log(date.getHours()); //hours
        // console.log(date.getDay());     //days
        // console.log(date.getMonth());       //month
        // console.log(date.getFullYear());        //year

        //DOM -> document object manipulation means we can access/alter our html tags/elements from javascript


        //click on a button
        document.getElementById('click').click();
        document.getElementById('click').style.border='blue 1px solid';
        

