import Navbar from "../Navbar";
import { useState, useEffect } from "react";



function Chatpage(){
      // const mockData =
  // [
  //     [
  //         {
  //             "id": 1,
  //             "content": "Hi",
  //             "senderId": 1,
  //             "receiverId": 2
  //         },
  //         {
  //             "id": 3,
  //             "content": "How are you?",
  //             "senderId": 1,
  //             "receiverId": 2
  //         }
  //     ],
  //     [
  //         {
  //             "id": 2,
  //             "content": "Hello",
  //             "senderId": 2,
  //             "receiverId": 1
  //         }
  //     ]
  // ]

  // const mockData2 = mockData.flat(1);

  // mockData2.sort(function(a, b) {
  //   return parseFloat(a.id) - parseFloat(b.id);
  // });

  // const dataFlat = data.flat(1);

  // dataFlat.sort(function(a, b) {
  //   return parseFloat(a.id) - parseFloat(b.id);
  // });

  // console.log(data);

  const [conversation, setConversation] = useState();
  const [sendMessage, setSendMessage] = useState();

  // async function postMessage()

  // const handleSubmit = (e) => {

  //   const address = 'http://localhost:8080/message';

  //   const requestOptions = JSON.stringify ({
  //     method: "POST",
  //     headers: myHeaders,
  //     body: payload,
  //     redirect: "follow",
  //   });

  // const myHeaders = new Headers();
  // myHeaders.append("Content-Type", "application/json");

  // const postMessage = fetch(address, requestOptions)
  // .then((response) => response.json())
  // .then((chatMessage) => {
  //   console.log('Success: ', chatMessage);
  // })
  // .catch((error) => 
  //  console.error('Error: ', error);
  // );
  // }

  // const address = 'http://localhost:8080/message';

  // const requestOptions = JSON.stringify {
  //   method: "POST",
  //   headers: myHeaders,
  //   body: payload,
  //   redirect: "follow",
  // }

  //   const myHeaders = new Headers();
  //   myHeaders.append("Content-Type", "application/json");

  //   const postMessage = fetch(address), {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(chatMessage)
  //   .then((response) => response.json())
  //   .then((chatMessage) => {
  //     console.log('Success: ', chatMessage);
  //   })
  //   .catch((error) => 
  //    console.error('Error: ', error);
  // });

  var localUser = localStorage.getItem('user');
  if (localUser) {
    localUser = JSON.parse(localUser);  
  }
  var userId = localUser.userId;
  console.log(userId);
  useEffect(() => {
    fetch("http://localhost:8080/message/1/2")
      .then((response) => response.json())
      .then((data) => setConversation(data));
  }, []);

  const conversationFlatAndSorted = conversation.flat(1);

  conversationFlatAndSorted.sort(function (a, b) {
    return parseFloat(a.id) - parseFloat(b.id);
  });

  // const mockData2 = mockData.flat(1);

  // mockData2.sort(function(a, b) {
  //   return parseFloat(a.id) - parseFloat(b.id);
  // });

  console.clear();
  // console.log("Conversation from api before flat ", conversation);
  console.log("Conversation from api after flat", conversationFlatAndSorted);
  // console.log("Conversation from mockdata before flat", mockData);
  // console.log("Conversation from mockdata after flat", mockData2);
  // console.log("Content from first object of mockdata2:", mockData2[0].content);
  console.log("First object from api:", conversationFlatAndSorted[0]?.content);



    return(
    <div className="App">
    <Navbar />
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
        <input type="submit" value="Skicka" />
      </form>
    </div>
  </div>
    )
}

export default Chatpage;