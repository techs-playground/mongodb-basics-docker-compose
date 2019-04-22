db.movieDetails.find(
    {
        writers: {
            $in: [
                "Ethan Coen",
                "Joel Coen"
            ]
        }
    },
    {
        title: true,
        writers: true
    });