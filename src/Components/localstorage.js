
export function addItem(key, data) {
  let initialData = localStorage.getItem(key);
  initialData = initialData ? JSON.parse(initialData) : [];
  initialData.push(data);
  localStorage.setItem(key, JSON.stringify(initialData));
  return initialData;
}
export function editItem(key, index, data) {
  let initialData = localStorage.getItem(key);
  let formattedData = initialData ? JSON.parse(initialData) : [];
  formattedData.splice(index, 1, data);
  localStorage.setItem(key, JSON.stringify(formattedData));
  return formattedData;
}
export function deleteItem (key, index){
  let initialData = localStorage.getItem(key);
  let formattedData = initialData ? JSON.parse(initialData) : [];
  formattedData.splice(index, 1);
  localStorage.setItem(key, JSON.stringify(formattedData));
  return formattedData;
   
}
export function getItems(key) {
  let initialData = localStorage.getItem(key);
  initialData = initialData ? JSON.parse(initialData) : [];
  return initialData;
}
