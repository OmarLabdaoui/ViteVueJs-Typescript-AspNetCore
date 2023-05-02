<template lang="">
  <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <div class="max-w-xl mx-auto">
      <div class="text-center">
        <h1
          class="text-3xl font-bold text-gray-800 sm:text-4xl light:text-white"
        >
          Create Fruits Form
        </h1>
        <p class="mt-1 text-gray-600 light:text-gray-400">
          We'd love to talk about fruits how we can help you.
        </p>
      </div>
    </div>

    <div class="mt-12 max-w-lg mx-auto">
      <!-- Card -->
      <div
        class="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 light:border-gray-700"
      >
        <h2
          class="mb-8 text-xl font-semibold text-gray-800 light:text-gray-200"
        >
          Fill in the form
        </h2>

        <form @submit.prevent="Update()">
          <div class="grid gap-4 lg:gap-6">
            <!-- Grid -->
            <div class="">
              <div>
                <label
                  for="hs-firstname-contacts-1"
                  class="block text-sm text-gray-700 font-medium light:text-white"
                  >Title</label
                >
                <input
                  v-model="name"
                  type="text"
                  name="hs-firstname-contacts-1"
                  id="hs-firstname-contacts-1"
                  class="w-full py-3 px-4 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 light:bg-slate-900 light:border-gray-700 light:text-gray-400"
                />
              </div>
            </div>
            <!-- End Grid -->

            <!-- Grid -->
            <div class="">
              <div>
                <label
                  for="hs-email-contacts-1"
                  class="block text-sm text-gray-700 font-medium light:text-white"
                  >Price</label
                >
                <input
                  v-model="price"
                  type="text"
                  name="hs-email-contacts-1"
                  id="hs-email-contacts-1"
                  autocomplete="email"
                  class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 light:bg-slate-900 light:border-gray-700 light:text-gray-400"
                />
              </div>
            </div>
            <!-- End Grid -->

            <div>
              <label
                for="hs-about-contacts-1"
                class="block text-sm text-gray-700 font-medium light:text-white"
                >Image</label
              >
              <textarea
                v-model="image"
                id="hs-about-contacts-1"
                name="hs-about-contacts-1"
                rows="4"
                class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 light:bg-slate-900 light:border-gray-700 light:text-gray-400"
              ></textarea>
            </div>
          </div>
          <!-- End Grid -->

          <div class="mt-6 grid">
            <button
              type="submit"
              class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-purple-500 text-white hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
            >
              Update
            </button>
          </div>
        </form>
      </div>
      <!-- End Card -->
    </div>
  </div>
</template>
<script lang="ts">
import { ref, onMounted, toRaw, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import FruitsCrud from "../../../api/FruitsCrud";
import { Fruits } from "../../../interface/Fruits";

export default {
  setup() {
    let Proxyfruit = ref();
    let fruit = ref();
    let name = ref();
    let price = ref();
    let image = ref();
    let id = ref();
    const route = useRoute();
    const router = useRouter();
    const LaoadFruitDetail = async (id: any) => {
      try {
        const response = await FruitsCrud.getFruit(id);
        Proxyfruit.value = response.data;
        fruit.value == toRaw(Proxyfruit.value.id);
        name.value = toRaw(Proxyfruit.value.name);
        price.value = toRaw(Proxyfruit.value.price);
        image.value = toRaw(Proxyfruit.value.image);
        console.log(fruit.value);
      } catch (e: any) {
        console.log(e);
      }
    };
    const Update = async () => {
      let update: Fruits = {
        id: String(route.params.id),
        name: name.value,
        image: image.value,
        price: price.value,
      };
      try {
        await FruitsCrud.UpdateFruit(update);
      } catch (e: any) {
        console.log(e);
      } finally {
        router.push("/dash/fruitdash");
      }
    };
    onMounted(() => {
      id.value = route.params.id;
      LaoadFruitDetail(id.value);
    });
    return {
      fruit,
      name,
      image,
      price,
      Update,
    };
  },
};
</script>
<style lang=""></style>
