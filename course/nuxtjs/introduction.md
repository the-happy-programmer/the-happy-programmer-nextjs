---
icon: 'nuxtjs'
coursetitle: 'Markdown NuxtJS Website'
title: 'Introduction'
description: 'Example using Prism / Markdown with Next.js including switching syntax highlighting themes.'
---

## Overview

## Overview

In this course we will creare a nuxtjs project which can read markdwon files and turn them in pages. In this case we will do it in a way where it will be something like a blog.

This course aims to create a full website, which means we will take into account eveything that makes a professional website. From SEO to performance, this course will add in your arsenal how to deal with `.md` files.

Markdown, is a simpler way to write a post. In other wards is a markup language for formating text.

## Configure Your System

The first step to create any project, is to prepare your system.

We start with the version of `NuxtJS` in this case is `2.15.7`

We will go throught all the packages we will use in this course so we get them out of the way. Note, we will mention all the packages again, but if you follow it now. it will save you some time.

## Install NuxtJS

if you don't have nuxtjs, install `NuxtJS`. The way to do this is by using the `npx` command.
In order to do this, you need to install the `npm` package manager. This is a package manager that is used to install packages.

```bash
$ npx create-nuxt-app <project-name>
```

## Install Svg

Throught the website we will use SVGs. SVGs are a way to create vector images. SVGs are a lot more efficient than PNGs and JPGs. They are lighter and your website will load faster. On the top of that they look sharper. In nuxtjs we will impliment them in the `~/assets` folder. But first we need to install

```bash
$ npm i --save-dev @nuxtjs/svg
```

they way to include them in your components is my import

```javascript
<script>import {Icon} from '@nuxtjs/svg'</script>
```
