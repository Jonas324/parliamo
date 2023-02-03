import Navbar from "../Navbar";
import { useState, useEffect } from "react";
import axios from "axios";



function Chatpage(){
  
  const [conversation, setConversation] = useState();
  const [sendMessage, setSendMessage] = useState();

  var localUser = localStorage.getItem('user');
  if (localUser) {
    localUser = JSON.parse(localUser);  
  }
  var userId = localUser.userId;
  console.log(userId)

 
   
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/login";
    } else {
      var fetchChat = fetch("http://localhost:8080/message/1152/1202")
        .then((response) => response.json())
        .then((data) => setConversation(data))
        .catch((error) => console.error(error));
      console.log(conversation);
      }
  }, []); 

  var conversationFlatAndSorted = conversation ? conversation.flat(1) : [];

    conversationFlatAndSorted.sort(function (a, b) {
    return parseFloat(a.id) - parseFloat(b.id);
  });


    return(
    <div className="App">
    <h1>Chat app</h1>
     <div className="chatwindow">
      {conversationFlatAndSorted?.map((item) => {
        if (item?.senderId === 1) {
          return (
            <p key={item?.id} className="sender">
              {item.content}
            </p>
          );
        } else
          return (
            <p key={item?.id} className="receiver">
              {item.content}
            </p>
          );
      })}
    </div>
    <div className="chatinput">
      <form>
        <label>
          <input type="text" name="name" />
        </label>
      </form>
    </div> 
  </div>
    )
};

export default Chatpage;