const getTitle = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    chrome.tabs.executeScript(
      tabs[0].id,
      {
        code: 'document.querySelector(".title").innerText'
      },
      results => {
        const url = `https://genius.com/search?q=${results}`;

        window.open(url, "_blank");
      }
    );
  });
};

window.addEventListener("load", getTitle);
