function openPanel(){
 let createData = {
 type: "detached_panel",
 url: "test.html",
 width:250,
 height:100
 }
 let creating = browser.windows.create(createData)
}
browser.browserAction.onClicked.addListener(openPanel);
