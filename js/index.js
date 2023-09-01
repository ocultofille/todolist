let task = document.querySelector('.ip');
    let acess= document.querySelector('.main');
    let store=[];
    
    
   //store.push(task.value+'2');
      //store.push(6);
      
      
        function add() {
          store.push(task.value);
          console.log(store);
          acess.innerHTML='';
        	printstore();
        	
        	task.value='';
        }

        function printstore(){
          for(let i=0 ; i<store.length; i++)
          { 
        		acess.innerHTML +="<div class='li' style='background-color:yellow; margin-bottom:10px' > "+store[i]+"<button  class='del' style='float:right'  id='"+i+"'  > X</button> </div>";
        		
          }
          console.log(acess)
        }
        document.querySelector('#div2').addEventListener('click',function(e){
          console.log();

          index=e.target.id;
          acess.innerHTML='';
          store.splice(index,1);
          printstore()
        })
        // document.querySelector('.del').addEventListener('click',function(){
        //   document.querySelector('.li').innerHTML='';
        // })