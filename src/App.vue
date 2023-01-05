<template>
  <div class="">

    <nav class="px-2 bg-transparent border-gray-200">
      <div class="container flex flex-wrap items-center justify-between mx-auto">
        <a href="#" class="flex items-center">
          <h2 class="text-3xl text-center font-bold text-white ml-2"
            style="letter-spacing: 1.5px; font-family: 'Poppins', sans-serif;">Melodyze.
          </h2>
        </a>
        <button data-collapse-toggle="navbar-multi-level" type="button"
          class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-multi-level" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"></path>
          </svg>
        </button>
        <div class="hidden bg-transparent w-full md:block md:w-auto" id="navbar-multi-level">
          <ul
            class="flex flex-col p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium bg-transparent">
            <li>
              <a href="#"
                class="block py-2 pl-3 pr-4 text-white bg-blue-700 uppercase rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent"
                aria-current="page">Home</a>
            </li>
            <li>
              <a href="#"
                class="block py-2 pl-3 uppercase pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent"
                aria-current="page">About</a>
            </li>

          </ul>
        </div>
      </div>
    </nav>

  </div>
  <HomePage></HomePage>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import HomePage from './components/Home.vue';
export default {
  name: 'App',
  components: {
    HomePage
  }
}
</script>

<style>
#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html {
  background-image: url("../src/assets/bg.jpg");
  background-position: center;
  /* background: no-repeat, url("https://cdn.discordapp.com/attachments/976997476852719626/1060451447998791730/WRA1tH_music_wallpaper_background_for_a_SaaS_web_app_neon_glow__f88782b2-c975-4238-9e0a-6dc58960d507.png"); */
  background-repeat: no-repeat;
  /* background-size: cover; */
  zoom: 110%;
}
</style>
