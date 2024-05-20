<script setup>
defineProps({
  value: String,
  extra: {
    type : String,
    default: ''
  },
})
</script>
<template>
    <button type="button"
    :class="[
        extra,
        'text-primary text-sm font-bold bg-white text-nowrap p-2 transition-colors duration-300 rounded-full px-6 shadow-primary/50 shadow-md hover:shadow-lg hover:shadow-primary/60 hover:bg-white/80 md:text-md '
    ]
    "
    >{{ value }}
    </button>
</template>
