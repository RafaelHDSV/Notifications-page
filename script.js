let unread = document.querySelectorAll('.unread')
let spanNotifications = document.getElementById('span_notifications')
let markAll = document.getElementById('mark_all')
let notificationsUnread = 3

for (let i = 0; i < unread.length; i++) {
    unread[i].addEventListener('click', () => {
        unread[i].classList.remove('unread')
        notificationsUnread -= 1
        spanNotifications.innerHTML = notificationsUnread
    })
}

markAll.addEventListener('click', () => {
    notificationsUnread = 0
    spanNotifications.innerHTML = notificationsUnread

    for (let i = 0; i < unread.length; i++) {
        unread[i].classList.remove('unread')
    }
})