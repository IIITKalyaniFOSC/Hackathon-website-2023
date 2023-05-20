# Repository for hosting the website of **status_code_0**

> **Warning:** we are using vite now so the below information is redundant.

> **Please use** `npx prettier --write .` **before pushing**.

## Prerequisites

- npm

## How to run the website on your local machine

- fork all the **branches** of the repository
- Clone your fork using the command
  - `git clone https://github.com/<username>/Hackathon-website-2023.git`
  - replace the `<username>` with your github username
- `cd hackathon-website-2023`
- `npm install`
- `npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch`
  - You can write `css` in either **_vanilla/normal_** or using **_tailwindcss_**
  - to write **_vanilla/normal_** css, after running the command in a terminal, leave the terminal running and write the css in `src/input.css`
    - tailwind will compile your css into the `dist/output.css` which we be later shipped to `deploy` branch for deployment
- For **_tailwind_** simply follow the normal tailwind procedure listed [here](https://tailwindcss.com/docs/installation)

## How to deploy the website

Right now the deployment is kind of a tiresome process, we will use this till we find a better alternative for it.

- First make changes on the `main` branch in your desired way(tailwindcss/vanilla).
- After you are done with the changes, copy the `index.html`, `output.css` and `index.css` from the `main` branch to the `deploy` branch. (I use gitkraken for making it easier to copy, using similar tool is recommended)
- After you have made changes to both the branches push the branches using `git push origin main` and `git push origin deploy`.
- After this the `cpanel` script will deploy the site to the server.

> **Warning:** You can directly make changes to the deploy branch and that would be reflected to the site as well, but it would mess up the `tailwindcss` rules and is not recommended .
