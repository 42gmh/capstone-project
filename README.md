# capstone-project - Color Me Mario

During week 4 of the DigitalCrafts bootcamp one of the instructors recommended we do the exercise that involved reproducing an 8-bit Mario. I have fond memories of playing Mario with my little bother so I decided to do it. I enjoyed it so much that with each key technology we introduced, I decided to re-implement Mario using those lessons. I reproduced that exercise a total of four different ways.

For my capstone project, I have decided to re-visit 8-bit Mario one last time -- this time combining all the skills we leared to build an application that allows users to create custom colored 8-bit Marios and store them in an album.

Here is a breakdown of the technologies used:

- HTML/CSS/Javascript - This is the mirepoix of web development and underpins everything else.
- Express - The backend is implemented asan Express server. This exposes the web endpoints used by the GUI to CRUD data.
- Node - This is the backend Javscript VM used to run the Express server
- bcrypt - This is used for password management/hashing.
- PostresSQL - This is the SQL database used to store users and their albums.
- Sequelize - This is the ORM used to model the objects and perform the CRUD oprerations.
- JWT - JSON Web Tokens is used to store a session cookie upon user login.
- React - The GUI is a Single Page Application using React to support the flow.
- React Context - This is how state is managed across pages in the app.
- Bootstrap - This is used to provide help with styling concerns.
- AWS - The app is hosted an an Amazon Wed Services EC2 instance.
- Nginx - The app is served up by Nginx.
- PM2 - The backend process lifecyle is managed via PM2.
- certbot - The EFF's cerbot is providing the HTTPS certificate management.

The project contains 2 main directories:
- backend - this hosts the code in support of the backend of the project.
- frontend/color-me-mario - this hosts the code in support for the frontend of the project.

After cloning the repo, run npm install in each of the directories listed above to fetch the dependencies.
