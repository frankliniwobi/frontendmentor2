<script setup>
import { defineProps } from 'vue';
import PrimaryButton from './PrimaryButton.vue';

const props = defineProps({
    number: String,
    heading: String,
    body: String,
});
</script>

<template>
    <!-- Small Screens -->
    <div class="space-y-3 md:hidden" >
        <div class="bg-light rounded-l-full flex items-center gap-3" >
            <PrimaryButton :value="props.number" />
            <span class="font-bold text-secondary text-sm" >
                {{ props.heading }}
            </span>
        </div>
        <p class="justify-left text-base text-dark-grey p-0 leading-7" >
            {{ props.body }}
        </p>
    </div>
    <!-- End Small Screens -->

    <!-- Large Screens -->
    <div class="hidden space-x-5 flex-row flex-nowrap items-start md:flex">
        <PrimaryButton :value="props.number" />
        <div class="flex flex-col gap-3 items-start" >
            <span class="font-bold text-secondary text-md max-w-md" >
                {{ props.heading }}
            </span>
            <span class="text-justify text-base text-dark-grey p-0 max-w-4xl" >
                {{ props.body }}
            </span>
        </div>
    </div>
    <!-- End Large Screens -->
</template>
