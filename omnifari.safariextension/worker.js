function handleContextMenu(event){
  console.info(event);

  // check if is link
  if (event.target.tagName.toLowerCase() === 'a') {
    const url = event.target.href;
    const html = event.target.innerHTML;

    safari.self.tab.setContextMenuEventUserInfo(event, {
      isURL: true,
      href: url,
      value: html,
    });

    return;
  }

  safari.self.tab.setContextMenuEventUserInfo(event, {
    isURL: false,
    href: null,
    value: null,
  });
}

document.addEventListener("contextmenu", handleContextMenu, false);
