# Shippit Admin

Application to display shipping quotes of an ecommerce. 🚛

### Pre-requisites

In order to use this software on your workstation, you must meet the following requirements:

- Node.js LTS v14.15+
  > Type in your console `node -v` and check your current version. In the absence of its installation, enter the [following link](https://nodejs.org/en/download/).
- Yarn v1.22.5+
  > Type in your console `yarn -v` and check your current version. In the absence of its installation, enter the [following link](https://yarnpkg.com/getting-started/install#global-install).

Note:
  > This project can be run with or without [Docker](https://www.docker.com/)

### Run App without Docker

1. Clone the repository.
   ```sh
   $ git clone https://github.com/rotcax/shipit-admin.git
   ```
2. Onto to the downloaded repository folder.
   ```sh
   $ cd shippit-admin
   ```
3. Install all dependencies.
   ```sh
   $ yarn
   ```
4. Run the application.
   ```sh
   $ yarn dev
   ```

### Run App with Docker 🐋

1. Clone the repository.
   ```sh
   $ git clone https://github.com/rotcax/shipit-admin.git
   ```
2. Onto to the downloaded repository folder.
   ```sh
   $ cd shippit-admin
   ```
3. Grant file permissions (only linux or osx).
   ```sh
   $ chmod +x run-image.sh
   ```
4. Run image.
   ```sh
   $ ./run-image.sh
   ```

### CI/CD with Vercel 🎉🎉

  > https://shipit-admin.vercel.app/


### Use Applicaction

- For use application write following information
> email: prueba_front@shipit.cl
> password : 12345678

### Extras ⚙️

Environment variables can be created within the application, copy the contents of the .env.local.example file and start setting the variables

  ```sh
   $ cp .env.local.example .env.local
   ```
