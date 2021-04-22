import { ChatEngine } from 'react-chat-engine';
import './App.css' ;
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

const projectID = '3d56f4e7-90d4-4d99-848e-28d6fc0d0783';
const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm />;
    return (
        <ChatEngine
<<<<<<< HEAD
            height = "100vh"
            projectID = "3d56f4e7-90d4-4d99-848e-28d6fc0d0783"
            userName = "zack"
            userSecret = "123123"
            renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />)
=======
          height="100vh"
          projectID={projectID}
          userName={localStorage.getItem('username')}
          userSecret={localStorage.getItem('password')}
          renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
          onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        />
      );
>>>>>>> origin/login

}
export default App;