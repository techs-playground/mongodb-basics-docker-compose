db.movieDetails.updateOne(
    {
        "title": "The Martian"
    },
    {
        $set: {
            " popularity": 485
        }
    });

db.movieDetails.updateOne(
    {
        "title": "The Martian"
    },
    {
        $set: {
            "stars":
            [
                "Matt Damon",
                "Jessica Chastain",
                "Kristen Wiig"
            ]
        }
    });

db.movieDetails.updateOne(
    {
        "title": "The Martian"
    },
    {
        $set: {
            "awards": {
                "wins": 39,
                "nominations": 188,
                "text": "Nominated for 7 Oscars. Another 39 wins & 188 nominations."
            }
        }
    });
