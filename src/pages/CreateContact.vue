<template>
  <div id="Container">
    <div id="Background" @click="() => $emit('press')"></div>
    <div id="ContactContainer">
      <div>Save a Contact</div>
      <div>
        <InputComponent @value="getName" v-model="name" placeholder="Name" />
        <InputComponent
          max="15"
          inputType="number"
          @value="getTelephone"
          v-model="telephone"
          placeholder="Telephone"
        />
        <InputComponent
          max="3"
          inputType="number"
          @value="getDDD"
          v-model="ddd"
          placeholder="DDD"
        />
        <ButtonPersonal v-on:press="showValues" children="Add" />
      </div>
    </div>
  </div>
</template>

<script>
import InputComponent from "../components/Input.vue";
import ButtonPersonal from "../components/Button.vue";
import api from "../api";

export default {
  mounted() {
    if (this.contact != {}) {
      this.name = this.contact.name;
      this.telephone = this.contact.telephone;
      this.ddd = this.contact.ddd;
      this.id = this.contact.id;
    }
  },
  methods: {
    async showValues() {
      const { name, telephone, ddd } = this;
      if (telephone.length > 15 || ddd.length > 3 || name.length < 4) {
        return;
      }
      const data = {
        name: name,
        telephone: telephone,
        ddd: ddd,
      };
      let response;
      if (this.id >= 0) {
        response = await api.update(data, this.id);
      } else {
        response = await api.create(data);
      }
      if (response.status == 202) {
        this.$emit("press");
        return;
      }
    },
    getName(value) {
      this.name = value;
    },
    getTelephone(value) {
      this.telephone = value;
    },
    getDDD(value) {
      this.ddd = value;
    },
  },
  props: {
    contact: Object,
  },
  name: "CreateContact",
  components: { InputComponent, ButtonPersonal },
  data() {
    return {
      name: "",
      telephone: "",
      ddd: "",
      id: "",
    };
  },
};
</script>

<style scoped>
#Container {
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #fff;
  font-family: "Poppins", sans-serif;
  font-size: 15px;
}

#Background {
  position: absolute;
  z-index: 2;

  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
#ContactContainer input {
  margin-top: 20px;
}
#ContactContainer div {
  position: relative;
}
#ContactContainer div button {
  margin: 0 !important;
}
#ContactContainer {
  width: 25%;
  height: 40%;

  background-color: #262626;
  border-radius: 5px;

  position: absolute;
  z-index: 3;
}
</style>
