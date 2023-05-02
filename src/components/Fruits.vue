<template lang="">
  <div class="container">
    <div class="card" v-for="fruit in Fruits" :key="fruit.id">
      <div class="card-header" @click.prevent="GotoFruitsDetail(fruit.id)">
        <img :src="fruit.image" alt="rover" />
      </div>
      <div class="card-body">
        <p>{{ fruit.name }}</p>
        <p class="price">{{ fruit.price }}$</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { ref, onMounted, reactive } from "vue";
import FruitsCrud from "../api/FruitsCrud";
import { Fruits, response } from "../interface/Fruits";
import { useRoute, useRouter } from "vue-router";
import { toRaw } from "vue";
export default {
  setup() {
    let ProxyFruits: response<Fruits[]> = reactive({});
    const router = useRouter();
    let Fruits = ref();
    const LoadFruits = async () => {
      try {
        const response = await FruitsCrud.getFuits();
        ProxyFruits.data = response.data.data;
        Fruits.value = toRaw(ProxyFruits.data);
        console.log(toRaw(ProxyFruits.data));
        console.log(response.data.message);
      } catch (e: any) {
        console.log(e);
      } finally {
        console.log("complete");
      }
    };
    onMounted(() => {
      LoadFruits();
    });
    const GotoFruitsDetail = (id: any) => {
      router.push(`/fruit/${id}`);
    };
    return {
      Fruits,
      GotoFruitsDetail,
    };
  },
};
</script>
<style>
.spinner {
  display: grid;
  place-items: center;
  margin-top: 100px;
}

.container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 30px;
}
.card {
  margin: 10px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  width: 250px;
  height: 260px;
  transition: transform 0.5s;
  cursor: pointer;
}
.card:hover {
  -ms-transform: scale(1); /* IE 9 */
  -webkit-transform: scale(1); /* Safari 3-8 */
  transform: scale(1.2);
}
.card-header img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.card-body {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 17px;
}

.tag {
  background: #cccccc;
  border-radius: 50px;
  font-size: 12px;
  margin: 0;
  color: #fff;
  padding: 2px 10px;
  text-transform: uppercase;
  cursor: pointer;
}
.tag-teal {
  background-color: #47bcd4;
}
.tag-purple {
  background-color: #5e76bf;
}
.tag-pink {
  background-color: #cd5b9f;
}

.card-body p {
  font-size: 18px;
  margin: 0 0 40px;
  font-weight: bold;
}
.price {
  color: lightgray;
}
.user {
  display: flex;
  margin-top: auto;
}

.user img {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-right: 10px;
}
.user-info h5 {
  margin: 0;
}
.user-info small {
  color: #545d7a;
}
</style>
