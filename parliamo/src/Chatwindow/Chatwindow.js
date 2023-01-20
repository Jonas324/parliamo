import './Chatwindow.css';

const Chatwindow  = () => {

    const mockData =
[
    [
        {
            "id": "1",
            "content": "Hi",
            "senderId": "1",
            "receiverId": "2"
        },
        {
            "id": "3",
            "content": "How are you?",
            "senderId": "1",
            "receiverId": "2"
        }
    ],
    [
        {
            "id": "2",
            "content": "Hello",
            "senderId": "2",
            "receiverId": "1"
        }
    ]
]

const mockData2 = mockData.flat;

    return (
        <div>
            <div className="window">
                {mockData2}
            </div>
        </div>
    );
}
 
export default Chatwindow ;