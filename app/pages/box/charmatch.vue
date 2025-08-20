<template>
  <a href="/">lumaa.fr</a>
  <div class="list">
    <template v-for="i in inputs" :key="i.id" key>
      <span>
        {{ i.id }}
        <input type="text" v-model="i.content" @input="countAll"/>
        <button @click="removeI" v-if="i.id == (inputs.length - 1) && inputs.length > 1">-</button>
      </span>
    </template>
    <button @click="addI">New input</button>
  </div>
  <div class="match">
    <span class="chars" v-for="c in chars" :class="c.char.toLowerCase()">
      <p v-for="char in Array(c.length).fill(c.char).join('')" :key="char">{{ char }}</p>
      <button @click="removeC" v-if="chars[chars.length - 1] == c">-</button>
    </span>
    <span>
      <input type="text" v-model="newLetter" @input="newCChange" />
      <input type="number" v-model="newLength" @input="newLChange" />
    </span>
    <button @click="addC">New char</button>
  </div>
</template>

<script lang="ts" setup>
const lastId = ref(0);
const inputs = ref([{ id: lastId.value, content: "" }]);

const newLetter = ref("B");
const newLength = ref(1);
const chars = ref([{ char: "A", length: 9 }])

function addI() {
  lastId.value++;
  inputs.value.push({ id: lastId.value, content: "" });
}

function removeI() {
  lastId.value--
  inputs.value.pop();
}

function newCChange() {  
  newLetter.value = newLetter.value.toUpperCase();
  if (newLetter.value.length > 1) { newLetter.value = newLetter.value.charAt(1) };
}

function newLChange() {
  newLength.value = isNaN(Number(newLength.value)) ? 1 : Math.max(1, Number(newLength.value));
}

function addC() {
  chars.value.push({ char: newLetter.value, length: newLength.value })
  newLetter.value = "A";
  newLength.value = 1;
}

function removeC() {
  chars.value.pop();
}

function countAll(event: Event) {
  document.querySelectorAll("*.used").forEach(c => { 
    if (c instanceof HTMLElement) {
      c.classList.remove("used"); 
      c.style.color = "";
    }
  });

  const allInputs = document.querySelectorAll(".list input")

  allInputs.forEach((i) => {
    if (i instanceof HTMLInputElement) {
      i.value = i.value.replace(/[^A-Za-z]/g, "");
      const chars = i.value.split("");
      
      chars.forEach((c) => {
        let elm: HTMLElement|null = document.querySelector(`.chars.${c.toLowerCase()} > p:not(p.used)`)
        
        if (elm) {
          elm.classList.add("used");
          elm.style.color = "red";
        } else {
          i.value = i.value.substring(0, i.value.length - 1)
        }
      })
    }
  })
}
</script>

<style scoped>
.list, .match {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  font-family: monospace;
  gap: 10px;
}

.list > * {
  width: fit-content;
}

button, input, span {
  font-size: 1.2em;
}

.match, .list {
  padding-top: 15vh;
}

.match input {
  width: 60px;
}

.match .chars {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.match .chars button {
  height: 40px;
  margin: 10px;
}

.match .chars > p {
  padding: 0;
  margin: 0;
}

.chars.a > p.used {
  color: red;
}
</style>