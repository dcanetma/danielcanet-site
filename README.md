# Daniel Canet website

[![Build Status](https://travis-ci.org/dcanetma/danielcanet-site.svg?branch=main)](https://travis-ci.org/dcanetma/danielcanet-site)

## Getting started

Requirements are node and hexo client. 

> To install node.js refer to the online documentation .

So, first of all clone or download this repository on any folder. 

You'll need to install the Hexo CLI and the dependencies.

Open a Terminal session, and on the new folder type this:

``` 
$ npm install -g hexo-cli  
$ npm install  
```

> If you run into problems when using the -g option, check this URL for a quick fix.
> url: https://stackoverflow.com/questions/33725639/npm-install-g-less-does-not-work-eacces-permission-denied

## Configuration

- Create a '_config.deploy.yml' file based on '_config.deploy.sample.yml'
- Create a 'source/contact-credentials.php' file based on 'source/contact-credentials-sample.php'.

You're ready to go. :)

## Commands

Now you can run an instance of the site on your local machine.

``` 
$ npm start
```

This will start a local instance of the site. Visit http://localhost:4000/. 

> PHP scripts will not work here.

To test the php scripts you'll need a local server with PHP support on you local machine.

``` 
$ npm run develop
```

For Theme development. Runs a local instance of the site and proxies to an already existant local server with PHP support on 'http://danielca.dev/' indexing '/public' folder.


### Manual Deployment

Follow the instructions on the 'deploy' section of the HEXO 'config.yml' file and npm package commands.  

You'll need to create a 'config.deploy.yml' file with the FTP credentials.


``` 
$ npm run deploy
```

Generates the site using the deploy variables file and publish its to the LIVE server using SFTP and the local connection. 

``` 
$ npm run generate
```

Generates the site using the deploy variables file and publish its to a local folder: 'public'.
Useful for manual deploys to local/DEV server.


### Continuous integration Deployment

We use Travis for automated deployments to the live server.

https://travis-ci.org/dcanetma/danielcanet-site

> IMPORTANT: The deploy to the live server is only made on the 'deploy' branch.

You may need to update the environment variables on Travis to set the credentials for both FTP & SMTP servers.


#### CHMOD Permissions

Set CHMOD permissions to 440 on the following files on the live server after the first deploy ever:

    .htaccess
    contact-credentials.php

So whenever these files need to be updated to the live server, you'd need to delete them first.

This security measure is important and it's adviced to follow it to avoid security issues.


## License

MIT - facts&fictions