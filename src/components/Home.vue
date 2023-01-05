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
                class="md:w-2/3 mx-auto py-8 bg-gradient-to-br from-transparent to-pink-900 p-4 rounded-md backdrop-blur-xs items-center justify-between h-full sm:w-full">
                <div class="flex">
                    <div class="w-1/2">
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
                                    <div class="container">
                                        <button type="submit"
                                            class="btn rounded-lg text-left text-md text-black p-2 text-bold shadow-lg mt-3 text-bold w-full text-center  bg-white">Generate</button>
                                    </div>
                                </form>
                            </div>
                            <div class="w-full max-w-md p-4 sm:p-8 bg-transparent">
                                <div class="flex items-center justify-between mb-4">
                                    <h5
                                        class="text-xl font-bold leading-none text-gray-900 dark:text-white text-light text-center">
                                        Frequent Choices</h5>
                                </div>
                                <div class="grid grid-cols-4 gap-4">

                                    <div>
                                        <button
                                            class="btn w-full transition duration-300 transform hover:scale-x-125 hover:scale-y-115">
                                            <div
                                                class="shadow-lg bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-indigo-900 via-red-500 to-amber-600 rounded-md m-2 p-4">
                                                <div class="flex items-center space-x-4">
                                                    <h1
                                                        class="text-lg font-lg text-gray-900 font-bold truncate dark:text-white">
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
                                                        class="text-lg font-lg text-gray-900 font-bold truncate dark:text-white">
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
                                                        class="text-lg font-lg text-gray-900 font-bold truncate dark:text-white">
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
                                                        class="text-lg font-lg text-gray-900 font-bold truncate dark:text-white">
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
                    <div class="w-1/2">
                        <div
                            class="mt-6 backdrop-brightness-110 hover:backdrop-brightness-150 max-h-lg rounded-lg shadow-lg  bg-white">
                            <div class="w-full p-4 sm:p-8 bg-transparent">
                                <div class="flex items-center justify-between mb-4">
                                    <h5 class="text-xl font-bold leading-none text-black">Generated
                                        Music
                                    </h5>
                                </div>
                                <div class="flow-root">
                                    <ul role="list" class=" dark:divide-gray-700">
                                        <li
                                            class="shadow-xl bounced-items bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-pink-500 via-red-500 to-yellow-500 w-full rounded-xl m-2 p-4 animation-bounce transition duration-600 transform hover:scale-x-105 hover:scale-y-120">
                                            <div class="flex items-center space-x-4">
                                                <div class="flex-1 min-w-0">
                                                    <p
                                                        class="text-sm font-medium text-gray-900 truncate dark:text-white text-left">
                                                        After Dark by Mr.Kitty
                                                    </p>
                                                </div>
                                                <div
                                                    class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                    View
                                                </div>
                                            </div>
                                        </li>

                                        <li
                                            class="shadow-xl bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-pink-500 via-red-500 to-yellow-500 w-full rounded-lg m-2 p-4 animation-bounce transition duration-600 transform hover:scale-x-105 hover:scale-y-120">
                                            <div class="flex items-center space-x-4">
                                                <div class="flex-1 min-w-0">
                                                    <p
                                                        class="text-sm font-medium text-gray-900 truncate dark:text-white text-left">
                                                        After Dark by Mr.Kitty
                                                    </p>
                                                </div>
                                                <div
                                                    class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                    View
                                                </div>
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

    <!-- <div
        class="flex flex-wrap animate-text glass bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-600 via-indigo-600 to-red-600 items-center justify-between h-full w-[50] rounded-lg shadow-xl background-animate p-4 mt-6 m-4">
        <div class=" text-center mt-6 md:text-left w-1/2 h-full" style="min-height:55vh;">
            <h2 class="text-4xl glow titleText text-center font-bold text-white mb-4 uppercase">Melodyze</h2>
            <div class="mb-6">
                <div class="w-full max-w-md p-4 sm:p-8 bg-transparent">
                    <form @submit.prevent="generateMusic">
                        <label for="default-input"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">What
                            type of music are you looking for?</label>
                        <input type="text" v-model="text"
                            class="block text-sm p-2 w-full mt-2 font-medium text-green-900 input shadow-lg rounded-md"
                            id="" placeholder="Type the music stuff here">
                        <button type="submit"
                            class="btn rounded-lg  text-md text-white text-bold transition duration-200 transform hover:scale-x-125 hover:scale-y-120 shadow-xl mt-4 p-2 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-green-200 to-green-500">Generate</button>
                    </form>
                </div>
                <div class="w-full max-w-md p-4 sm:p-8 bg-transparent">
                    <div class="flex items-center justify-between mb-4">
                        <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white uppercase text-bold">You
                            can also choose from
                            different
                            era!</h5>
                    </div>
                    <div class="grid grid-cols-3 gap-4">
                        <button
                            class="btn w-full transition duration-300 transform hover:scale-x-125 hover:scale-y-115">
                            <div
                                class="shadow-lg bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-indigo-900 via-red-500 to-amber-600 rounded-md m-2 p-4">
                                <div class="flex items-center space-x-4">
                                    <h1 class="text-lg font-lg text-gray-900 font-bold truncate dark:text-white">
                                        70s
                                    </h1>
                                </div>
                            </div>
                        </button>
                        <button
                            class="btn w-full transition duration-300 transform hover:scale-x-125 hover:scale-y-115">
                            <div
                                class="shadow-lg bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-indigo-900 via-red-500 to-amber-600 rounded-md m-2 p-4">
                                <div class="flex items-center space-x-4">
                                    <h1 class="text-lg font-lg text-gray-900 font-bold truncate dark:text-white">
                                        80s
                                    </h1>
                                </div>
                            </div>
                        </button>
                        <button
                            class="btn w-full transition duration-300 transform hover:scale-x-125 hover:scale-y-115">
                            <div
                                class="shadow-lg bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-indigo-900 via-red-500 to-amber-600 rounded-md m-2 p-4">
                                <div class="flex items-center space-x-4">
                                    <h1 class="text-lg font-lg text-gray-900 font-bold truncate dark:text-white">
                                        90s
                                    </h1>
                                </div>
                            </div>
                        </button>
                        <button
                            class="btn w-full transition duration-300 transform hover:scale-x-125 hover:scale-y-115">
                            <div
                                class="shadow-lg bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-indigo-900 via-red-500 to-amber-600 rounded-md m-2 p-4">
                                <div class="flex items-center space-x-4">
                                    <h1 class="text-lg font-lg text-gray-900 font-bold truncate dark:text-white">
                                        00s
                                    </h1>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>

            </div>
        </div>
        <div
            class="w-1/2 mt-6 backdrop-brightness-110 hover:backdrop-brightness-150 max-h-lg rounded-lg shadow-lg  bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-600 via-blue-500 to-purple-600 md:w-1/2">
            <div class="w-full p-4 sm:p-8 bg-transparent">
                <div class="flex items-center justify-between mb-4">
                    <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Generated Music</h5>
                </div>
                <div class="flow-root">
                    <ul role="list" class=" dark:divide-gray-700">
                        <li
                            class="shadow-xl w-full rounded-xl m-2 p-4 animation-bounce transition duration-600 transform hover:scale-x-105 hover:scale-y-120">
                            <div class="flex items-center space-x-4">
                                <div class="flex-1 min-w-0">
                                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white text-left">
                                        After Dark by Mr.Kitty
                                    </p>
                                </div>
                                <div
                                    class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                    View
                                </div>
                            </div>
                        </li>

                        <li
                            class="shadow-xl w-full rounded-lg m-2 p-4 animation-bounce transition duration-600 transform hover:scale-x-105 hover:scale-y-120">
                            <div class="flex items-center space-x-4">
                                <div class="flex-1 min-w-0">
                                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white text-left">
                                        After Dark by Mr.Kitty
                                    </p>
                                </div>
                                <div
                                    class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                    View
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    </div> -->

</template>

<script>
// import axios
import axios from 'axios';
axios.defaults.headers.common['Authorization'] = `Bearer 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`
axios.defaults.headers.common['mode'] = 'no-cors'
export default {
    name: 'HomePage',
    data: () => {
        return {
            text: ""
        }
    },
    props: {
    }, methods: {
        async generateMusic() {
            console.log('i am being called');
            this.loading = true;
            const data = {
                model: "text-davinci-003",
                prompt: this.text,
                max_tokens: 7,
                temperature: 0.9,
                top_p: 1,
                n: 1,
                stream: false,
                logprobs: null,
                stop: "\n"
            }
            try {
                const response = await axios
                    .post('https://api.openai.com/v1/completions', data)
                if (typeof response != 'undefined') {
                    console.log(response.data);
                }
            } catch (error) {
                // Handle error
                console.error(error)
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