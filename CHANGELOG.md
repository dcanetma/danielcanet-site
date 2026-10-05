# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unreleased

- ci-cd: fix SFTP deployment to upload compiled contents, including hidden files, directly into the server web root instead of a nested public directory

## v2.4.1 - Aug 25, 2026

- ci-cd: switch from rsync to SFTP-based deployment for SFTP-only server compatibility

## v2.4.0 - Aug 25, 2026

- ci-cd: update build and publish website task using SFTP and the new server

## v2.3.7 - Aug 6, 2026

- feature: remove twitter link for good

## v2.3.6 - Jun 6, 2023 

- chore: unpublish PDF resume

## v2.3.x - Apr 2023

- content: bring back and refresh the two-page PDF resume
- content: refresh profile copy, typography, and profile image

## v2.2.11 - Mar 28, 2023

- feature: add new profile image as PNG
- ci-cd: update the deployment pipeline and dependency set

## v2.1.x - May-Jul 2022

- feature: add a downloadable CV/resume from the homepage
- content: update the resume through the v1.3 document series
- content: correct the GitHub profile link
- chore: reduce stale HTML caching after deployments

## v2.0.15 - Apr 14, 2022

- content: rewrite and polish the homepage bio and profile text
- content: add the GitHub profile link and update social/contact details
- styles: improve the responsive experience across mobile and tablet layouts
- theme: refresh the visual style, favicon, metadata, and cache handling
- chore: remove old static/data assets and clean up site configuration

## v1.x - Jan 2021-Mar 2022

- feature: launch the Hexo-based professional profile website
- content: add the first profile, skills, contact, and social-link content
- styles: add the original custom theme, dark-mode support, typography, and animations
- ci-cd: add deployment automation, then migrate publishing to GitHub Actions
- chore: update domain, HTTPS, dependencies, and early site metadata
