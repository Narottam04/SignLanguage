const card = document.querySelectorAll("#card")
const modalClose = document.querySelector("#modal-close")



// Show video and modal logic
let start = 0
function fetchVideo(start) {
    // start loading
    document.getElementById('skeleton-cards').classList.remove('hidden')
    fetch(`https://us-west-2.aws.data.mongodb-api.com/app/signlanguage-jwpqs/endpoint/alphabetSong`)
        .then(res => {
            return res.json()
        })
        .then(data => {
            data.forEach(vid => {
                const markup = `
                <div id="card"  url=${vid.URL} class="w-[80vw] md:max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 cursor-pointer">
                    <div>
                        <img url=${vid.URL}  class="rounded-t-lg w-full" src=${vid.thumbnail} alt=${vid.title} />
                    </div>
                    <div class="p-5">
                        <div url=${vid.URL}>
                            <h5 url=${vid.URL}  class="mb-2 text-2xl font-bold tracking-tight capitalize  text-gray-900 dark:text-white">
                                ${vid.title}
                            </h5>
                        </div>
                        <p  url=${vid.URL} class="mb-3 font-semi-bold text-gray-700 dark:text-gray-400">
                            ${vid.duration} sec
                        </p>
                    </div>
                </div>
                `
                document.getElementById('paginated-video').insertAdjacentHTML('beforeend',markup)

                document.getElementById('paginated-video').addEventListener('click', (e) => {
                    window.scrollTo(0,0)
                    document.querySelector('#vidModal').classList.remove('hidden')
                    const url = e.target.getAttribute('url')
                    const videoId = url.split("=")[1]
                    console.log(url, url.split("=")[1])
                    document.querySelector('#video').src = `https://www.youtube.com/embed/${videoId}`
                })
                // hide skeleton loading
                document.getElementById('skeleton-cards').classList.add('hidden')

            })
        })  
}

fetchVideo(start)

// close video modal
modalClose.onclick = () => {
    document.querySelector('#vidModal').classList.add('hidden')
    document.querySelector('#video').src = ""
}