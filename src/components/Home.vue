<template>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poller+One&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap" rel="stylesheet">
    <div class="container">

        <div class="flex mt-6 py-8 ">
            <div
                class="md:w-2/3 mx-auto py-8 bg-gradient-to-br from-transparent to-pink-900 md:p-4 lg:p-4 sm:p-1 rounded-md backdrop-blur-xs items-center justify-between h-full sm:w-full">
                <div class="flex">
                    <div class="lg:w-1/2 sm:w-full">
                        <div class="mb-6 p-4">
                            <div class="w-full max-w-md p-4 sm:p-8 bg-transparent">
                                <form @submit.prevent="generateMusic">
                                    <label for="default-input"
                                        class="block mb-2 text-sm font-medium text-left text-gray-900 dark:text-white"
                                        style="font-family:'Poppins', sans-serif;">What
                                        type of music are you looking for?</label>
                                    <input type="text" v-model="text"
                                        class="block text-sm p-2 w-full mt-2 font-medium text-green-900 input shadow-lg rounded-md"
                                        id="" placeholder="Type the music stuff here">
                                    <div v-if="isLoading">

                                        <button type="button" disabled hidden
                                            class="inline-flex w-auto cursor-pointer select-none appearance-none items-center justify-center space-x-2 rounded rounded-lg text-left text-md text-black p-2 text-bold shadow-lg mt-3 text-bold w-full text-center  bg-white transition bg-white disabled:pointer-events-none">
                                            <svg class="h-4 w-4 animate-spin" viewBox="3 3 18 18">
                                                <path class="fill-pink-900"
                                                    d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z">
                                                </path>
                                                <path class="fill-white"
                                                    d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z">
                                                </path>
                                            </svg>
                                            <span>Loading...</span>
                                        </button>
                                    </div>
                                    <div v-else>
                                        <div class="container">
                                            <button type="submit"
                                                class="btn rounded-lg text-left text-md text-black p-2 text-bold shadow-lg mt-3 text-bold w-full text-center  bg-white">Generate</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="w-full max-w-md p-4 sm:p-8 bg-transparent">
                                <div class="flex items-center justify-between mb-4">
                                    <h5
                                        class="text-xl font-bold leading-none text-gray-900 dark:text-white text-light text-center">
                                        Frequent Choices</h5>
                                </div>
                                <div class="grid gap-4 lg:grid-cols-4 sm:grid-cols-2">

                                    <div>
                                        <button
                                            class="btn w-full transition duration-300 transform hover:scale-x-125 hover:scale-y-115">
                                            <div
                                                class="shadow-lg bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-indigo-900 via-red-500 to-amber-600 rounded-md m-2 p-4">
                                                <div class="flex items-center space-x-4">
                                                    <h1
                                                        class="lg:text-lg font-lg text-gray-900 font-bold truncate sm:text-sm dark:text-white">
                                                        70s
                                                    </h1>
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                    <div>
                                        <button
                                            class="btn w-full transition duration-300 transform hover:scale-x-125 hover:scale-y-115">
                                            <div
                                                class="shadow-lg bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-indigo-900 via-red-500 to-amber-600 rounded-md m-2 p-4">
                                                <div class="flex items-center space-x-4">
                                                    <h1
                                                        class="lg:text-lg font-lg text-gray-900 font-bold sm:text-sm truncate dark:text-white">
                                                        80s
                                                    </h1>
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                    <div>
                                        <button
                                            class="btn w-full transition duration-300 transform hover:scale-x-125 hover:scale-y-115">
                                            <div
                                                class="shadow-lg bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-indigo-900 via-red-500 to-amber-600 rounded-md m-2 p-4">
                                                <div class="flex items-center space-x-4">
                                                    <h1
                                                        class="lg:text-lg font-lg text-gray-900 font-bold sm:text-sm truncate dark:text-white">
                                                        90s
                                                    </h1>
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                    <div>
                                        <button
                                            class="btn w-full transition duration-300 transform hover:scale-x-125 hover:scale-y-115">
                                            <div
                                                class="shadow-lg bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-indigo-900 via-red-500 to-amber-600 rounded-md m-2 p-4">
                                                <div class="flex items-center space-x-4">
                                                    <h1
                                                        class="lg:text-lg font-lg text-gray-900 sm:text-sm font-bold truncate dark:text-white">
                                                        00s
                                                    </h1>
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                    <!-- </ul> -->
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="lg:w-1/2 sm:w-full">
                        <div
                            class="mt-6 backdrop-brightness-110 hover:backdrop-brightness-150 max-h-lg rounded-lg shadow-lg  bg-white">
                            <div class="w-full p-4 sm:p-8 bg-transparent">
                                <div class="flex items-center justify-between mb-4">
                                    <h5 class="text-xl leading-none text-black">
                                        <span class="font-light">
                                            Generated
                                        </span>
                                        <span class="font-bold">Music</span>
                                    </h5>
                                </div>
                                <div class="flow-root">
                                    <ul role="list" class=" dark:divide-gray-700">
                                        <li class="shadow-xl bounced-items bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-pink-500 via-red-500 to-yellow-500 w-full rounded-xl m-2 p-4 animation-bounce transition duration-600 transform hover:scale-x-105 hover:scale-y-120"
                                            v-for="music in this.generatedMusicList" :key="music.title">
                                            <div class="flex items-center space-x-4">
                                                <a :href="music.url" target="_blank" rel="noopener noreferrer">
                                                    <div class="flex-1 min-w-0">
                                                        <p
                                                            class="text-sm font-medium text-gray-900 truncate dark:text-white text-left">
                                                            {{ music.title }}
                                                        </p>
                                                    </div>
                                                    <!-- <div
                                                        class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                        View
                                                    </div> -->
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
// import axios
import axios from 'axios';
export default {
    name: 'HomePage',
    data() {
        return {
            text: "",
            isLoading: false,
            generatedMusicList: [
            ]
        }
    },
    props: {
        apiKey: {
            type: String
        },

    }, methods: {
        generateLink(songName) {
            const encodedQuery = encodeURIComponent(songName);
            const youtubeUrl = `https://www.youtube.com/results?search_query=${encodedQuery}`;
            return youtubeUrl
        },
        cleanTitle(songTitle) {
            songTitle = songTitle.slice(2)//..split("").filter(char => char !== " ").join("");.filter(song => /[\d.] /.test(song))
            var url = this.generateLink(songTitle)
            this.generatedMusicList.push({ title: songTitle, url: url });
        },
        async generateMusic() {
            if (this.text != '') {
                axios.defaults.headers.common['Authorization'] = `Bearer ${process.env.VUE_APP_API_KEY}`;
                this.isLoading = true
                this.loading = true;
                const data = {
                    model: "text-davinci-003",
                    prompt: this.text + " music list, 5 only.",
                    max_tokens: 755,
                    temperature: 0.9,
                    top_p: 1,
                    n: 1,
                    stream: false,
                    logprobs: null,
                    stop: "###"
                }
                try {
                    const response = await axios
                        .post('https://api.openai.com/v1/completions', data)
                    if (typeof response != 'undefined') {
                        this.generatedMusicList = []
                        this.isLoading = false
                        var songList = response.data.choices[0].text.split('\n');
                        for (let index = 0; index < songList.length; index++) {
                            if (songList[index] != '') {
                                this.cleanTitle(songList[index])// this.generatedMusicList.title[index];
                            }
                        }
                    }
                } catch (error) {
                    console.error(error)
                }
            }
        },
    }
}


