const API_KEY = "7d3fc68d"; // Убедись, что здесь стоит твой API ключ

async function fetchData(title) {
    const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&t=${title}`);
    const data = await response.json();
    return data;
}

const searchButtonElement = document.querySelector('#movie-search-button');
const loadingSpinner = document.getElementById('loading-spinner');
const notFoundToast = document.getElementById('not-found-toast');
const searchResultsContainer = document.querySelector('.search-results');
const searchInputElement = document.querySelector('#movie-search-input');

searchButtonElement.addEventListener('click', async () => {
    const movieTitleValue = searchInputElement.value.trim(); // Убираем лишние пробелы

    // Показать индикатор загрузки
    loadingSpinner.classList.remove('d-none');
    
    const movie = await fetchData(movieTitleValue);

    // Скрыть индикатор загрузки
    loadingSpinner.classList.add('d-none');

    if (!movie || movie.Response === "False") {
        const toast = new bootstrap.Toast(notFoundToast);
        toast.show();  // Это должно сработать
        return;
    }
    

    // Обновление интерфейса с найденным фильмом
    const cardElementTemplate =
        `<div class="card" style="width: 20rem">
            <img
                src="${movie.Poster}"
                class="card-img-top"
                alt="${movie.Title} movie poster"
            />
            <div class="card-body">
                <h5 class="card-title">${movie.Title}</h5>
                <p class="card-text">${movie.Plot}</p>
                <div class="d-flex">
                    <a
                        href="#"
                        class="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                    >
                        Подробнее
                    </a>
                    <a
                        href="#"
                        class="btn btn-primary"
                        id="add-fav-btn"
                    >
                        Добавить в избранное
                    </a>
                </div>
            </div>
        </div>`;

    searchResultsContainer.innerHTML = '';
    searchResultsContainer.insertAdjacentHTML('beforeend', cardElementTemplate);

    // Обработчик добавления в избранное
    const addFavButton = document.getElementById('add-fav-btn');
    addFavButton.addEventListener('click', () => {
        if (localStorage.getItem('favMovies') === null) {
            const favMoviesList = [];
            favMoviesList.push(movie);
            localStorage.setItem('favMovies', JSON.stringify(favMoviesList));
            return;
        }

        const favMoviesList = JSON.parse(localStorage.getItem('favMovies'));
        favMoviesList.push(movie);
        localStorage.setItem('favMovies', JSON.stringify(favMoviesList));
    });
});
