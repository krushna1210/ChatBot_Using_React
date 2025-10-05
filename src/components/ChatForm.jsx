import { useRef } from "react";

const ChatForm = ({chatHistory, setChatHistory,generateBotResponse}) => {
  const inputRef =useRef();


  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if(!userMessage) return ;
    inputRef.current.value="";

    //update chat history with user's message
    setChatHistory((history) => [...history,{role: "user", text: userMessage}]);

    //delay 600ms before showing thinking and genrating response
    setTimeout(() =>{
      setChatHistory((history) => [...history, {role: "model", text: "Thinking..."}]);

      //call the function to genrate the bot's reponse
      generateBotResponse([...chatHistory, {role: "user", text: userMessage}]);
    },600);

  }; 

  return (
    <form action="" className="chat-form" onSubmit={handleFormSubmit}>
      <input ref={inputRef}
        type="text"
        placeholder="Message..."
        className="message-input"
        required
      />
      <button className="material-symbols-outlined">
        <span class="material-symbols-outlined">keyboard_arrow_up</span>
      </button>
    </form>
  );
};

export default ChatForm;