</script>

<style>
:root {
    --animation-time: 2s;
}

@import url('https://fonts.googleapis.com/css2?family=Poller+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap');

input[type="text"] {
    border: none;
    border-bottom: 2px solid rgb(207, 84, 125);
    outline: none;
    box-shadow: 0 0 5px rgb(209, 56, 127);
    transition: box-shadow 0.5s ease-in-out;
}

.titleText {
    font-family: 'Poller One', cursive;
}

.bounced-items {
    animation: bounce 1s;
}

@keyframes bounce {
    from {
        transform: translateY(0);
    }

    to {
        transform: translateY(-20px);
    }
}

input[type="text"]:focus {
    box-shadow: 0 0 10px #fff;
}

.glow {
    text-shadow: 0 0 10px #991b5a;
    animation: 3s glow-effect infinite alternate;
}


@keyframes blink {
    100% {
        color: white;
        animation: none;
        text-shadow: 0 0 10px rgb(134, 81, 233), 0 0 20px rgb(114, 37, 138), 0 0 25px rgb(206, 30, 176), 0 0 10px white;
    }
}

@keyframes glow-effect {
    100% {
        text-shadow: 0 0 20px #FF00DE, 0 0 10px #800735, 0 0 5px #FF00DE;
    }
}

.glass {
    border-radius: 10px;
    padding: 20px;
}

.listdzn {
    background: linear-gradient(to top, #ac2f9b, #6424dc);
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
    padding: 20px;

}
</style>