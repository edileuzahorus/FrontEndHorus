<template>
  <div id="Container">
    <button @click="() => $emit('press')">{{ children }}</button>
  </div>
</template>

<script>
export default {
  methods: {},
  async mounted() {},
  props: { children: String },
  name: "ButtonPersonal",
};
</script>

<style escoped>
#Container {
  position: absolute;
  right: 0;
  top: 0;
  width: 50%;

  z-index: 1;
}
button {
  margin-top: 15px;

  border: 0;
  border-radius: 5px;

  width: 250px;
  height: 35px;

  background-color: #02c39a;

  color: #fff;
  font-family: "Poppins", sans-serif;
  font-size: 15px;

  cursor: pointer;

  transition: background-color 0.2s;
}
button:hover {
  background-color: #02e3b2;
}
</style>
