import React, { useState, useEffect } from 'react'; 

function ReadAllMessages(){

const [messageList , setMessageList] = useState([])
  
const token = localStorage.getItem("token");
const requestOptions = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }
}
  
useEffect(() => {
  fetch("http://localhost:8080/message/getall", requestOptions)
  .then((res) => res.json()).then((data) => {
    setMessageList(data);
  });
});
  
return (
  <div>

    {messageList.map((item) => (
      <p key={item.id} value={item.id}>
        {item.content}
      </p>
    ))}

  </div>
)

}
export default ReadAllMessages; 
