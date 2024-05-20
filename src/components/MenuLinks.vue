<script setup>
defineProps({
    value: String
})
</script>

<template>
    <button type="button" class="text-white/80 text-sm hover:underline decoration-2 underline-offset-8" >
        {{ value }}
    </button>
</template>
