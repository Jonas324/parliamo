import React from 'react'; 
import { useState, useEffect } from 'react';



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
  const fetchMessages = fetch("http://localhost:8080/message/getall", requestOptions)
  fetchMessages.then((res) => res.json()).then((data) => {
    setMessageList(data);
  });
}, []);
  
return (
  <div>

    {messageList.map((item, index) => (
      <p key={index} value={item.id}>
        {item.content}
      </p>
    ))}

  </div>
)

}
export default ReadAllMessages; 
