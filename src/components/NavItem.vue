<script setup>
defineProps({
  msg: String,
})
</script>
<template>
    <li class="text-md text-secondary font-bold" >{{ msg }}</li>
</template>
