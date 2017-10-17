
function flyUNC() {
  chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var tabUrl = tabs[0].url;

    var ieee = "ieeexplore.ieee.org";
    var springer = "link.springer.com";
    var acm = "dl.acm.org";
    var scienced = "www.sciencedirect.com";
    var wiley = "onlinelibrary.wiley.com";
    var myNewUrl;
    if (tabUrl.includes(ieee))
      myNewUrl = tabUrl.replace(ieee, "ieeexplore.ieee.org.libproxy.lib.unc.edu");
    else if (tabUrl.includes(springer))
      myNewUrl = tabUrl.replace(springer, "link-springer-com.libproxy.lib.unc.edu");
    else if (tabUrl.includes(acm))
      myNewUrl = tabUrl.replace(acm, "dl-acm-org.libproxy.lib.unc.edu");
    else if (tabUrl.includes(scienced))
      myNewUrl = tabUrl.replace(scienced, "sciencedirect.com.libproxy.lib.unc.edu");
    else if (tabUrl.includes(wiley))
      myNewUrl = tabUrl.replace(wiley, "onlinelibrary.wiley.com.libproxy.lib.unc.edu");

    //Update the url here.
    chrome.tabs.update(tabs[0].id, {url: myNewUrl});
  });
}

chrome.browserAction.onClicked.addListener(flyUNC);
