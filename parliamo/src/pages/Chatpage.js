import Navbar from "../Navbar";
import { useState, useEffect } from "react";
import axios from "axios";



function Chatpage(){
  
  const [conversation, setConversation] = useState();
  const [content, setContent] = useState('');

  var localUser = localStorage.getItem('user');
  if (localUser) {
    localUser = JSON.parse(localUser);  
  }
  var userId = localUser.userId;
  console.log(userId)

  var chosenUser = localStorage.getItem('chosenUser');
  if (chosenUser) {
    chosenUser = JSON.parse(chosenUser);
  }


  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/login";
    } else {
      var fetchChat = fetch(`http://localhost:8080/message/${chosenUser}/${userId}`)
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

function handleSubmit(event) {
  event.preventDefault();

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const payload = JSON.stringify({
    senderId: localUser.userId,
    receiverId: chosenUser,
    content: content
});

const requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: payload,
}

fetch('http://localhost:8080/message', requestOptions)
.then(response => response.json());


};

    return(
    <div className="App">
    <h1>Chat app</h1>
     <div className="chatwindow">
      {conversationFlatAndSorted?.map((item) => {
        if (item?.senderId === chosenUser) {
          return (
            <p style={{color:"red"}} key={item?.id} className="sender">
              {item.content}
            </p>
          );
        } else
          return (
            <p style={{
                color:"blue"}} 
              key={item?.id} className="receiver">
              {item.content}
            </p>
          );
      })}
    </div>
    <div className="chatinput">
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" name="name" onChange={(e) => setContent(e.target.value)}/>
        </label>
        <button type="submit">Send message</button>
      </form>
    </div> 
  </div>
    )
};

export default Chatpage;