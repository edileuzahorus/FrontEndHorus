<template>
  <input :type="inputType" v-model="valueInput" :placeholder="placeholder" />
</template>

<script>
export default {
  updated() {
    this.$emit("value", this.valueInput);
  },
  async mounted() {
    console.log(this);
  },
  name: "InputComponent",
  components: {},
  props: {
    placeholder: String,
    inputType: String,
    model: String,
  },
  data() {
    return {
      valueInput: "",
    };
  },
};
</script>

<style scoped>
input {
  border: 0;
  width: 70%;
  height: 30px;
  border-radius: 5px;
}
</style>
