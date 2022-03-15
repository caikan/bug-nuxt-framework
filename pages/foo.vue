<template lang="pug">
div
  Html.foo-class
    Head
      Title foo title
      Script(src="/foo-script-nested-in-html-tag.js")
  Script(src="/foo-script-out-of-html-tag.js")
  h1 hello foo
  div: nuxt-link(to="/") index
</template>