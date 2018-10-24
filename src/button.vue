<template>
  <button class="m-button"><slot></slot></button>
</template>
<script>
export default {
  name:'m-button'
}
</script>
<style>
    .m-button {
      height: var(--button-height);
      padding: 0 1em;
      font:inherit;
      border-radius: var(--border-radius);
      border:1px solid var(--border-color);
      background-color: var(--button-bg);
    }
    .m-button:hover {
      border-color:var(--border-color-hover)
    }
    .m-button:focus {
      outline:none;
    }
  </style>