# Social media
Social media full stack MEVN

## Demo

```
https://social-media-camilo.herokuapp.com/
```

## Screenshots

### Desktop
![Captura de pantalla 2022-09-07 104000](https://user-images.githubusercontent.com/102927455/188921044-108f96ea-5fee-401f-a57c-818889edb982.jpg)
### Mobile
<img src="https://user-images.githubusercontent.com/102927455/188921470-53d5c0bb-8214-4365-bc49-34152feef55e.jpeg" style="width: 400px" />

## Technologies used

1. Node
2. Express
3. MongoDB
4. Vue
5. jsonwebtoken
8. Cloudinary
9. Momentjs

## Customize configuration

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev:api
```

### Compile and Minify for Production

```sh
npm run build
```

### Start project 

```sh
npm run start
```

## Environment variables

To be able to run de application you have to set up the following environment variables

* MONGO_DB_URI
* SECRET
* CLOUDINARY_CLOUD_NAME
* CLOUDINARY_API_KEY
* CLOUDINARY_API_SECRET

## Usage

* You can POST to /api/users with form data email, name and password, to register a new user.
* You can make a GET request to /api/users to get a list of users.
* You can make a GET request to /api/users/:id to get a user info.
* You can make a PUT request to /api/users/:id to update a user info.
* You can POST to /api/login with form data username and password, to login and get a Bearer Token.
* You can POST to /api/posts with form data content, userId, img, to create a post.
* You can make a GET request to /api/posts to get a list of posts.
* You can make a PUT request to /api/posts/:id/likes with form data userId, type ('+' or '-') to update a post likes.
* You can make a PUT request to /api/posts/:id/comments with form data content, userId to add a comment to a post.
