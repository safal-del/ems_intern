import { createContext, useState } from "react";
import { addItem, getItems, editItem ,deleteItem } from "../Components/localstorage";
import { data } from '../Userdata'
export const contextApi = createContext();

function loadInitialUsers() {

  let users = getItems('users');
  if (users.length === 0) {
    data.forEach((user) => {
      addItem('users', user);
    })
    users = getItems('users');
  }
  return users;
}

const StateContext = ({ children }) => {
  const [users, setUsers] = useState(loadInitialUsers());
  const [loginState, setLoginState] = useState(false);
  const [editIndex, setIndex] = useState(0);
  function Adduser(name, email, address, salary, password, Phonenumber) {
    let users = addItem("users", {
      name: name,
      email: email,
      address: address,
      salary: salary,
      password: password,
      Phonenumber: Phonenumber,
    });
    setUsers(users)
  }


  function Editingindex(index) {
    setIndex(index);

  }

  function EditUser(name, email, address, salary, password, phonenumber, i) {
    let users = editItem('users', i, {
      name: name,
      email: email,
      address: address,
      salary: salary,
      password: password,
      Phonenumber: phonenumber,
    })
    setUsers(users);
  }

  function Searchuser(name) {
    console.log(name);
    let searchedUser = users.filter((items) => {
      if (name === items.name) {
        return items;
      }
    })
    setUsers(searchedUser);


  }





  function changeLoginState(data) {
    setLoginState(data);

  }

  function SortByAccending() {

    let accendingSortedData = users.sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      }
    })
    console.log(accendingSortedData)
    setUsers(accendingSortedData);

  }
  function SortBySalary() {

    let sortedDataBySalary = users.sort(function (a, b) {
      if (a.salary < b.salary) {
        return -1;
      }
    })
    console.log(sortedDataBySalary);
    setUsers(sortedDataBySalary);
  }
  function SortByDecending() {
    let sortedByDecendingData = users.sort((a, b) => {
      if (a.name > b.name) {
        return -1;
      }
    })
    setUsers(sortedByDecendingData)
  }


  function DeleteUser(id) {
    // console.log(id)
    // let filtereddata = users.filter((items) => {
    //   console.log(items.id)
    //   if (items.id !== id) {
    //     return items;
    //   }
    // });
    // console.log(filtereddata);
    let users = deleteItem("users",id)
    setUsers(users);
  }


  const values = {
    users: users,
    // userData: userData,
    loginState: loginState,
    editIndex: editIndex,
    changeLoginState: changeLoginState,
    DeleteUser: DeleteUser,
    SortByAccending: SortByAccending,
    SortBySalary: SortBySalary,
    SortByDecending: SortByDecending,
    PutingFor: Adduser,
    EditUser: EditUser,
    Editingindex: Editingindex,
    Searchuser: Searchuser,

  }

  return (<contextApi.Provider value={values}>
    {children}

  </contextApi.Provider>)




}
export default StateContext;