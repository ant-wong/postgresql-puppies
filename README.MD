# PostgreSQL Puppies

Praciticing SQL skills with Postgres and Node. Created a RESTful API for puppies.

### Running the project

- Run `psql postgres -f puppies.sql`
- `npm start` to run Express Server

#### GET ALL
**http://localhost:3000/puppies**

#### GET ONE
**http://localhost:3000/puppies/:id**

#### POST 
In your terminal run:
`curl --data "name=Pasha&breed=Beagle&age=7&sex=M" \`
Then ->
`http://127.0.0.1:3000/puppies`

* Can use your own names, breeds etc.

#### PUT
In your terminal run:
`curl -X PUT --data "name=Ant&breed=Beagle&age=6&sex=M" \`
Then ->
`http://127.0.0.1:3000/puppies/1`

#### DELETE 
In your terminal run:
`curl -X DELETE http://127.0.0.1:3000/api/puppies/1`