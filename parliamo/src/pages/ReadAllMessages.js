import React from 'react'; 
import { useState, useEffect } from 'react';



function ReadAllMessages(){

const [messageList , setMessageList] = useState([])
  
  
useEffect(() => {
  const fetchMessages = fetch("http://localhost:8080/message/getall")

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
