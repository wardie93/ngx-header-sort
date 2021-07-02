# ngx-header-sort

A simple directive to add icons to display sorting status of tables and automatically flip the icon for ascending/descending.

[![npm version](https://badge.fury.io/js/ngx-header-sort.svg)](https://badge.fury.io/js/ngx-header-sort)

## Table of contents
- [ngx-header-sort](#ngx-header-sort)
  - [Table of contents](#table-of-contents)
  - [Demo](#demo)
  - [Installation](#installation)
    - [NPM](#npm)
  - [Getting started](#getting-started)
  - [Customisation](#customisation)
    - [Styles](#styles)

## Demo

For a demo, download the repository, then run the following commands

```
npm run watch:lib
npm start
```

The first command will compile `ngx-header-sort`, the second command will open a demo site that shows this working.

## Installation
Install `ngx-header-sort` via NPM, using the command below.

### NPM
```shell
npm install --save ngx-header-sort
```

## Getting started
Import the `NgxHeaderSortModule` in your root application module:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxHeaderSortModule } from 'ngx-header-sort';

@NgModule({
  //...
  imports: [
    //...
    NgxHeaderSortModule.forRoot()
  ],
  //...
})
export class AppModule { }
```

You must mark a HTML element as being an element that will have the sort icon appended within it.

```html
<div ngxHeaderSort></div>
```

This will create a new element within this marked HTML element that will display the icon. This can be customised using CSS classes. See [Customisation](#customisation)

## Customisation

There is only one thing that you can customise and that is the default icon to display when displaying that you are sorting in the ascending direction. This is setup as part of the initial module setup.

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxHeaderSortModule } from 'ngx-header-sort';

@NgModule({
  //...
  imports: [
    //...
    NgxHeaderSortModule.forRoot({
        config: {
            ascendingIconClass: 'fas fa-arrow-up'
        }
    })
  ],
  //...
})
export class AppModule { }
```

### Styles

You also want to include the styles for the library as this is where the animation is contained.

```scss
@import 'ngx-header-sort/assets/ngx-header-sort.scss';
```
