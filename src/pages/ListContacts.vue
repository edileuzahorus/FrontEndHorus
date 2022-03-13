<template>
  <div id="ContainerList">
    <div v-for="contact in listContacts" :key="contact.id">
      <span v-if="!contact.deleted" id="CardContact">
        <div class="Row">
          <div>Name:</div>
          {{ contact.name }}
        </div>
        <div class="Row">
          <div>Telephone:</div>
          {{ contact.telephone }}
        </div>
        <div class="Row">
          <div>DDD:</div>
          {{ contact.ddd.padStart(3, 0) }}
        </div>
        <div id="Buttons">
          <button @click="() => add(contact)" class="EditButton">Edit</button>
          <button
            @click="() => deleteContact(contact.id)"
            class="EditButton DeleteButton"
          >
            Delete
          </button>
        </div>
      </span>
    </div>
  </div>
</template>

<script>
import api from "../api";

export default {
  methods: {
    async deleteContact(id) {
      await api.delete(id);
    },
    async add(value) {
      const response = await api.listAll();
      this.listContacts = response.data;
      this.$emit("press", value);
    },
  },
  async beforeMount() {
    const response = await api.listAll();
    this.listContacts = response.data;
  },
  name: "ListContacts",
  props: { updateOrNot: Boolean },
  components: {},
  data() {
    return {
      listContacts: [],
    };
  },
  watch: {
    async updateOrNot() {
      const response = await api.listAll();
      this.listContacts = response.data;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#ContainerList {
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
#CardContact {
  width: 200px;
  height: 220px;

  background-color: #868784;

  margin: 10px;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  color: #fff;
  font-family: "Poppins", sans-serif;
  font-size: 15px;
}
#CardContact #Button button {
  width: 5px;
}
.Row {
  display: flex;

  margin: 20px 0 0px 20px;
}
.Row div {
  margin-right: 5px;
}
#Buttons {
  width: 100%;

  display: flex;
  justify-content: center;
}
.EditButton {
  margin: 15px 10px 0 10px;

  border: 0;
  border-radius: 5px;

  width: 65px;
  height: 35px;

  background-color: 0.02c39a;

  color: #fff;
  font-family: "Poppins", sans-serif;
  font-size: 15px;

  cursor: pointer;

  transition: background-color 0.2s;
}
.DeleteButton {
  background-color: #6a040f;
}
.EditButton:hover {
  background-color: #02e3b2;
}
.DeleteButton:hover {
  background-color: #9d0208;
}
</style>
