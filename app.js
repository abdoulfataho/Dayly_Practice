let Dishes = 
[["Ramen","Sushi","Pho",],
["Rasta Pasta","Oxtel","Stew Chicken"],
["Pizza","Pasta","Currychicken"],
];
let Pfood =[];
let Sfood =[];
let ArrOther =[];


function OrderedArray(dishes){
     for(let i = 0; i< Dishes.length; i++){
          for(let j =0 ; j <Dishes[i].length; j++){
           if (Dishes[i][j][0]==="P"){Pfood.push(Dishes[i][j])
               
          
          }

           
           else if (Dishes[i][j][0]==="S"){Sfood.push(Dishes[i][j])
          }
           else {ArrOther.push(Dishes[i][j])
           }
          }
         
     }
}


console.log(OrderedArray(Dishes))  
console.log(Pfood)
console.log(Sfood)
console.log(ArrOther)

// console.log(Pfood)
// console.log(ArrOther)
// console.log(Sfood)
let obj1 = {}
let obj2 = {}
let obj3 = {}
obj1.p =  Pfood
obj2.s =  Sfood
 obj3.other = ArrOther
 console.log(obj1)
 console.log(obj2)
 console.log(obj3)



 let FinalArray = []
 FinalArray.push(obj1,obj2,obj3)
 console.log(FinalArray)

