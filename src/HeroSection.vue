<script setup>
  import BinaryTyper from './BinaryTyper.vue';
  import Window from './WindowContainer.vue';
  import GithubIcon from '@/icons/github-original.svg';
  import LinkedInIcon from '@/icons/linkedin-original.svg';
  import MailIcon from '@/icons/mail-icon.svg';
  import PhoneIcon from '@/icons/phone-icon.svg';
  import HeroLinkIcon from './HeroLinkIcon.vue'
</script>

<template>
	<div class="hero flex items-center justify-center">
		<Window class="" title="Hello World.cmd">
			<div class="flex items-center h-auto gap-2 p-10 max-md:flex-col">
				<div class="">
					<BinaryTyper text="Hello World!" :speed="30" class="max-w-80 max-h-20 text-left text-3xl font-bold overflow-hidden text-clip"></BinaryTyper>
					<h2 class="text-2xl">Welcome to my Portfolio!</h2>
				</div>
				<div class="divider divider-horizontal max-md:divider-vertical"></div>
				<div class="items-center text-center">
					<div class="avatar py-4 indicator" >
            <span class="indicator-item badge badge-primary bg-emerald-600 border-emerald-300 border-2 font-bold w-20 rounded-3xl h-auto text-wrap right-10 top-10 animate-bounce">Looking for work!</span>
            <div class="max-w-64 rounded-full ring-3 ring-emerald-300">
              <img src="/images/me.jpeg"/>
            </div>
					</div>
					<h2 class="text-3xl font-bold">Steven Sakayan</h2>
					<h2 class="text-2xl">Software & Fullstack Engineer</h2>
          <div class="divider divider-vertical"></div>
          <div class="flex justify-center gap-2 pb-3">
            <HeroLinkIcon href="https://github.com/StevenSakayan"><GithubIcon/></HeroLinkIcon>
            <HeroLinkIcon href="https://www.linkedin.com/in/steven-sakayan-a224082bb/"><LinkedInIcon/></HeroLinkIcon>
          </div>
          <div class="flex justify-center items-center gap-1">
            <MailIcon class="w-8 h-8"/>
            <a href="mailto:stevensakayan@gmail.com" class="link">stevensakayan@gmail.com</a>
          </div>
          <div class="flex justify-center items-center gap-1">
            <PhoneIcon class="w-8 h-8"/>
            <a href="tel:+447570754805" class="link">+447570754805</a>
          </div>
				</div>
			</div>
		</Window>
	  </div>
</template>

<style lang="css">
  .hero {
    height: 92vh;
  }
</style>
