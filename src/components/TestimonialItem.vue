<script setup>
const props = defineProps({
    image: String,
    name: String,
    testimony: String,
})
</script>

<template>
    <div class="flex flex-col gap-6 justify-center rounded-sm items-center p-5 bg-light-grey max-w-sm" >
        <img :src="props.image" alt="avatar" class="w-16 h-16 -mt-12" >
        <p class="text-secondary font-bold text-lg" >{{ props.name }}</p>
        <p class="text-dark-grey leading-7 text-center text-sm" >
            {{ props.testimony }}
        </p>
    </div>
</template>
