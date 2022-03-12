<p align=center><img src="./client/src/assets/Funkommerce.png" alt= "img" height="100px"></p>
<p align=center><img src="./client/src/assets/funkosRead.png" alt= "img"  height="200px"></p>

<h2 align=center> Our Funkommerce page: </h2>

<h2 align=center> <a href="https://www.google.com/"> www.Funkommerce.com</a> </h2>

<br/>

# Proving by yourself


## 🔵 Preparing server
### 📁 Standing on /api folder
<ul>
    <li>📄 Add a new file named .env </li>
    <li>Inside the file write DATABASE_URL="postgresql://postgres:{your password}@localhost:5432/funkommerce?schema=public" </li>
    <li>Change where it says "your password" to your database password </li>
    <li>Open a terminal and run the next command: <b>npm i</b></li>
</ul>

### 📁 Standing on /api/src folder
<ul>
    <li>After it finishes installing run the next command: <b>npx prisma migrate reset</b></li>
    <li>Then run: <b>npx prisma db push --force-reset</b></li>
    <li>Finally run: <b>npm run dev</b></li>
</ul>

<br/>

## 🔵 Preparing frontend 
### 📁 Standing on /client folder

<ul>
    <li>Open a terminal and run the next command:</li>
    <li>First:  <b>npm i</b> and after it finishes installing: <b>npm start</b></li>
</ul>
<br/>

## 🟢 Enjoy the page! 💖
