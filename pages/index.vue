<template lang="pug">
div
  Html.index-class(index-html-attr)
    Head
      Title index title
  h1 hello index
  div: nuxt-link(to="/foo") foo
</template>