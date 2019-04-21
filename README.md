This repo contains all the  materials for the course MongoDB Basics, in order to run a MongoDb in a docker container, load the provided data, connect with created and provided atlas clusters and play with them.

## Docker

The docker-compose materials is located at [docker](docker/) folder, they contain:
- The docker-compose.yml file which runs the latest mongodb database
- The loadMovieDetailsDataset.js to be loaded into the atlas cluster created at https://cloud.mongodb.com

### Running the container

To run the container go to the [docker](docker/) folder and then run the following command in a CLI:

```bash
$ docker-compose up
```

Or to run in detached mode (background):

```bash
$ docker-compose up -d
```

After successfully run the container, run the following command and copy the CONTAINER ID:

```bash
$ docker container ls
```

### Connecting to the MongoDB Basics class Atlas clustes

Now run the following command to connect to the MongoDB Basics class Atlas cluster:

```bash
$ docker exec -it [REPLACE_WITH_CONTAINER_ID] mongo "mongodb://cluster0-shard-00-00-jxeqq.mongodb.net:27017,cluster0-shard-00-01-jxeqq.mongodb.net:27017,cluste
r0-shard-00-02-jxeqq.mongodb.net:27017/test?replicaSet=Cluster0-shard-0" --authenticationDatabase admin --ssl --username m001-student --password m001-mongodb-basics
 ```

### Connecting to my class Atlas clustes

Now run the following command to connect to my Atlas cluster:

```bash
$ docker exec -it [REPLACE_WITH_CONTAINER_ID] mongo "mongodb+srv://sandbox-4cvi6.mongodb.net/test" --username m001-student --password [REPLACE_WITH_PASSWORD]
 ```

 To get the password go to the protected link https://thinfi.com/9isc and copy the password provided in the step 7.

 ### Loading provided dataset to the my Atlas cluster

After connect to my Atlas cluster, run the following command from the mongo shell to load the dataset:

```bash
MongoDB Enterprise Sandbox-shard-0:PRIMARY> load("loadMovieDetailsDataset.js")
 ```

Now confirm that the dataset has been loaded successfully running the following commnds in the mongo shell:

```bash
MongoDB Enterprise Sandbox-shard-0:PRIMARY> show dbs
MongoDB Enterprise Sandbox-shard-0:PRIMARY> use video
MongoDB Enterprise Sandbox-shard-0:PRIMARY> show collections
MongoDB Enterprise Sandbox-shard-0:PRIMARY> db.movieDetails.find().pretty()
```