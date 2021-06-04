function question()
        {
            var a=0;

            //question 1
            var b="";
            var opt1_1=document.getElementById('q1.1');
            var opt1_2=document.getElementById('q1.2');
            var opt1_3=document.getElementById('q1.3');
            var opt1_4=document.getElementById('q1.4');
            if(opt1_1.checked == true)
            {
                a=a+1;
                b='<h4 style="color:green">1)Correct</h4>';
            }
            else if(opt1_2.checked == true)
            {
                b='<h4 style="color:red">1)Incorrect</h4>';

            }
            else if(opt1_3.checked == true)
            {
                b='<h4 style="color:red">1)Incorrect</h4>';
            }
            else if(opt1_4.checked == true)
            {
                b='<h4 style="color:red">1)Incorrect</h4>';
            }
            else
            {
                b='<h4 style="color:blue">1)No option selected</h4>';
            }

            //question 2
            var c="";
            var opt2_1=document.getElementById('q2.1');
            var opt2_2=document.getElementById('q2.2');
            var opt2_3=document.getElementById('q2.3');
            var opt2_4=document.getElementById('q2.4');
            if(opt2_1.checked == true)
            {
                c='<h4 style="color:red">2)Incorrect</h4>';
            }
            else if(opt2_2.checked == true)
            {
                c='<h4 style="color:red">2)Incorrect</h4>';
            }
            else if(opt2_3.checked == true)
            {
                c='<h4 style="color:red">2)Incorrect</h4>';
            }
            else if(opt2_4.checked == true)
            {
				a=a+1;
				c='<h4 style="color:green">2)Correct</h4>';
            }
            else
            {
                c='<h4 style="color:blue">2)No option selected</h4>';
            }
            
            //question 3
            var d="";
            var opt3_1=document.getElementById('q3.1');
            var opt3_2=document.getElementById('q3.2');
            var opt3_3=document.getElementById('q3.3');
            var opt3_4=document.getElementById('q3.4');
            if(opt3_1.checked == true)
            {
                d='<h4 style="color:red">3)Incorrect</h4>';

            }
            else if(opt3_2.checked == true)
            {
                a=a+1;
                d='<h4 style="color:green">3)Correct</h4>';
            }
            else if(opt3_3.checked == true)
            {
                d='<h4 style="color:red">3)Incorrect</h4>';
            }
            else if(opt3_4.checked == true)
            {
                d='<h4 style="color:red">3)Incorrect</h4>';
            }
            else
            {
                d='<h4 style="color:blue">3)No options selected</h4>'
            }

            //question 4
            var e="";
            var opt4_1=document.getElementById('q4.1');
            var opt4_2=document.getElementById('q4.2');
            var opt4_3=document.getElementById('q4.3');
            var opt4_4=document.getElementById('q4.4');
            if(opt4_1.checked == true)
            {
                e='<h4 style="color:red">4)Incorrect</h4>';
            }
            else if(opt4_2.checked == true)
            {
                a=a+1;
                e='<h4 style="color:green">4)Correct</h4>';
            }
            else if(opt4_3.checked == true)
            {
                e='<h4 style="color:red">4)Incorrect</h4>';
            }
            else if(opt4_4.checked == true)
            {
                e='<h4 style="color:red">4)Incorrect</h4>';

            }
            else
            {
                e='<h4 style="color:blue">4)No options selected</h4>'
            }

            //question 5
            var f="";
            var opt5_1=document.getElementById('q5.1');
            var opt5_2=document.getElementById('q5.2');
            var opt5_3=document.getElementById('q5.3');
            var opt5_4=document.getElementById('q5.4');
            if(opt5_1.checked == true)
            {
                f='<h4 style="color:red">5)Incorrect</h4>';
            }
            else if(opt5_2.checked == true)
            {
                f='<h4 style="color:red">5)Incorrect</h4>';
            }
            else if(opt5_3.checked == true)
            {
                a=a+1;
                f='<h4 style="color:green">5)Correct</h4>';
            }
            else if(opt5_4.checked == true)
            {
                f='<h4 style="color:red">5)Incorrect</h4>';
            }
            else
            {
                f='<h4 style="color:blue">5)No options selected</h4>'
            }


            document.write('<b>The score obtained is: </b>'+a+'<br>');
            document.write(b + "<br>");
            document.write(c + "<br>");
            document.write(d + "<br>");
            document.write(e + "<br>");
            document.write(f + "<br>");

        }
