<script setup>
import PrimaryButton from './components/PrimaryButton.vue';
import Testimonials from './components/Testimonials.vue';
import NavItem from './components/NavItem.vue';
import HamburgerIcon from './components/icons/HamburgerIcon.vue';
import TrackItems from './components/TrackItems.vue';
import LightButton from './components/LightButton.vue';
</script>

<template>
    <main class="container mx-auto py-16 px-6 mb:px-8 max-w-7xl">
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
            <button class="md:hidden" >
                <HamburgerIcon />
            </button>
        </nav>
        <!-- End Nav Section -->

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
    <section class="container mt-16 bg-primary w-full m-auto py-20 px-8 md:px-20 " >
        <div class="flex flex-col gap-6 justify-center items-center md:flex-row md:justify-between " >
            <h3 class="text-white font-bold text-4xl text-center max-w-md md:text-left" >
                Simplify how your team works today.
            </h3>
            <LightButton value="Get Started" />
        </div>
    </section>
    <!-- End Call-to-action Section -->
</template>
