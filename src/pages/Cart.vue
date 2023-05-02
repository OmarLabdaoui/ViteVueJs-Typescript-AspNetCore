<template lang="">
  <div class="flex flex-row mt-5" v-if="store.CartItems.length > 0">
    <div
      class="relative overflow-x-auto shadow-md sm:rounded-lg"
      style="width: 850px"
    >
      <table class="w-full text-sm text-left text-gray-500 light:text-gray-400">
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 light:bg-gray-700 light:text-gray-400"
        >
          <tr>
            <th scope="col" class="px-6 py-3">
              <span class="sr-only">Image</span>
            </th>
            <th scope="col" class="px-6 py-3">Product</th>
            <th scope="col" class="px-6 py-3">Qty</th>
            <th scope="col" class="px-6 py-3">Price</th>
            <th scope="col" class="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in store.CartItems"
            :key="item.fruits?.id"
            class="bg-white border-b light:bg-gray-800 light:border-gray-700 hover:bg-gray-50 light:hover:bg-gray-600"
          >
            <td class="w-32 p-4">
              <img :src="item.fruits?.image" alt="Apple Watch" />
            </td>
            <td class="px-6 py-4 font-semibold text-gray-900 light:text-white">
              {{ item.fruits?.name }}
            </td>
            <td class="px-6 py-4">
              <div class="flex items-center space-x-3">
                <button
                  class="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 light:bg-gray-800 light:text-gray-400 light:border-gray-600 light:hover:bg-gray-700 light:hover:border-gray-600 light:focus:ring-gray-700"
                  type="button"
                >
                  <span class="sr-only">Quantity button</span>
                  <svg
                    class="w-4 h-4"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
                <div>
                  <input
                    v-model="item.quantity"
                    type="number"
                    id="first_product"
                    class="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
                    required
                  />
                </div>
                <button
                  @click.prevent="increase(item.fruits)"
                  class="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 light:bg-gray-800 light:text-gray-400 light:border-gray-600 light:hover:bg-gray-700 light:hover:border-gray-600 light:focus:ring-gray-700"
                  type="button"
                >
                  <span class="sr-only">Quantity button</span>
                  <svg
                    class="w-4 h-4"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </td>
            <td class="px-6 py-4 font-semibold text-gray-900 light:text-white">
              {{ item.fruits?.price }}
            </td>
            <td class="px-6 py-4">
              <a
                @click.prevent="remove(item.fruits)"
                href="#"
                class="font-medium text-red-600 light:text-red-500 hover:underline"
                >Remove</a
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="">
      <!-- Grid -->
      <div class="">
        <!-- Card -->
        <div
          style="width: 400px"
          class="flex flex-col ml-4 gap-y-3 lg:gap-y-5 p-4 md:p-5 bg-white border shadow-sm rounded-xl light:bg-slate-900 light:border-gray-800"
        >
          <div class="inline-flex justify-center items-center">
            <span
              class="w-2 h-2 inline-block bg-gray-500 rounded-full mr-2"
            ></span>
            <span
              class="text-xs font-semibold uppercase text-gray-600 light:text-gray-400"
              >SubTotal
            </span>
          </div>

          <div class="text-center">
            <h3
              class="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800 light:text-gray-200"
            >
              {{ store.subtotal }}
            </h3>
          </div>
          <button
            v-if="!isChekourRuning"
            @click.prevent="pay()"
            type="button"
            class="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium text-sm text-center items-center light:focus:ring-gray-800 light:bg-white light:border-gray-700 light:text-gray-900 light:hover:bg-gray-200 mr-2 mb-2 w-full py-3 px-4 inline-flex justify-center gap-2 rounded-md"
          >
            <svg
              aria-hidden="true"
              class="w-10 h-3 mr-2 -ml-1"
              viewBox="0 0 660 203"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M233.003 199.762L266.362 4.002H319.72L286.336 199.762H233.003V199.762ZM479.113 8.222C468.544 4.256 451.978 0 431.292 0C378.566 0 341.429 26.551 341.111 64.604C340.814 92.733 367.626 108.426 387.865 117.789C408.636 127.387 415.617 133.505 415.517 142.072C415.384 155.195 398.931 161.187 383.593 161.187C362.238 161.187 350.892 158.22 333.368 150.914L326.49 147.803L319.003 191.625C331.466 197.092 354.511 201.824 378.441 202.07C434.531 202.07 470.943 175.822 471.357 135.185C471.556 112.915 457.341 95.97 426.556 81.997C407.906 72.941 396.484 66.898 396.605 57.728C396.605 49.591 406.273 40.89 427.165 40.89C444.611 40.619 457.253 44.424 467.101 48.39L471.882 50.649L479.113 8.222V8.222ZM616.423 3.99899H575.193C562.421 3.99899 552.861 7.485 547.253 20.233L468.008 199.633H524.039C524.039 199.633 533.198 175.512 535.27 170.215C541.393 170.215 595.825 170.299 603.606 170.299C605.202 177.153 610.098 199.633 610.098 199.633H659.61L616.423 3.993V3.99899ZM551.006 130.409C555.42 119.13 572.266 75.685 572.266 75.685C571.952 76.206 576.647 64.351 579.34 57.001L582.946 73.879C582.946 73.879 593.163 120.608 595.299 130.406H551.006V130.409V130.409ZM187.706 3.99899L135.467 137.499L129.902 110.37C120.176 79.096 89.8774 45.213 56.0044 28.25L103.771 199.45L160.226 199.387L244.23 3.99699L187.706 3.996"
                fill="#0E4595"
              />
              <path
                d="M86.723 3.99219H0.682003L0 8.06519C66.939 24.2692 111.23 63.4282 129.62 110.485L110.911 20.5252C107.682 8.12918 98.314 4.42918 86.725 3.99718"
                fill="#F2AE14"
              />
            </svg>
            Pay with Visa
          </button>

          <button
            v-if="isChekourRuning"
            type="button"
            class="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm light:focus:ring-offset-gray-800"
          >
            <span
              class="animate-spin inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-white rounded-full"
              role="status"
              aria-label="loading"
            ></span>
            Loading
          </button>
        </div>
      </div>
    </div>
  </div>
  <div v-if="store.CartItems.length <= 0"><h1>Your Cart Is Empty</h1></div>
</template>
<script lang="ts">
import { Fruits } from "../interface/Fruits";
import { CartStore } from "../store/CartStore/CartStore";
import { Cart } from "../interface/Cart";
import axios from "axios";
import { toRaw, ref } from "vue";
export default {
  setup() {
    const store = CartStore();
    const isChekourRuning = ref(false);
    const increase = (fruit: Fruits) => {
      store.increseQte(fruit);
    };
    const remove = (fruit: Fruits) => {
      store.RemovefromCart(fruit);
    };
    const pay = async () => {
      isChekourRuning.value = true;
      const Userid = "abfgfry10FHHFH";
      await axios
        .post(`https://localhost:7022/create-checkout-session`, store.Cart)
        .then((response) => {
          isChekourRuning.value = false;
          console.log("ccc");
          console.log(response);
          if (response.data) {
            window.location.href = response.data.url;
          }
        })
        .catch((err) => (isChekourRuning.value = false));
    };
    return { store, increase, remove, pay, isChekourRuning };
  },
};
</script>
<style lang=""></style>
