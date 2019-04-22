db.movieDetails.find(
    {
        runtime: {
            $eq: 175
        }
    },
    {
        title: true,
        runtime: true
    });

db.movieDetails.find(
    {
        runtime: {
            $gt: 175
        }
    },
    {
        title: true,
        runtime: true
    });

db.movieDetails.find(
    {
        runtime: {
            $gte: 120,
            $lte: 180
        }
    },
    {
        title: true,
        runtime: true
    });

db.movieDetails.find(
    {
        runtime: {
            $gte: 120,
            $lte: 180
        }
    },
    {
        title: true,
        runtime: true
    });

db.movieDetails.find(
    {
        runtime: {
            $in: [
                60, 90, 120, 180
            ]
        }
    },
    {
        title: true,
        runtime: true
    });

db.movieDetails.find(
    {
        runtime: {
            $ne: 110,
            $gte: 100,
            $lte: 120
        }
    },
    {
        title: true,
        runtime: true
    });

db.movieDetails.find(
    {
        runtime: {
            $nin: [
                60, 90, 120, 180
            ]
        }
    },
    {
        title: true,
        runtime: true
    });