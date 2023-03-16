import { useState, useEffect } from "react";
import Logout from "../Components/Logout";



function Chatpage(){
  
  const [conversation, setConversation] = useState();
  const [content, setContent] = useState('');
  const [joke, setJoke] = useState('');

  var localUser = localStorage.getItem('user');
  if (localUser) {
    localUser = JSON.parse(localUser);  
  }
  var userId = localUser.userId;

  var chosenUser = localStorage.getItem('chosenUser');
  if (chosenUser) {
    chosenUser = JSON.parse(chosenUser);
  }

  const fetchJoke = async () => {
    try {
      const response = await fetch(`https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Pun,Spooky,Christmas?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single`);
      const data = await response.json();
      setJoke(data.joke);
    } catch (error) {
      console.error(error);
    }
  };


  useEffect(() => {
      fetchJoke();
    }, [])

  const getJoke = (event) => {
    event.preventDefault();
    fetchJoke();
  }

  const token = localStorage.getItem("token");
  const requestOptionsSenderReceiver = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }


  useEffect(() => {
      const fetchData = () => {
        fetch(`http://localhost:8080/message/${chosenUser}/${userId}`, requestOptionsSenderReceiver)
          .then((response) => response.json())
          .then((data) => setConversation(data))
          .catch((error) => console.error(error));
      };
  
      const intervalId = setInterval(fetchData, 2000);
  
      return () => {
        clearInterval(intervalId);
      };
    
  });

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
    headers: {'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`},
    body: payload,
  }

  fetch('http://localhost:8080/message', requestOptions)
  .then(response => response.json());

  event.target.reset();

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
      <button onClick={getJoke}>
        Stale conversation? Open with a joke:
      </button>
      <p style={{color: "green"}}>Copy and paste the following joke if you like it</p>
      <p>
        {joke}
      </p>
    </div>
    <Logout></Logout> 
  </div>
    )
};

export default Chatpage;