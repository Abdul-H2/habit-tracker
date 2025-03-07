// Habit Tracker Logic
document.getElementById('habit-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const habitInput = document.getElementById('habit-input');
    const habitText = habitInput.value;
    
    if (habitText.trim()) {
      addHabit(habitText);
      habitInput.value = '';
    }
  });
  
  function addHabit(habit) {
    const habitList = document.getElementById('habit-list');
    console.log('Habit List:', habitList); // Debug: Check if habitList is found
  
    const habitItem = document.createElement('li');
    console.log('Habit Item Created:', habitItem); // Debug: Check if habitItem is created
  
    habitItem.innerHTML = `
      ${habit}
      <button onclick="editHabit(this)">Edit</button>
      <button onclick="deleteHabit(this)">Delete</button>
    `;
    console.log('Habit Item InnerHTML:', habitItem.innerHTML); // Debug: Check the innerHTML
  
    habitList.appendChild(habitItem);
    console.log('Habit Item Appended to List'); // Debug: Check if item is appended
  }
  
  function editHabit(button) {
    const habitItem = button.parentNode;
    const habitText = prompt("Edit your habit:", habitItem.firstChild.textContent);
    
    if (habitText) {
      habitItem.firstChild.textContent = habitText;
    }
  }
  
  function deleteHabit(button) {
    const habitItem = button.parentNode;
    habitItem.remove();
  }
  
  // Dialogflow Configuration
const projectId = 'habittrackerbot-ag9q'; // Replace with your Dialogflow project ID
const sessionId = '103558137766188666124'; // Use a unique session ID for each user
const languageCode = 'en-US'; // Language code

// Service Account Key (from the JSON file you downloaded)
const serviceAccount = {
  "type": "service_account",
  "project_id": "erudite-mote-448300-i3",
  "private_key_id": "745f2a6019297321ecdaa7610c815632c0eb2244",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDA+27N6qBFS9VK\nce5YRyNOtSuFVmrlwk2cC9FwOZk1b62wSOQrc93CLRbreagtJOhx116EY02lg32n\niQldkl4c5B4dWDSn/d1ewXdoKXfmOzruaTRIUXqydQiNPgneYeGAuVmyNmvboKcz\nPdxZIfoAe6Shhd2hI2EfzcEWFFJ62fauzubazb4G0gFe6Wl+xYJg9h8kFAEsS4G0\n0vyYJ67WFIFT/HuIMC67USrGUoQF2Ld1Ze4o9k9xmEoPaqS420P6EYG3fDCtiBaj\ncnZimUKmLL5JCabztHedgc+yAiKLabCwttpGYA1jpaPnVxTohk4/N3uQRFfb5+4D\nu7CK8pf7AgMBAAECggEAF2G/dKKTZaIBB0KTms2PuRcZXU/xpsHqjlgeOac46XEN\nDdlfD+a7fS3iY4h7eHDK2xQ5pvezLjUm0dg4MsarsXtwLKUFyD7phfQR6CRyGwqd\nIsrLY2G/6IRmk1prbq7UWDjc5ctTOSqXZ418t632sP1KHqnuBvqW53gSB39R2QF+\nxbVKcl55iHyBHSLHt834Qw/FXEyGM8By9PMoGDHxmct2hvg4C2lkyWVJs8u9X945\n8iOW9nP7SXLQYEoR4viRKD6MsxZwkiun/n479PfWJdutR1WAlltpxECiRdjGh1Nl\ntS/iaeQL8sWXsFPGWNnTLncGl1kISAAzIjajtRBjMQKBgQDpWWDBbUZjG+8U9jIZ\nFPi8BS0PMUkEk+9QS51PPwp8Y9enaRBEIraTC/NiQo5/6P9bhOORld0tskNm85xN\nfF+DnRHT5ljBcWhX4FvEtX+/y1H4bCws8yh+xKBqEKYDe2lyjpuW8VsjMVRQ6bn9\nDNdgPGAI3cC4eF0v2a6HbiY28QKBgQDTtvQdFrWjdVKlr8KFq7EkqK0c6BOv9+n6\nExwTy3ei3/KXtydgPW9p+mLLG3jLj4XQ1EQacw26MgmYxsZ8FcPRvyFGToOyiCd6\nNyke5eWNkX+kiucN6BvnD8WbAP9jOvJcxkCcDA/VS37hWRhfXKcszgrSAJAMAOvL\n3nTYpsw1qwKBgQCjESiCQ0Da5Zxvw5RC3trrWZqhcUmbf13PeOfXhzBmuMbtYIhT\ndQatP763PdejH0nDxNva0yWbV2WuvjLOG0oMCWl58RC5Le1C67B1iHhbqVQBDGba\nipoT7IhFVpkM+eM4gNvN4aBUuZY4bPziD2U7BTX/PCf/QW2tkKtcTOc7oQKBgQCP\nAzEXTTXZevEfNwDhpr78kmyN8D8MSR1mbe4zeOgRv9FxpqkUm6tdHWQK6z3H0+WC\n0UBH1ZxaQF63Mt71BwbF8qQZiAPyX4K7TfObCZTs8nIUxjeZ70aZ6M+FC0F42GLL\nRKh0QLmZTWwh8TtDf6T14SDyBqtHUH/3sQehKdscDQKBgQCEy4DQixYnSp2N0TxJ\nBBs/1RIuk+SnmhBZHoE4LCM3SsErDjKJygu2Zk5Z28SIBZ/FogPM4ctKOCSStOA1\nIUjyRBmgv0KuCFVRQ/vnFj8JG8x9LPkYFjwkCuodyGDn0iIWj0QsDzpRVziOScH1\nGasyl3v8ZzJwS8jwTJeDkaRNKg==\n-----END PRIVATE KEY-----\n",
  "client_email": "dialogflowserviceaccount@erudite-mote-448300-i3.iam.gserviceaccount.com",
  "client_id": "103558137766188666124",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/dialogflowserviceaccount%40erudite-mote-448300-i3.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
};

