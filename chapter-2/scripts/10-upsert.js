db.movieDetails.updateOne(
    {
        "imdb.id": detail.imdb.id
    },
    {
        $set: detail
    },
    {
        "upsert": true
    });