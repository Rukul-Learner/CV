const chatToggle = document.getElementById("chatToggle");
const chatWindow = document.getElementById("chatWindow");
const chatInput = document.getElementById("chatInput");
const chatMessages = document.getElementById("chatMessages");
const sendBtn = document.getElementById("sendBtn");

chatToggle.addEventListener("click", () => {
  chatWindow.classList.toggle("hidden");
});

sendBtn.addEventListener("click", sendMessage);
chatInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendMessage();
});

function sendMessage() {
  const message = chatInput.value.trim();
  if (!message) return;

  appendMessage("You", message);
  chatInput.value = "";

  setTimeout(() => {
    appendMessage("Bot", getResponse(message));
  }, 500);
}

function appendMessage(sender, text) {
  const div = document.createElement("div");
  div.innerHTML = `<strong>${sender}:</strong> ${text}`;
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getResponse(msg) {
  msg = msg.toLowerCase();

  if (msg.includes("experience")) {
    return "I have experience in strategy consulting, digital transformation, and managing cross-functional initiatives.";
  }
  if (msg.includes("skills")) {
    return "My skills include business strategy, digital transformation, analytics, stakeholder management, and consulting.";
  }

  if (msg.includes("project")) {
    return "I have worked on product- and strategy-focused projects like ROI simulators for platform evaluation and large-scale digital transformation programs across multiple brands. You can scroll to the Projects section to see detailed case-style summaries.";
  }

  if (msg.includes("product manager") || msg.includes("pm")) {
    return "I aspire to be a Product Manager because I enjoy solving user problems, defining success metrics, balancing trade-offs, and working cross-functionally to ship impactful solutions.";
  }

  if (msg.includes("resume")) {
    return "You can download my resume using the 'Download Resume' button on the homepage.";
  }
  if (msg.includes("contact")) {
    return "You can contact me via email or LinkedIn mentioned on this website.";
  }

  return "You can ask me about my experience, skills, resume, or contact details 🙂";
}
