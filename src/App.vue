<script setup>
import PrimaryButton from './components/PrimaryButton.vue';
import HelloWorld from './components/HelloWorld.vue'
import NavItem from './components/NavItem.vue';
import HamburgerIcon from './components/icons/HamburgerIcon.vue';
</script>

<template>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
    <main class="container max-w-[1440px] min-w-[375px] mx-auto" >
        <nav class="flex justify-evenly items-center p-6">
            <div>
                <img src="/images/logo.svg" alt="logo">
            </div>
            <ul class="hidden md:flex space-x-2">
                <NavItem msg="Pricing" />
                <NavItem msg="About US" />
                <NavItem msg="Careers" />
                <NavItem msg="Community" />
            </ul>
            <PrimaryButton extra="hidden md:block" value="Get Started" />
            <!-- Mobile View -->
            <button>
                <HamburgerIcon class="md:hidden" />
            </button>
        </nav>
    </main>
</template>
