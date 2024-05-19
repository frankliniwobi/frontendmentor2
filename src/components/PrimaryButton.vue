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
        'text-white bg-primary text-nowrap p-2 transition-colors duration-300 rounded-full px-5 text-lg shadow-primary/50 shadow-md hover:shadow-lg hover:shadow-primary/60 hover:bg-primary/80'
    ]
    "
    >{{ value }}
    </button>
</template>
