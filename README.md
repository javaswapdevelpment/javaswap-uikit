# 🥞 JavaSwap UIkit

[![Version](https://img.shields.io/npm/v/@javaswap/uikit)](https://www.npmjs.com/package/@javaswap/uikit) [![Size](https://img.shields.io/bundlephobia/min/@javaswap/uikit)](https://www.npmjs.com/package/@javaswap/uikit)

JavaSwap UIkit is a set of React components and hooks used to build pages on JavaSwap's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add @javaswap/uikit`

## Setup

### Theme

Before using JavaSwap UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@javaswap/uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@javaswap/uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.

## How to use the UIkit

If you want to use components from the UIkit, check the [Storybook documentation](https://pancakeswap.github.io/pancake-uikit/)
