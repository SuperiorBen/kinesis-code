<template>
  <nav>
    <img src="./assets/navbar/logo.png" alt="" />
    <ul>
      <li>WHAT WE DO</li>
      <li>HOW WE THINK</li>
      <li>ABOUT US</li>
      <li>CONTACT US</li>
    </ul>
  </nav>
  <main>
    <router-view />
  </main>
</template>

<style lang="scss">
body {
  margin: 0px;
  padding: 0px;
  font-family: "Ubuntu", sans-serif;
}

::-webkit-scrollbar {
  width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #162b3e;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #fe9900;
}
nav {
  background-color: #162b3e;
  width: 10em;
  height: 100vh;
  padding: 0px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 99;

  img {
    width: 10em;
  }

  ul {
    text-decoration: none;
    list-style: none;
    margin: 0px;
    padding: 0px;
    width: 100%;
    li {
      font-size: 0.8em;
      color: white;
      padding-top: 10px;
      padding-bottom: 10px;
      width: calc(100% - 15px);
      padding-left: 15px;
      cursor: pointer;

      &:hover {
        color: #162b3e;
        background: white;
      }
    }
  }
}

main {
  max-width: calc(1920px - 10em);
  margin-left: 10em;
}
</style>
