# Infinite-scroll-with-random-user-api
This app is a authenticated app. It can accept fake login with details, username: foo, password: bar. I used a static list of users like this (https://randomuser.me/api/?results=500) or use this (https://randomuser.me/documentation#howto) free random user api if you fancy that. Initially only load a partial list and when user scrolls to end of page. App shows loading feedback and loads more contacts after a delay of 1 sec.

It uses react-infinite-scroll-component which is open source.

After creating React app using npm create-react-app . you can replace these files in src folder of the app.
