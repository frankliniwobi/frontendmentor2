<script setup>
import TestimonialItem from './TestimonialItem.vue';
</script>

<template>
    <!-- Small Screens -->
    <div class="flex flex-col gap-6 min-w-sm justify-center items-center md:hidden" >
        <TestimonialItem
            image="/images/avatar-ali.png"
            name="Ali Bravo"
            testimony='"We have been able to cancel so many other
            subscription since using Manage. There is no more
            cross-channel confusion and everyone is much more focused." '
        />
        <div class="flex gap-2 justify-center items-center" >
            <button class="border-primary border-2 rounded-full w-2 h-2 bg-transparent text-white" ></button>
            <button class="border-primary border-2 rounded-full w-2 h-2 bg-primary" ></button>
            <button class="border-primary border-2 rounded-full w-2 h-2 bg-transparent" ></button>
            <button class="border-primary border-2 rounded-full w-2 h-2 bg-transparent" ></button>
        </div>
        <!-- TODO: Make the carousel work -->
    </div>
    <!-- Large Screens -->
    <div class="hidden md:flex flex-nowrap justify-between gap-3 min-w-sm" >
        <TestimonialItem
            image="/images/avatar-anisha.png"
            name="Anisha Li"
            testimony='"Manage has supercharged our teams workflow. The
            help maintain visibility on larger milestones at times,
            keeping everyone motivated." '
        />
        <TestimonialItem
            image="/images/avatar-ali.png"
            name="Ali Bravo"
            testimony='"We have been able to cancel so many other
            subscription since using Manage. There is no more
            cross-channel confusion and everyone is much more focused." '
        />
        <TestimonialItem
            image="/images/avatar-richard.png"
            name="Richard Watts"
            testimony='"Manage allows us to provide structure and profit
            it keeps us organized and focused. I cant stop recommending
            them to everyone I talk to." '
        />
    </div>
</template>
