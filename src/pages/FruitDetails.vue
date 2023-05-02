<template lang="">
  <div class="warap">
    <div
      style="width: 700px"
      class="relative flex w-full items-center overflow-hidden bg-white px-4 pt-14 pb-8 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8"
    >
      <button
        type="button"
        class="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
      >
        <span class="sr-only">Close</span>
        <!-- Heroicon name: outline/x-mark -->
        <svg
          class="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <div
        class="grid w-full grid-cols-1 items-start gap-y-8 gap-x-6 sm:grid-cols-12 lg:gap-x-8"
      >
        <div
          class="aspect-w-2 aspect-h-3 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5"
        >
          <img
            :src="fruit?.image"
            alt="Two each of gray, white, and black shirts arranged on table."
            class="object-cover object-center"
          />
        </div>
        <div class="sm:col-span-8 lg:col-span-7">
          <h2 class="text-2xl font-bold text-gray-900 sm:pr-12">
            {{ fruit?.name }}
          </h2>

          <section aria-labelledby="information-heading" class="mt-2">
            <h3 id="information-heading" class="sr-only">
              Product information
            </h3>

            <p class="text-2xl text-gray-900">${{ fruit?.price }}</p>

            <!-- Reviews -->
            <div class="mt-6">
              <h4 class="sr-only">Reviews</h4>
              <div class="flex items-center">
                <div class="flex items-center">
                  <!--
                Heroicon name: mini/star

                Active: "text-gray-900", Default: "text-gray-200"
              -->
                  <svg
                    class="text-gray-900 h-5 w-5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                      clip-rule="evenodd"
                    />
                  </svg>

                  <!-- Heroicon name: mini/star -->
                  <svg
                    class="text-gray-900 h-5 w-5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                      clip-rule="evenodd"
                    />
                  </svg>

                  <!-- Heroicon name: mini/star -->
                  <svg
                    class="text-gray-900 h-5 w-5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                      clip-rule="evenodd"
                    />
                  </svg>

                  <!-- Heroicon name: mini/star -->
                  <svg
                    class="text-gray-900 h-5 w-5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                      clip-rule="evenodd"
                    />
                  </svg>

                  <!-- Heroicon name: mini/star -->
                  <svg
                    class="text-gray-200 h-5 w-5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <p class="sr-only">3.9 out of 5 stars</p>
                <a
                  href="#"
                  class="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >117 reviews</a
                >
              </div>
            </div>
          </section>

          <section aria-labelledby="options-heading" class="mt-10">
            <h3 id="options-heading" class="sr-only">Product options</h3>
            <select
              class="py-3 my-4 px-4 pr-9 font-bold block text-gray-400 w-full border-gray-200 rounded-full text-sm focus:border-blue-500 focus:ring-blue-500 light:bg-slate-900 light:border-gray-700 light:text-gray-400"
            >
              <option selected>Select The Quantity</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
            <form>
              <button
                @click.prevent="addToCart(fruit)"
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 mr-2 -ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                  ></path>
                </svg>
                Add To Cart Now
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { watch } from "vue";
import FruitsCrud from "../api/FruitsCrud";
import { CartStore } from "../store/CartStore/CartStore";
import { Cart } from "../interface/Cart";
import { Fruits } from "../interface/Fruits";
export default {
  setup() {
    let id = ref();
    let fruit: any = ref(null);
    const store = CartStore();
    const route = useRoute();
    const router = useRouter();
    const LaoadFruitDetail = async (id: any) => {
      try {
        const response = await FruitsCrud.getFruit(id);
        fruit.value = response.data;
      } catch (e: any) {
        console.log(e);
      }
    };
    onMounted(() => {
      id.value = route.params.id;
      LaoadFruitDetail(id.value);
    });
    const addToCart = (fruit: Fruits) => {
      const cart: Cart = {
        fruits: fruit,
        quantity: 3,
      };
      store.addToCart(cart);
    };
    watch(
      () => route.params.id,
      () => {
        id.value = route.params.id;
        LaoadFruitDetail(id.value);
      }
    );
    return {
      id,
      store,
      fruit,
      addToCart,
    };
  },
};
</script>
<style>
.warap {
  display: grid;
  place-items: center;
}
</style>
