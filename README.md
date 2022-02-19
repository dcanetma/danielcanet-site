# Daniel Canet professional website

## Before you begin

This project requires that you install these next dependencies on your computer:

1. [install git](https://github.com/git-guides/install-git) on your computer.
2. [install node](https://nodejs.org/en/) on your computer.
3. have [a valid GitHub user](https://github.com/) with access to the project repository: [github.com/dcanetma/danielcanet-site/](https://github.com/dcanetma/danielcanet-site/).
4. [Connect your computer with SSH](https://docs.github.com/en/authentication/connecting-to-github-with-ssh) to GitHub.


## Downloading the project

First step, will be to download the code of the project on your computer. 

1. Open a Terminal window.
2. Execute these next commands below:

```bash

# 1. Install Hexo.io
npm install -g hexo-cli

# 2. Download the source code from GitHub
$ git clone https://github.com/dcanetma/danielcanet-site

# 3. Go to the project's folder
$ cd danielcanet-site
```

> **Important**: You only need to execute the above commands once.

## Managing the website on your computer

Once you have donwloaded the project, you are ready to start managing the website contents.

1. Open a Terminal window.
2. Execute these next commands below:

```bash
# 1. Go to the project's folder
$ cd danielcanet-site

# 2. Install/update project dependencies (plugins and stuff)
npm install

# 3. Run the website on your computer
npm start
```

3. Visit http://localhost:4000/ to watch the site.

## Publish the website to the hosting provider

This project uses [GitHub Actions](https://github.com/features/actions) to publish the website to the internet.

The logic of the publishing procedure to the hosting server is store on this [GitHub Actions workflow file](.github/workflows/cy.yml).

Whenever you want to publish the website to your hosting provider, there are two methods available: 
- [Automatic publishing method](#automatic-publishing-method)
- [Manual publishing method](#manual-publishing-method)

Both methods use the [FTP credentials stored on the secrets project settings](https://github.com/dcanetma/danielcanet-site/settings/secrets/actions) at GitHub.

### Automatic publishing method

1. Merge changes from master to deploy
2. Go to [Actions tab on the GitHub's project](https://github.com/dcanetma/danielcanet-site/actions/workflows/cy.yml).
3. Wait for the "Build and publish ..." job to finish.
4. Visit the website at [www.danielca.net](http://www.danielca.net).

### Manual publishing method

1. Go to [Actions tab on the GitHub's project](https://github.com/dcanetma/danielcanet-site/actions).
2. Select the ["Build and publish..." job](https://github.com/dcanetma/danielcanet-site/actions/workflows/cy.yml) 
3. Run workflow on the desired branch. 
4. Wait for the "Build and publish ..." job to finish.
5. Visit the website at [www.danielca.net](http://www.danielca.net).

#### Setting up FTP credentials

**Important**: You will need to update these settings whenever you need to change the hosting provider or the FTP user and password.

You can manage the the [FTP credentials stored on the secrets project settings](https://github.com/dcanetma/danielcanet-site/settings/secrets/actions) at GitHub Actions.

The FTP configuration store at secrets is defined by these next settings:

* `FTP_SERVER`: URL to publish the website to.
* `FTP_USERNAME`: FTP username.
* `FTP_PASSWORD`: FTP password.
* `FTP_REMOTE`: Remote folder to publish to.

> **Note**: There are certain hosting providers, like CD-Mon, that disable their FTP service if it is not been used for 30 days. 

## License

MIT - Daniel Canet