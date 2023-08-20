import {MultiChatSocket,MultiChatWindow,useMultiChatLogic} from 'react-chat-engine-advanced'


const projectId = 'enter your project id';
const username = 'itsivag';
const secret = username;

const ChatsPage = () => {
    const chatProps = useMultiChatLogic(projectId, username, secret);
    return( 
    <div style={{height : '100vh'}}>
        <MultiChatSocket{...chatProps}/>
        <MultiChatWindow{...chatProps} style={{height : '100%'}}/>
    </div>
    )
}

export default ChatsPage