// Initialize Dialogflow
import { SessionsClient } from 'dialogflow';
const sessionClient = new SessionsClient({
  credentials: serviceAccount
});

// Function to send a message to Dialogflow
async function sendMessageToDialogflow(message) {
  const sessionPath = sessionClient.sessionPath(projectId, sessionId);
  console.log('Session Path:', sessionPath); // Debug: Check session path

  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: message,
        languageCode: languageCode,
      },
    },
  };

  console.log('Request:', request); // Debug: Check the request object

  try {
    const responses = await sessionClient.detectIntent(request);
    console.log('Responses:', responses); // Debug: Check the API response

    const result = responses[0].queryResult;
    console.log('Query Result:', result); // Debug: Check the query result

    return result.fulfillmentText;
  } catch (error) {
    console.error('Error in sendMessageToDialogflow:', error); // Debug: Log any errors
    throw error;
  }
}

// Chatbot Logic
document.getElementById('chatbot-send').addEventListener('click', async function() {
  const input = document.getElementById('chatbot-input').value;
  console.log('User input:', input); // Debug: Check if input is captured

  if (input.trim()) {
    try {
      console.log('Sending request to Dialogflow...'); // Debug: Check if the request is being sent
      const response = await sendMessageToDialogflow(input);
      console.log('Dialogflow response:', response); // Debug: Check the response

      const messagesDiv = document.getElementById('chatbot-messages');
      messagesDiv.innerHTML += `<div><strong>You:</strong> ${input}</div>`;
      messagesDiv.innerHTML += `<div><strong>Bot:</strong> ${response}</div>`;
      document.getElementById('chatbot-input').value = '';
    } catch (error) {
      console.error('Error in chatbot logic:', error); // Debug: Log any errors
      alert('An error occurred. Please check the console for details.');
    }
  } else {
    alert('Please enter a message.'); // Debug: Notify if input is empty
  }
});
