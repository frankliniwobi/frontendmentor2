<script setup>
import PrimaryButton from './components/PrimaryButton.vue';
import Testimonials from './components/Testimonials.vue';
import NavItem from './components/NavItem.vue';
import HamburgerIcon from './components/icons/HamburgerIcon.vue';
import XIcon from './components/icons/XIcon.vue';
import TrackItems from './components/TrackItems.vue';
import MenuLinks from './components/MenuLinks.vue';
import LightButton from './components/LightButton.vue';
import FooterLink from './components/FooterLink.vue';
import { ref } from 'vue';

const modalOpen = ref(false);

function open() {
    modalOpen.value = true;
};

function close() {
    modalOpen.value = false;
};
</script>

<template>
    <main  class="container mx-auto py-16 px-6 mb:px-8 max-w-7xl">
        <!-- Nav Section -->
        <nav class="container flex justify-between items-center mx-auto">
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
            <div class="md:hidden" >
                <button type="button" v-if="! modalOpen" @click="open" >
                    <HamburgerIcon />
                </button>
                <button type="button" v-if="modalOpen" @click="close" >
                    <XIcon />
                </button>
            </div>
        </nav>
        <!-- End Nav Section -->

        <!-- Overlay Menu -->
        <Transition>
            <div v-show="modalOpen" class="md:hidden">
                <div class="absolute rounded-md flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-secondary sm:w-auto sm:self-center left-6 right-6 drop-shadow-lg">
                    <MenuLinks value="Pricing" @click="close" />
                    <MenuLinks value="Product" @click="close" />
                    <MenuLinks value="About Us" @click="close" />
                    <MenuLinks value="Careers" @click="close" />
                    <MenuLinks value="Community" @click="close" />
                </div>
            </div>
        </Transition>
        <!-- End Overlay Menu -->

        <!-- Hero Section -->
        <section class="container mt-16 mx-auto flex flex-col-reverse items-center md:flex-row md:justify-between md:mt-32 md:items-start" >
            <div class="flex flex-col space-y-6 items-center md:items-baseline" >
                <h1 class="font-bold text-4xl xs:w-sm sm:w-md max-w-lg sm:text-6xl text-secondary text-center sm:leading-[60px] md:text-left">
                    Bring everyone together
                    to build better products.
                </h1>
                <p class="text-lg sm:text-2xl xs:w-sm sm:w-md max-w-md text-center text-dark-grey md:text-left md:px-0" >
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

        <!-- About Section -->
        <section class="container mt-16 mx-auto flex flex-col flex-1 items-center gap-10 md:flex-row justify-between md:items-start" >
            <div class="flex flex-col gap-3">
                <h2 class="font-bold text-4xl leading-[50px] text-center text-secondary md:text-left" >
                    What's different about Manage?
                </h2>
                <p class="text-md leading-8 text-dark-grey max-w-3xl text-center md:text-justify" >
                    Manage provides all the functionality your team
                    needs without the complexity. Our software is
                    tailor-made for modern digital product teams.
                </p>
            </div>
            <div class="flex flex-col gap-10" >
                <TrackItems
                    number="01"
                    heading="Track company-wide progress"
                    body="See how your day-to-day task fit into the wider
                    vision. Go from tracking progress at the milestone
                    all the way down to the smallest of details.
                    Never loose sight of the bigger picture again."
                />
                <TrackItems
                    number="02"
                    heading="Advanced built-in reports"
                    body="Set internal delivery estimates and track progress
                    towards company goals. Our customisable dashboard helps
                    you build out the reports you need to keep key
                    stakeholders informed."
                />
                <TrackItems
                    number="03"
                    heading="Everything you need in one place"
                    body="Stop jumping one service to another to comunicate,
                    store file, track tasks and share documents. Manage offers
                    an-all-in one team productivity solution."
                />
            </div>
        </section>
        <!-- End About Section -->
    </main>

    <!-- Testimonial Section -->
    <section class="container mt-16 mx-auto space-y-16" >
        <h3 class="font-bold text-center text-secondary text-3xl" >What they've said</h3>
        <Testimonials />
        <div class="text-center">
            <PrimaryButton value="Get Started" />
        </div>
    </section>
    <!-- Testimonial Section -->

    <!-- Call-to-action Section -->
    <section id="call-to-action" class="container mt-16 bg-primary w-full mx-auto py-20 px-8 md:px-20 " >
        <div class="flex flex-col gap-6 justify-center items-center md:flex-row md:justify-between " >
            <h3 class="text-white font-bold text-5xl sm:text-4xl text-center max-w-md md:text-left" >
                Simplify how your team works today.
            </h3>
            <LightButton value="Get Started" />
        </div>
    </section>
    <!-- End Call-to-action Section -->

    <!-- Footer Section -->
    <footer class="container flex flex-col justify-center items-center gap-10 bg-dark w-full mx-auto py-16 px-8 md:hidden" >
        <form class="flex justify-between items-center gap-2 flex-1" >
            <input type="text" placeholder="Updates in your inbox.."
                class="p-2 px-5 rounded-full"
            />
            <PrimaryButton extra="max-w-lg" value="GO" />
        </form>

        <div class="flex items-start w-full justify-between px-8 " >
            <ul class=" space-y-3" >
                <FooterLink value="Home" />
                <FooterLink value="Pricing" />
                <FooterLink value="Products" />
                <FooterLink value="About US" />
            </ul>
            <ul class=" space-y-3">
                <FooterLink value="Careers" />
                <FooterLink value="Communities" />
                <FooterLink value="Privacy Policy" />
            </ul>
        </div>

        <div class="flex justify-between items-center gap-8 w-full" >
            <img src="/images/icon-facebook.svg" alt="facebook">
            <img src="/images/icon-youtube.svg" alt="youtube">
            <img src="/images/icon-twitter.svg" alt="twitter">
            <img src="/images/icon-pinterest.svg" alt="pinterest">
            <img src="/images/icon-instagram.svg" alt="instagram">
        </div>

        <img src="/images/logo-white.svg" alt="logo">

        <span class="text-xs text-white/70" >
            Copyright 2020. All Rights Reserved
        </span>
    </footer>

    <!-- Large Screens -->
    <footer class="hidden container md:flex flex-row justify-around items-stretch gap-10 bg-dark w-full mx-auto p-16" >
        <div class="flex flex-col justify-center" >
            <img src="/images/logo-white.svg" alt="logo">
            <div class="flex justify-between items-center gap-4 mt-auto" >
                <img src="/images/icon-facebook.svg" alt="facebook">
                <img src="/images/icon-youtube.svg" alt="youtube">
                <img src="/images/icon-twitter.svg" alt="twitter">
                <img src="/images/icon-pinterest.svg" alt="pinterest">
                <img src="/images/icon-instagram.svg" alt="instagram">
            </div>
        </div>

        <div class="flex items-start justify-between space-x-16" >
            <ul class=" space-y-3" >
                <FooterLink value="Home" />
                <FooterLink value="Pricing" />
                <FooterLink value="Products" />
                <FooterLink value="About US" />
            </ul>
            <ul class=" space-y-3">
                <FooterLink value="Careers" />
                <FooterLink value="Communities" />
                <FooterLink value="Privacy Policy" />
            </ul>
        </div>

        <div class="flex flex-col items-end p-0">
            <form class="flex justify-between items-center gap-2" >
                <input type="text" placeholder="Updates in your inbox.."
                    class="p-2 px-5 rounded-full"
                />
                <PrimaryButton extra="max-w-lg" value="GO" />
            </form>
            <span class="text-xs text-white/70 mt-auto" >
                Copyright 2020. All Rights Reserved
            </span>
        </div>
    </footer>
    <!-- End Footer Section -->
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.8s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
