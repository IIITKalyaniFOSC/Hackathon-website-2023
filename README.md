# Repository for hosting the website of **status_code_0**

## Prerequisites

- npm

## How to run the website 

- ```npm install``` to install the dependencies
- ```npm run dev``` to run the live-server
- This website supports tailwindcss so you can either use it or write vanilla css normally.

## How to deploy the website

- After you have made your changes and you want your changes to be deployed on the live site. Follow the below steps.
- run `npx prettier --write .` to indent the code properly.
- run `npm run build` to generate the deployement files. The files in the dist folder should be copied to the `deploy` branch for deployement.(This step is for maintainers only)
- Run a `git push origin main` and make a pull request.

