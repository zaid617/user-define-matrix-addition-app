function start() {
    
    // changing the display of form2 from none to block
    let display = document.querySelector('#form2')

    // target the values of rows and columns
   let input_1 = document.querySelector('#input_1').value;
   let input_2 = document.querySelector('#input_2').value;


    // changing the data type from string to number
   input_1 = Number(input_1);    
   input_2 = Number(input_2);    

    
    // validations for matrices
    if (isNaN(input_1) && isNaN(input_2)) {
        alert("Please Enter Valid Rows And Columns")
       
        
    }
    else if(input_1==input_2)
    {
    // input boxes for 1st matrix
    for (let i = 0; i < input_1; i++) {
        for (let j = 0; j < input_2; j++) {
            
            document.querySelector('#mat_1').innerHTML += (`<input type="number" placeholder="0" required id="mat1_${[i]}${[j]}" class="vals">`)
        }
        document.querySelector('#mat_1').innerHTML += ("<br>")
        
    }


     // input boxes for 2nd matrix
    for (i = 0; i < input_1; i++) {
        for ( j = 0; j < input_2; j++) {
            
            document.querySelector('#mat_2').innerHTML += (`<input type="number" placeholder="0" required id="mat2_${[i]}${[j]}" class="vals">`)
        }
        document.querySelector('#mat_2').innerHTML += ("<br>")
        
    }
    
  
    // console the inputs values
    console.log("No.of rows are : " ,input_1);   
    console.log("No.of columns are : " , input_2); 
    
    display.style.display ='block';
    
    
}

else{
    return;
}
}

    // function for calculation
function calc() {

    // changing the display of result from none to block
    let display = document.querySelector('#result')
    display.style.display='block'

     // target the values of rows and columns
   let input_1 = document.querySelector('#input_1').value;
   let input_2 = document.querySelector('#input_2').value;


    // changing the data type from string to number
   input_1 = Number(input_1);    
   input_2 = Number(input_2);   

//    initiallizing arrays
    let mats_1=[[],[],[],[],[]];
    let mats_2=[[],[],[],[],[]];
    let result=[[],[],[],[],[]];

    // getting values from 1st matrix 
    for (let i = 0; i < input_1; i++) {
        for (let j = 0; j < input_2; j++) {
            mats_1[i][j] = Number(document.getElementById(`mat1_${[i]}${[j]}`).value);
        }
        
    }
    // getting values from 2nd matrix 
    for ( i = 0; i < input_1; i++) {
        for ( j = 0; j < input_2; j++) {
            mats_2[i][j] = Number(document.getElementById(`mat2_${[i]}${[j]}`).value);
        }
        
    }
    // addition of martix 1 and 2
    for ( i = 0; i < input_1; i++) {
        for ( j = 0; j < input_2; j++) {
            result[i][j] = mats_1[i][j] + mats_2[i][j];
        }
        
    }

    for (let i = 0; i < input_1; i++) {
        
        for (let j = 0; j < input_2; j++) {
            document.querySelector('#result').innerHTML += (`<strong id="div_${i}${j}" class="value" style="text-align:center;"></strong>`)
            
        }
        document.querySelector('#result').innerHTML += ("<br>")
    }
    
    for ( i = 0; i < input_1; i++) {
        for ( j = 0; j < input_2; j++) {
             document.getElementById(`div_${i}${j}`).innerText += result[i][j];
        }
        
    }

    console.log(mats_1);
    console.log(mats_2);
    console.log(result);
    return;
}