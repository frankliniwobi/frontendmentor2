<script setup>
defineProps({
  msg: String,
})
</script>
<template>
    <li class="text-md text-secondary transition-colors duration-300 font-bold cursor-pointer hover:underline underline-offset-8 decoration-primary decoration-2" >
        {{ msg }}
    </li>
</template>
