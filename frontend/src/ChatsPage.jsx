import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const ChatsProps = useMultiChatLogic(
        '3dc8a8a4-929b-4a4c-bac8-ec02b675a2cc', 
        props.user.username, props.user.secret
    )
    return (
        <div style={{ height: '100vh' }}>
            <MultiChatSocket {...ChatsProps} />
            <MultiChatWindow {...ChatsProps} style={{ height: '100%' }} />
        </div>
    )
};
export default ChatsPage;