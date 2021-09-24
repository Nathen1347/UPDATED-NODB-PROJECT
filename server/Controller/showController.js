const data = require('../shows');
let shows = [...data.shows];

function getShows(req, res){
    res.status(200).send(shows);
}

function addShow(req, res){
    const {title , imgUrl, review, episodesWatched } = req.body;
    const newShow = {
        title: title,
        imgUrl: imgUrl,
        review: review,
        episodesWatched: episodesWatched
    }
    shows.push(newShow);
    res.status(200).send(shows);
}

function editShow(req, res){
    const {id, review} = req.params;
    let newShowArr = shows.map(show => {
        if(+id === show.id){
            return {...show, review}
        } else {
            return show
        }
    })
    shows = newShowArr;
    res.status(200).send(shows)
}

function deleteShow(req, res){
    const {deleteId} = req.query;
    const deleteIndex = shows.findIndex(show => show.id === +deleteId);
    shows.splice(deleteIndex, 1)

    res.status(200).send(shows)
}


module.exports = {
    getShows,
    addShow,
    editShow,
    deleteShow
}