const btn=document.querySelector('.img_btn');

btn.addEventListener('click',()=>{
    const input=document.querySelector('#img_link');
    
    if(input){
        const img_link=input.value;

        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            const activeTab = tabs[0];
            chrome.tabs.sendMessage(activeTab.id, { message: img_link });
        });
    }
})