import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Navbar';



function App() {

  const mockData =
  [
      [
          {
              "id": 1,
              "content": "Hi",
              "senderId": 1,
              "receiverId": 2
          },
          {
              "id": 3,
              "content": "How are you?",
              "senderId": 1,
              "receiverId": 2
          }
      ],
      [
          {
              "id": 2,
              "content": "Hello",
              "senderId": 2,
              "receiverId": 1
          }
      ]
  ]
  
  // const mockData2 = mockData.flat(1);
  
  // mockData2.sort(function(a, b) {
  //   return parseFloat(a.id) - parseFloat(b.id);
  // });

  // const dataFlat = data.flat(1);
  
  // dataFlat.sort(function(a, b) {
  //   return parseFloat(a.id) - parseFloat(b.id);
  // });

  // console.log(data);

  const [conversation, setConversation] = useState([]);
  
  useEffect(() => {
   fetch("http://localhost:8080/message/1/2")
   .then(response => response.json())
   .then(data => setConversation(data))}, [])

  

    const conversation2 = conversation.flat(1);
  
    conversation2.sort(function(a, b) {
      return parseFloat(a.id) - parseFloat(b.id);
    });

    const mockData2 = mockData.flat(1);
  
    mockData2.sort(function(a, b) {
      return parseFloat(a.id) - parseFloat(b.id);
    });

  
    console.clear();
    // console.log("Conversation from api before flat ", conversation);
    console.log("Conversation from api after flat",  conversation2);
    // console.log("Conversation from mockdata before flat", mockData);
    console.log("Conversation from mockdata after flat", mockData2);
    console.log("Content from first object of mockdata2:", mockData2[0].content);
    console.log("First object from api:", conversation2[0]?.content);
    
  
  return (
    <div className="App">
    <Navbar />
      <h1>Chat app</h1>
        {/* {conversation.map((item) => (
          <p key={item.posted}>{item.content}</p>
        ))} */}
        {conversation.map((item) => {
                if (item?.senderId === 1){
                    return (
                        <p key={item?.id} className='sender'>{item.content}</p>
                    )
                } else
                return <p key={item?.id} className='receiver'>{item.content}</p>
            })}
    </div>
  );
}

export default App;
