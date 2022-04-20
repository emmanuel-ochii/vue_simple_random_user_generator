const app = Vue.createApp({
  data() {
    return {
      firstName: "Samuel",
      lastName: "Micheal",
      email: "Sam@gmail.com",
      gender: "male",
      picture: "https://randomuser.me/api/portraits/men/91.jpg",
    };
  },
});

app.mount("#app");
