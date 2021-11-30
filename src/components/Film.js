const Film = ({name, url}) => {
    return (
        <div class="film-container">
        <li><a id="film-card" href={url}>{name}</a></li>
        </div>
    )
}

export default Film;