const emotionOption = (emotion) => {
    let emoji = "";
  
    switch (emotion) {
      case "sad":
        emoji = "😭";
        break;
      case "grin":
        emoji = "🙃";
        break;
      case "lol":
        emoji = "🤣😂";
        break;
      case "good":
        emoji = "😋😘";
        break;
    }
    return emoji;
  };

  document.querySelector('form').addEventListener("submit", event => {
    event.preventDefault();
    document.querySelector('.output').textContent = (emotionOption(document.querySelector('select').value));
    }
  )
