# A to-do list app make with koajs reactjs postgresql 
This app runs in one container, encopasing both pre-generated reactjs-based frontend files, serving as a 'pub' folder and koa-js based backend routes. 
As opposed to "koa_app" repository, this thing doesn't have list generation page and is not "microservices-based" architecture rather it is a solid app.  

# koa_app2
ver 0.2.0

Study project for Nodejs Postgres Koa React stack.  
Simple CRUD application that holds a list of posts.  



Features: 
Old features: Simple one to-do list without anything else ver 0.1.0  
New feature multiple lists ver 0.2.0 (this branch)  
  
## Run  
  
```  
git clone https://github.com/mikefrostov/koa_app2.git  
cd koa_app2/  
npm install  
cd frontend/  
npm install  
npm run build  
cd ..  
./postgrescontainer.sh  
./databasemigration.sh  
npm run watch  
```  

Go to localhost:3000  
