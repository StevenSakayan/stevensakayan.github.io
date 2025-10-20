<script setup>
	import Skill from './SkillBubble.vue'
import Window from './WindowContainer.vue';
</script>

<template>
	<Window title="Development Skills.exe">
		<div class="px-10 py-10 max-sm:px-4">
      <div class="divider">Core Languages</div>
      <div class="flex flex-wrap justify-center gap-5">
        <Skill name="Java" image="./images/java-original.svg"/>
        <Skill name="C#" image="./images/csharp-plain.svg"/>
        <Skill name="Python" image="./images/python-original.svg"/>
        <Skill name="HTML" image="./images/html5-original.svg"/>
        <Skill name="CSS" image="./images/css3-original.svg"/>
        <Skill name="JavaScript" image="./images/javascript-original.svg"/>
        <Skill name="SQL" image="./images/sql.svg"/>
		  </div>

      <div class="divider py-10">Libraries & Frameworks</div>

			<div class="flex flex-wrap justify-center gap-5">
        <Skill name="Vue" image="./images/vuejs-original.svg"/>
        <Skill name="Vuetify" image="./images/vuetify-original.svg"/>
        <Skill name="Quasar" image="./images/quasar-original.svg"/>
        <Skill name="FastAPI" image="./images/fastapi-original.svg"/>
        <Skill name="Express.js" image="./images/express-original.svg"/>
        <Skill name="SQL" image="./images/sql.svg"/>
		  </div>

		  <div class="divider py-10">Other Skills</div>

      <div class="flex flex-wrap justify-center gap-5">
        <Skill name="Gamemaker" image="./images/gamemaker.svg"/>
        <Skill name="Unity" image="./images/unity-plain.svg"/>
        <Skill name="Godot" image="./images/godot-original.svg"/>
        <Skill name="Blender" image="./images/blender-original.svg"/>
        <Skill name="Substance Painter" image="./images/substance-painter.svg"/>
      </div>
    </div>
	</Window>
</template>
