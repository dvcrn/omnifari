window.omnifari = {
  tab: null,
};

function validateHandler(event) {
  if (event.command === 'sendLinkToOmnifocus') {
    if (event.userInfo.isURL) {
      event.target.disabled = false;
    } else {
      event.target.disabled = true;
    }
  }

  if (event.command === 'sendPageToOmnifocus') {
    window.omnifari.tab = event.target.browserWindow.activeTab;
  }
}

function commandHandler(event) {
  if (event.target.identifier === 'omnifariButton') {
    const activeTab = event.target.browserWindow.activeTab;
    const url = activeTab.url;
    const title = activeTab.title;

    activeTab.url = `omnifocus:///add?name=${encodeURIComponent(title)}&note=${encodeURIComponent(url)}`;
  }

  if (event.target.identifier === 'omnifariContext') {
    const url = event.userInfo.href;
    const title = event.userInfo.value;

    window.omnifari.tab.url = `omnifocus:///add?name=${encodeURIComponent(title)}&note=${encodeURIComponent(url)}`;
  }
}

safari.application.addEventListener("command", commandHandler, false);
safari.application.addEventListener("validate", validateHandler, false);

