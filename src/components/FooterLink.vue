<script setup>
defineProps({
    value: String
})
</script>

<template>
    <li class="text-white/80 text-md">
        {{ value }}
    </li>
</template>
