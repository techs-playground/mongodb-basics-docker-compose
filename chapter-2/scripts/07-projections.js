db.movieDetails.find(
    {
        "title": "The Martian"
    },
    {
        "title": 1,
        "year": 1,
        "director": 1,
        "actors": 1,
        "_id": 0 }).pretty();