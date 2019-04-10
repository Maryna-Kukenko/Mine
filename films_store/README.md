# React_Express_MongoDB films_store 
> Create app with React, Express and using MongoDB for saving data. Run your client and server with a single command


### How to run the App

```
# Install dependencies for server
npm install

# Install dependencies for client
cd client
npm install

# Run the client & server with concurrently
npm run dev

# Run the Express server only
npm run server

# Run the React client only
npm run client

# Server runs on http://localhost:5000/api/items and client on http://localhost:3000
```

### Task

Необходимо реализовать веб-приложение для хранения информации о фильмах. Вместе с реализацией требуется предоставить документ объясняющий архитектуру приложения и содержащий инструкцию по запуску приложения. 

Информация о фильме: 1. Уникальный идентификатор 2. Название фильма 3. Год выпуска 4. Формат (VHS, DVD, Blu-Ray) 5. Список актеров (“Имя и фамилия актера”) 

Функции, которые должна поддерживать система: 1. Добавить фильм 2. Удалить фильм 3. Показать информацию о фильме 4. Показать список фильмов отсортированных по названию в алфавитном порядке 5. Найти фильм по названию. 6. Найти фильм по имени актера. 7. Импорт фильмов с текстового файла (пример файла прилагается “sample_movies.txt”?). Файл должен загружаться через веб-интерфейс. 
 В первую очередь, важно чтобы была реализована вся функциональность с точки зрения пользователя.  
 
Задание необходимо реализовать, как одностраничное приложение и REST API к нему. Одностраничное приложение необходимо написать используя ReactJS. Сервер, который будет предоставлять REST API, должен быть написан на nodejs, данные должны сохранятся между перезапусками сервера, для хранения данных можно использовать любой механизм, это может быть MongoDB, MySQL или просто файлы. При желании можно использовать ES6, Webpack, Flux/Redux, это даже будет плюсом. 
 
