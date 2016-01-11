# react-realtime-comment-box
Realtime Comment Box with React and Laravel

How to run:
1. download zip
2. extract
3. create database (default is: "learn_react" with username: root, and no password; but you can change in .env file)
4. run "php artisan migrate --seed" from inside the "react" directory
5. run "php artisan serve" (still from inside the "react" directory)
6. open browser, and head to http://localhost:8000/test.html

The React part is inside the public folder
 1. test.html is the HTML file for the application
 2. application.js is the React application source code

The Laravel Part
 1. There are two routing at the very bottom of the app/Http/routes.php file. One is for retrieving comments from database (the "get" one), and the other is for saving new comment to the database (the "post" one)
 2. The CommentController is handling the get and post for retrieving (index method) and saving (store method)

