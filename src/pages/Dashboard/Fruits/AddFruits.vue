vui vu v
<template lang="">
  <!-- Contact Us -->
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

        <form @submit.prevent="AddFruit()">
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
                  type="text"
                  v-model="name"
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
              class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
            >
              ADD New Fruits
            </button>
          </div>
        </form>
      </div>
      <!-- End Card -->
    </div>
  </div>
  <!-- End Contact Us -->
</template>
<script lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import FruitsCrud from "../../../api/FruitsCrud";
import { Fruits } from "../../../interface/Fruits";

export default {
  setup() {
    let name = ref("");
    let image = ref("");
    let price = ref();
    const route = useRouter();
    const AddFruit = async () => {
      try {
        let fruit: Fruits = {
          name: name.value,
          price: price.value,
          image: image.value,
        };

        const response = await FruitsCrud.addFruit(fruit);
        console.log(response.data);
      } catch (e: any) {
        console.log(e);
      } finally {
        route.push("/dash/fruitdash");
      }
    };
    return { name, image, price, AddFruit };
  },
};
</script>
<style lang=""></style>
