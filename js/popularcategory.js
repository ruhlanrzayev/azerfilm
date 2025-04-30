function fetchAndStoreData(key, filterFn) {
    return fetch('../json/db.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const filtered = data.filter(filterFn).slice(0, 10);
            localStorage.setItem(key, JSON.stringify(filtered));
            return filtered;
        });
}

function getDataOrFetch(key, filterFn) {
    const localData = localStorage.getItem(key);
    if (localData) {
        return Promise.resolve(JSON.parse(localData));
    } else {
        return fetchAndStoreData(key, filterFn);
    }
}

// Details Elements
const overlay = document.getElementById("overlay");
const detailsWrapper = document.getElementById("detailsContainerWrapper");
const detailsClose = document.getElementById("detailsClose");
const detailsImage = document.getElementById("detailsImage");
const detailsTitle = document.getElementById("detailsTitle");
const detailsMeta = document.getElementById("detailsMeta");
const detailsDesc = document.getElementById("detailsDesc");

// Show Details
function showDetails(item) {
    overlay.classList.remove("hidden");
    detailsWrapper.classList.remove("hidden");

    detailsImage.style.backgroundImage = `url('${item.wall || item.poster}')`;
    detailsTitle.textContent = item.title;
    detailsMeta.textContent = `${new Date(item.date).getFullYear()} ∙ ${capitalize(item.format)} ∙ ${item.category.join(' ∙ ')}`;
    detailsDesc.textContent = item.desc;

    document.body.style.overflow = 'hidden';
}

// Close Detaikls
function hideDetails() {
    overlay.classList.add("hidden");
    detailsWrapper.classList.add("hidden");

    document.body.style.overflow = '';
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Close Clicks
detailsClose.addEventListener("click", hideDetails);
overlay.addEventListener("click", hideDetails);

// FILMS
getDataOrFetch("popular_films", film => film.format === "movie" && film.imdb > 8)
    .then(films => {
        const filmWrapper = document.querySelector('#filmWrapper');
        if (!filmWrapper) return;

        films.forEach(film => {
            let div = document.createElement('div');
            div.classList.add(
                'swiper-slide', 'rounded-2xl', 'cursor-pointer',
                'transition-transform', 'duration-700',
                'ease-[cubic-bezier(0.4,0,0.2,1)]',
                'hover:scale-105', 'hover:shadow-2xl'
            );
            div.style.background = `url('${film.poster}') center/cover`;
            div.setAttribute('id', `film=${film.id}`);
            div.addEventListener("click", () => showDetails(film));
            filmWrapper.appendChild(div);
        });

        document.getElementById("filmsLoading").style.display = "none";
        document.getElementById("filmSwiper").classList.remove("hidden");
    })
    .catch(error => console.error('Error loading films:', error));

// SERIES
getDataOrFetch("popular_series", serie => serie.format === "series" && serie.imdb > 8)
    .then(series => {
        const seriesWrapper = document.querySelector('#seriesWrapper');
        if (!seriesWrapper) return;

        series.forEach(serie => {
            let div = document.createElement('div');
            div.classList.add(
                'swiper-slide', 'rounded-2xl', 'cursor-pointer',
                'transition-transform', 'duration-700',
                'ease-[cubic-bezier(0.4,0,0.2,1)]',
                'hover:scale-105', 'hover:shadow-2xl'
            );
            div.style.background = `url('${serie.poster}') center/cover`;
            div.setAttribute('id', `serie=${serie.id}`);
            div.addEventListener("click", () => showDetails(serie)); 
            seriesWrapper.appendChild(div);
        });

        document.getElementById("seriesLoading").style.display = "none";
        document.getElementById("seriesSwiper").classList.remove("hidden");
    })
    .catch(error => console.error('Error loading series:', error));
