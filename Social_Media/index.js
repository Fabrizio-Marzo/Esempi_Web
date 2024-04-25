const menuitems = document.querySelectorAll('.menu-item');

const messagesNotifications = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');

const message = document.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');


const changeActiveItem = () => {
    menuitems.forEach(item => {
        item.classList.remove('active');
    })
}

function changeDisplaybyItem(itemclass,displayAttribute){
    document.querySelector(itemclass).style.display = displayAttribute;
}


menuitems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if (item.id != 'notifications'){
            changeDisplaybyItem('.notifications-popup','none');
        } else {
            changeDisplaybyItem('.notifications-popup','block');
            changeDisplaybyItem('#notifications .notification-count','none');
        }
    })
})


//                      --------MESSAGES-----

// Highlight messages card when messages menu item is clicked
messagesNotifications.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    changeDisplaybyItem('#messages-notifications .notification-count','none');
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000)
})


// Searchs Chats
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    console.log(val);
    message.forEach(chat => {
        let name = chat.querySelector('h5').textContent.toLocaleLowerCase();
        if(name.indexOf(val) != -1){
            chat.style.display = 'flex';
        } else {
            chat.style.display = 'none';
        }
    })
}

// Search bar
messageSearch.addEventListener('keyup',searchMessage);
