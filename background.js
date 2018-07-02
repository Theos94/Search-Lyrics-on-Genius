chrome.tabs.onActivated.addListener(() => {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { urlContains: "www.youtube.com/watch" }
          })
        ],
        actions: [new chrome.declarativeContent.ShowPageAction()]
      }
    ]);
  });
});

chrome.omnibox.onInputEntered.addListener(text => {
  const url = `https://genius.com/search?q=${text}`;

  chrome.tabs.update({ url: url });
});
