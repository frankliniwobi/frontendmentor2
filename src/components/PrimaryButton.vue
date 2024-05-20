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
        'text-white text-sm font-bold bg-primary text-nowrap p-1.5 transition-colors duration-300 rounded-full px-6 shadow-primary/50 shadow-md hover:shadow-lg hover:shadow-primary/60 hover:bg-primary/80'
    ]
    "
    >{{ value }}
    </button>
</template>
