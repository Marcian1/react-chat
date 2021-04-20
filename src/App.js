import { ChatEngine } from 'react-chat-engine';
import './App.css' ;
import ChatFeed from './components/ChatFeed';

const App = () => {
    return (
        <ChatEngine
            height = "100vh"
            projectID = "3d56f4e7-90d4-4d99-848e-28d6fc0d0783"
            userName = "User1"
            userSecret = "123123"
            renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />)

}
export default App;