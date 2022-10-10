import { createContext, useState } from "react";
import { data } from "../Userdata";

export const contextApi = createContext();

const StateContext = ({children}) =>{
    
  const[userData, setUsers] = useState(data);  

  const [datas, setDatas] = useState(userData);

  const [loginState, setLoginState] = useState(false);

  const [editIndex, setIndex]= useState(0);

  console.log(datas);
  console.log(userData);


  
  function Adduser(name,email,address,salary,password,Phonenumber){
    console.log(name);
      
      let max =  userData.map((items)=>{
        return items.id
       })
       let maxnumber = max.reduce((a,b)=>{return Math.max(a,b)});

       setUsers((prevstate)=>{
        return [...prevstate,
            {
                id:maxnumber +1,
                name:name,
                email:email,
                address:address,
                salary:salary,
                password:password,
                Phonenumber:Phonenumber,
               

            
            }
        ]
    })
    setDatas((prevstate)=>{
        return [...prevstate,
            {
                id:maxnumber +1,
                name:name,
                email:email,
                address:address,
                salary:salary,
                password:password,
                Phonenumber:Phonenumber,
               

            
            }
        ]
    })
    
  }


  function Editingindex(index){
    setIndex(index);

  }

  function EditUser(name,email,address,salary,password,phonenumber,i){  
    console.log();
     datas.at(i).name = name;
     datas.at(i).email=email;
     datas.at(i).address = address;
     datas.at(i).salary = salary;
     datas.at(i).password= password;
     datas.at(i).Phonenumber = phonenumber;

     setDatas(datas);
  }

  function Searchuser(name){
    console.log(name);  
   let searchedUser =  datas.filter((items)=>{
     if(name === items.name){
        return items;
     }
   })
    setDatas(searchedUser);
     

  }
    




function changeLoginState(data){
    setLoginState(data);
 
}

function SortByAccending(){
  
    let accendingSortedData =  datas.sort(function(a,b){
        if(a.name < b.name){
            return -1;
          }
     })
     console.log(accendingSortedData)
     setDatas(accendingSortedData);
     
}
function SortBySalary(){
  
    let sortedDataBySalary =  datas.sort(function(a,b){
        if(a.salary < b.salary){
            return -1;
          }
     })
     console.log(sortedDataBySalary);
     setDatas(sortedDataBySalary);    
}
function  SortByDecending(){
     let sortedByDecendingData = datas.sort((a,b)=>{
        if(a.name > b.name){
            return -1;
        }
     })
     setDatas(sortedByDecendingData)
}


function DeleteUser(id){
    console.log(id)
    let filtereddata = datas.filter((items)=> {
        console.log(items.id)
        if(items.id !== id){
           return items;
        }
    });
    console.log(filtereddata);
    setDatas(filtereddata);
}


    const values ={
         datas:datas,
         userData:userData,
         loginState:loginState,
         editIndex:editIndex,
        changeLoginState:changeLoginState,
        DeleteUser:DeleteUser,
        SortByAccending:SortByAccending,
        SortBySalary:SortBySalary,
        SortByDecending:SortByDecending,
        PutingFor:Adduser,
        EditUser:EditUser,
        Editingindex:Editingindex,
        Searchuser:Searchuser,

    }

    return(<contextApi.Provider value={values}>
        {children}

    </contextApi.Provider>)




}
export default StateContext;