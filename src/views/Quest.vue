<template>
  <div class="main">
    <h1>クエスト一覧画面</h1>
    <div class="wrapper">
      <div class="box" v-for="(list, key) in data" :key="key">
        <div class="title-block">
          <h4 class="title">{{ list.title }}</h4>
        </div>
        <div class="title-tri"></div>

        <p class="genre">{{ list.main }}</p>

        <div class="point-badge">
          <p class="points">
            {{ list.point }}
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- test -->
  <div id="app">
    <h5>Basic</h5>
    <p-button
      label="Show"
      icon="pi pi-external-link"
      @click="openBasic"
    ></p-button>
    <p-dialog
      header="Header"
      v-model:visible="displayBasic"
      :breakpoints="{ '960px': '75vw', '640px': '90vw' }"
      :style="{ width: '50vw' }"
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <template #footer>
        <p-button
          label="No"
          icon="pi pi-times"
          @click="closeBasic"
          class="p-button-text"
        ></p-button>
        <p-button
          label="Yes"
          icon="pi pi-check"
          @click="closeBasic"
          autofocus
        ></p-button>
      </template>
    </p-dialog>
  </div>
</template>

<script>
// test
const App = {
  setup() {
    const displayBasic = ref(false);

    const openBasic = () => {
      displayBasic.value = true;
    };

    return {
      displayBasic,
      openBasic,
    };
  },
  components: {
    "p-dialog": primevue.dialog,
    "p-button": primevue.button,
  },
};

export default {
  name: "Quest",
  display: false,
  data() {
    return {
      data: [
        {
          title: "問題タイトル",
          main: "ジャンル：穴埋め",
          point: "100",
        },
        {
          title: "問題タイトル",
          main: "ジャンル：穴埋め",
          point: "200",
        },
        {
          title: "問題タイトル",
          main: "ジャンル：穴埋め",
          point: "300",
        },
        {
          title: "問題タイトル",
          main: "ジャンル：穴埋め",
          point: "400",
        },
        {
          title: "問題タイトル",
          main: "ジャンル：穴埋め",
          point: "500",
        },
        {
          title: "問題タイトル",
          main: "ジャンル：穴埋め",
          point: "600",
        },
        {
          title: "問題タイトル",
          main: "ジャンル：穴埋め",
          point: "700",
        },
        {
          title: "問題タイトル",
          main: "ジャンル：穴埋め",
          point: "800",
        },
      ],
    };
  },
};
</script>

<style>
.main {
  background-color: #f8f8f8;
}
.wrapper {
  width: 799px;
  margin: 0px auto;
  display: flex;
  justify-content: space-between;
  align-content: space-between;
  flex-wrap: wrap;
}
.box {
  width: 377px;
  height: 115px;
  border: 1px solid #fc8c0d;
  margin-bottom: 40px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
}

/*   box upper   */
.title-block {
  margin: 0;
  width: 377px;
  height: 47px;
  background: #fc8c0d 0% 0% no-repeat padding-box;
  overflow: hidden;
  display: flex;
  justify-content: center;
}
.title-tri {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 21px 188.5px 0 188.5px;
  border-color: #fc8c0d transparent transparent transparent;
}
.title {
  margin-top: 20px;
  text-align: center;
  font: normal normal bold 14px/17px Segoe UI;
  color: #ffffff;
}

/*   box bottom   */
.genre {
  /* width: 100%; */
  margin-top: 1rem;
  text-align: center;
  font: normal normal bold 8px/10px Segoe UI;
  letter-spacing: 0px;
  color: #707070;
}
.point-badge {
  position: absolute;
  right: 20px;
  bottom: 10px;
  width: 44px;
  height: 43px;
  background: #71afe5 0% 0% no-repeat padding-box;
  border: 1px solid #ffffff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.points {
  font: normal normal bold 16px/27px Tsukushi A Round Gothic;
  letter-spacing: 0px;
  color: #ffffff;
}

/* test */
.p-button {
  margin: 0.3rem 0.5rem;
  min-width: 10rem;
}
.p-dialog .p-button {
  min-width: 6rem;
}
</style>