# TODO-TS
A typescript backend and frontend todo-list, made in react and nodejs
- Why ? - this project was made to practice typescript in backend and frontend

## PHOTOS 
<div stlye="display: flex;">
  <img style="width: 200px;" src="https://user-images.githubusercontent.com/92704272/196734784-ba4b2654-236e-4384-b3d9-1e4d230acabc.png" />
  <img style="width: 200px;" src="https://user-images.githubusercontent.com/92704272/196734790-b1f77b9b-7f06-4091-939d-e6d0865e1fce.png" />
</div>

## Backend server
Made using Express, Mongoose, MongoDB & Typescript

### Run server

#### ⚠️ WARNING! 
You have to put your MongoDB url in .env file following .env.example instructions

- To run the backend server, clone this git repository on your computer and inside of ./backend directory run:
```bash
npm install # to install all the packages
# and
npm start # to run the server
```

- If you want to see your code changes in real time before compiling run: 
```bash
npm run dev
```

### Compile changes
- To change an code you have to edit in src folder, and to compile to common js run:
```bash
npx tsc # it will compile your code in ./build directory
```

## Frontend client
Made using ReactJS, Axios & Typescript
### Run client

#### ⚠️ WARNING! 
You have to put your backend server baseurl in .frontend/src/services/todos.ts <br />
But by default your backend runs at localhost:3000 and if you didn't change then you don't need to make any changes
Example: 
```javascript
const todo = axios.create({
  baseURL: "http://yoururl",
});
```

- To run the client, clone this repository on your computer and inside of ./frontend run:
```bash
npm install # to install all the client packages
# and 
npm run dev # to run client
```


