<script setup>
import PrimaryButton from './components/PrimaryButton.vue';
import NavItem from './components/NavItem.vue';
import HamburgerIcon from './components/icons/HamburgerIcon.vue';
</script>

<template>
    <main class="container mx-auto py-16 px-6 mb:px-8 max-w-7xl min-w-sm" >
        <!-- Nav Section -->
        <nav class="container flex justify-between items-center">
            <div>
                <img src="/images/logo.svg" alt="logo">
            </div>
            <ul class="hidden md:flex space-x-10">
                <NavItem msg="Pricing" />
                <NavItem msg="Product" />
                <NavItem msg="About US" />
                <NavItem msg="Careers" />
                <NavItem msg="Community" />
            </ul>
            <PrimaryButton extra="hidden md:block" value="Get Started" />
            <!-- Mobile View -->
            <button class="md:hidden" >
                <HamburgerIcon />
            </button>
        </nav>
        <!-- End Nav Section -->

        <!-- Hero Section -->
        <section class="container mt-16 flex flex-col-reverse items-center md:flex-row md:justify-between md:mt-32 md:items-start" >
            <div class="flex flex-col space-y-6 items-center md:items-baseline" >
                <h1 class="font-bold sm:w-md max-w-lg text-6xl text-secondary text-center leading-[60px] md:text-left">
                    Bring everyone together
                    to build better products.
                </h1>
                <p class="text-2xl sm:w-md max-w-md text-center text-dark-grey md:text-left md:px-0" >
                    Manage makes it simple for software teams to
                    plan day-to-day tasks while keeping the larger team
                    goals in view.
                </p>
                <div class="text-center pt-6 md:text-left" >
                    <PrimaryButton value="Get Started" />
                </div>
            </div>

            <div  >
                <img src="/images/illustration-intro.svg" alt="stats">
            </div>
        </section>
        <!-- End Hero Section -->
    </main>
</template>
