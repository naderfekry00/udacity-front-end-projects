import { isValidURL } from "./urlChecker";

const serverURL = "http://localhost:8000/api";

if (typeof document !== "undefined") {
  const form = document.getElementById("urlForm");
  if (form) {
    form.addEventListener("submit", handleSubmit);
  }
}

function handleSubmit(event) {
  event.preventDefault();

  // Get the URL from the input field
  const formText = event.target.firstElementChild.value;

  // Check if the URL is valid
  if (isValidURL(formText)) {
    // If the URL is valid, send it to the server
    postData(serverURL, { url: formText })
      .then((response) => {
        console.log("server response", response);
        const polarity = response.score_tag;
        if (polarity === "P") {
          document.getElementById("polarity").innerHTML = "polarity: positive";
        } else if (polarity === "N") {
          document.getElementById("polarity").innerHTML = "polarity: negative";
        } else {
          document.getElementById(
            "polarity"
          ).innerHTML = `polarity: ${polarity}`;
        }

        document.getElementById(
          "subjectivity"
        ).innerHTML = `subjectivity: ${response.subjectivity}`;
        document.getElementById(
          "text"
        ).innerHTML = `text: ${response.sentence_list[0].text}`;
      })
      .catch((error) => {
        console.error(error);
      });
  } else {
    alert("Please enter a valid URL");
  }
}

// Function to send data to the server
async function postData(url = "", data = {}) {
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  try {
    const newData = await response.json();
    return newData;
  } catch (error) {
    console.log("error", error);
  }
}

// Export the handleSubmit function
export { handleSubmit };
