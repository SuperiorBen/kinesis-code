<template>
  <div @click="open" class="open">
    <img src="./assets/navbar/menu.svg" alt="menu" />
  </div>
  <nav id="nav">
    <div @click="close" class="close">
      <img src="./assets/navbar/close-menu.svg" alt="close" />
    </div>
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
<script>
export default {
  methods : {
  open(){
    document.getElementById("nav").style.left = "0em";
  },
  close(){
    document.getElementById("nav").style.left = "-20em";
  }
}
};
</script>
<style lang="scss">
body {
  margin: 0px;
  padding: 0px;
  font-family: "Ubuntu", sans-serif;
  font-size: 16px !important;
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
.open {
  display: none;
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

  .close {
    display: none;
  }

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

@media (max-width: 430px) {
  .open {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3em;
    height: 3em;
    background: #162b3e;
    color: white;
    position: fixed;
    top: 0em;
    left: 0em;
    z-index: 98;
    border-radius: 4px;
    cursor: pointer;

    img {
      width: 2em;
      color: white;
    }

    &:hover{
      background: #fe9900;
    }
  }
  nav {
    position: fixed;
    top: 0em;
    left: 0em;
    background-color: #162b3e;
    width: 20em;
    height: 100vh;
    padding: 0px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    position: fixed;
    top: 0em;
    left: -20em;
    z-index: 99;
    transition: ease-in-out 0.5s;

    .close {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 3em;
      height: 3em;
      background: #162b3e;
      color: white;
      position: absolute;
      top: 0em;
      left: 17em;
      z-index: 100;
      border-radius: 4px;
      cursor: pointer;

      img {
        width: 1em;
        color: white;
      }

      &:hover{
      background: #fe9900;
    }
    }

    img {
      width: 12em;
    }

    ul {
      text-decoration: none;
      list-style: none;
      margin: 0px;
      padding: 0px;
      width: 100%;
      li {
        font-size: 1.2em;
        color: white;
        padding-top: 10px;
        padding-bottom: 10px;
        width: calc(100% - 15px);
        padding-left: 15px;
        cursor: pointer;
        text-align: center;

        &:hover {
          color: #162b3e;
          background: white;
        }
      }
    }
  }

  main {
    max-width: 100vw;
    margin-left: 0em;
  }
}
</style>
