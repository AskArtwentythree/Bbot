import { getDatabase, ref, set, onValue } from "firebase/database";
import { useState } from "react"
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";

const SendMessage = () => {
  const [value, setValue] = useState("");
  const { currentUser } = UserAuth();
  const send_answer = (userId, answer) => {
    console.log(`Sending answer '${answer}' to user with ID '${userId}'`);
  }





  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (value.trim() === "") {
      alert("Enter valid message!");
      return;
    }

  }

  set(ref(db, 'users/' + userId), {
    username: userId,
    email: email,

  })
    .then(() => {
      // Data saved successfully!
    })
    .catch((error) => {
      // The write failed...
    });




  async function sendQuestion(userId, question) {
    const response = await fetch('http://localhost:8000/receive_question', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user_id: userId,
        question: question
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  }


  function sendQuestionToFirebase(question, user_id) {
    let questionData = {
      question: question,
      user_id: user_id,
      FAQ_status: 'unknown',
      processed: false
    };

    let questionLogRef = firebase.database().ref('question_log');

    questionLogRef.push(questionData)
      .then(() => {
        console.log('Data updated successfully.');
      })
      .catch((error) => {
        console.error('Data could not be saved.' + error);
      });
  }





  return (
    <div className="bg-gray-200 fixed bottom-0 w-full py-10 shadow-lg">
      <form onSubmit={handleSendMessage} className="px-2 containerWrap flex">
        <input value={value} onChange={e => setValue(e.target.value)} className="input w-full focus:outline-none bg-gray-100 rounded-r-none" type="text" />
        <button type="submit" className="w-auto bg-gray-500 text-white rounded-r-lg px-5 text-sm">Send</button>
      </form>
    </div>
  )
}


export default SendMessage;