set -e 

sudo DATABASE_URL=postgres://postgres:docker@localhost:5432/postgres npm run migrate up
