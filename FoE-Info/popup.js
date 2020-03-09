// [AIV_SHORT]  Build version: 2.0.7 - Monday, March 9th, 2020, 12:06:21 AM  
 document.querySelector('#go-to-options').addEventListener("click", function() {
    console.log('options');
    if (chrome.runtime.openOptionsPage) {
      chrome.runtime.openOptionsPage();
    } else {
      window.open(chrome.runtime.getURL('options.html'));
    }
  }); 