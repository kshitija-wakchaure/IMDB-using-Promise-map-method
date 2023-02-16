const imgUrl = "https://image.tmdb.org/t/p/w1280";

const moviesContainer = document.getElementById("moviesContainer");

const templating = (arr) => {
    let result = '';
    arr.map(movies => {
        result += `
                    <div class="col-lg-3 col-md-6 col-xs-12">
                        <div class="card mb-4">
                            <figure class = "movieCard">
                                <img src="${imgUrl}/${movies.backdrop_path}" alt="${movies.title}">
                                <figcaption class = "text-white p-4 bg-dark">
                                    <div class="row">
                                        <div class="col-sm-10">
                                            <h3>
                                                ${movies.title}
                                            </h3>
                                        </div>
                                        <div class="col-sm-2">
                                            ${movies.vote_average}
                                        </div>
                                    </div>
                                </figcaption>
                                <div class="overview bg-white p-4">
                                    <h4>overview:</h4>
                                    <p>
                                        ${movies.overview}
                                    </p>
                                </div>
                            </figure>
                        </div>
                    </div> 
                `
    });
    moviesContainer.innerHTML = result;
}

const moviesInfo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let result = Math.random() >= .3 ? true : false;
            if (result) {
                resolve("Here..!!! You will get IMDB ratings of Movies")
            } else {
                reject("Something went wrong..!! Can't access the Movies Ratings")
            }
        }, 2000);
    })
}

moviesInfo()
    .then(res => {
        Swal.fire({
            icon: 'success',
            title: res,
            showConfirmButton: false,
            timer: 6000
        })
        templating(movieArr);
    })
    .catch(err => {
        Swal.fire({
            icon: 'error',
            text: err,
        })
    })