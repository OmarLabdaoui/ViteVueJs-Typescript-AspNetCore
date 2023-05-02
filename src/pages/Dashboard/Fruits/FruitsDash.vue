<template lang="">
  <!-- Table Section -->

  <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <!-- Card -->
    <div class="flex flex-col">
      <div class="-m-1.5 overflow-x-auto">
        <div class="p-1.5 min-w-full inline-block align-middle">
          <div
            class="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden light:bg-slate-900 light:border-gray-700"
          >
            <!-- Header -->
            <div
              class="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 light:border-gray-700"
            >
              <div>
                <h2
                  class="text-xl font-semibold text-gray-800 light:text-gray-200"
                >
                  Sales
                </h2>
              </div>

              <div>
                <div class="inline-flex gap-x-2">
                  <router-link to="/dash/create">
                    <a
                      class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm light:focus:ring-offset-gray-800"
                      href="#"
                    >
                      <svg
                        class="w-3 h-3"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M2.63452 7.50001L13.6345 7.5M8.13452 13V2"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                        />
                      </svg>
                      Create
                    </a></router-link
                  >
                </div>
              </div>
            </div>
            <!-- End Header -->

            <!-- Table -->
            <table
              class="min-w-full divide-y divide-gray-200 light:divide-gray-700"
            >
              <thead class="bg-gray-50 light:bg-slate-900">
                <tr>
                  <th scope="col" class="pl-6 py-3 text-left">
                    <label for="hs-at-with-checkboxes-main" class="flex">
                      <input
                        type="checkbox"
                        class="shrink-0 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 light:bg-gray-800 light:border-gray-700 light:checked:bg-blue-500 light:checked:border-blue-500 light:focus:ring-offset-gray-800"
                        id="hs-at-with-checkboxes-main"
                      />
                      <span class="sr-only">Checkbox</span>
                    </label>
                  </th>

                  <th scope="col" class="px-6 py-3 text-left">
                    <div class="flex items-center gap-x-2">
                      <span
                        class="text-xs font-semibold uppercase tracking-wide text-gray-800 light:text-gray-200"
                      >
                        Fruit
                      </span>
                    </div>
                  </th>

                  <th scope="col" class="px-6 py-3 text-left">
                    <div class="flex items-center gap-x-2">
                      <span
                        class="text-xs font-semibold uppercase tracking-wide text-gray-800 light:text-gray-200"
                      >
                        Title
                      </span>
                    </div>
                  </th>

                  <th scope="col" class="px-6 py-3 text-left">
                    <div class="flex items-center gap-x-2">
                      <span
                        class="text-xs font-semibold uppercase tracking-wide text-gray-800 light:text-gray-200"
                      >
                        Price
                      </span>
                    </div>
                  </th>

                  <th scope="col" class="px-6 py-3 text-left">
                    <div class="flex items-center gap-x-2">
                      <span
                        class="text-xs font-semibold uppercase tracking-wide text-gray-800 light:text-gray-200"
                      >
                        CreatedAt
                      </span>
                    </div>
                  </th>

                  <th scope="col" class="px-6 py-3 text-left">
                    <div class="flex items-center gap-x-2">
                      <span
                        class="text-xs font-semibold uppercase tracking-wide text-gray-800 light:text-gray-200"
                      >
                        Rating
                      </span>
                    </div>
                  </th>
                </tr>
              </thead>

              <tbody class="divide-y divide-gray-200 light:divide-gray-700">
                <tr v-for="fruit in Fruits" :key="fruit.id">
                  <td class="h-px w-px whitespace-nowrap"></td>
                  <td class="h-px w-px whitespace-nowrap">
                    <div class="px-6 py-2">
                      <div class="flex items-center gap-x-2">
                        <img :src="fruit.image" />
                      </div>
                    </div>
                  </td>
                  <td class="h-px w-px whitespace-nowrap">
                    <div class="px-6 py-2">
                      <span class="text-sm text-gray-600 light:text-gray-400">{{
                        fruit.name
                      }}</span>
                    </div>
                  </td>
                  <td class="h-px w-px whitespace-nowrap">
                    <div class="px-6 py-2">
                      <span class="text-sm text-gray-600 light:text-gray-400"
                        >{{ fruit.price }}$</span
                      >
                    </div>
                  </td>
                  <td class="h-px w-px whitespace-nowrap">
                    <div class="px-6 py-2">
                      <span class="text-sm text-gray-600 light:text-gray-400">
                        {{ moment(fruit.createdAt).fromNow() }}
                      </span>
                    </div>
                  </td>
                  <td class="h-px w-px whitespace-nowrap">
                    <a
                      @click.prevent="DeleteFruits(fruit.id)"
                      class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-red-600 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm light:bg-slate-900 light:hover:bg-slate-800 light:border-gray-700 light:text-red-500 light:focus:ring-offset-gray-800"
                      href="#"
                    >
                      <svg
                        class="w-3 h-3"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
                        />
                        <path
                          fill-rule="evenodd"
                          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                        />
                      </svg>
                      Delete
                    </a>
                    <router-link
                      :to="{
                        name: 'editfruit',
                        params: { id: fruit.id },
                      }"
                    >
                      <a
                        class="py-2 ml-1 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-indigo-500 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm light:bg-slate-900 light:hover:bg-slate-800 light:border-gray-700 light:text-indigo-500 light:focus:ring-offset-gray-800"
                        href="#"
                      >
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          class="h-4 w-4 [color]-$fill-color"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                          ></path>
                        </svg>

                        Edit
                      </a>
                    </router-link>
                    <a
                      data-modal-target="defaultModal"
                      data-modal-toggle="defaultModal"
                      class="py-2 ml-1 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-green-500 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm light:bg-slate-900 light:hover:bg-slate-800 light:border-gray-700 light:text-indigo-500 light:focus:ring-offset-gray-800"
                      href="#"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        class="h-4 w-4 [color]-$fill-color"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                        ></path>
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        ></path>
                      </svg>
                      View
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
            <!-- End Table -->

            <!-- Footer -->
            <div
              class="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 light:border-gray-700"
            >
              <div class="inline-flex items-center gap-x-2">
                <p class="text-sm text-gray-600 light:text-gray-400">
                  Showing:
                </p>
                <div class="max-w-sm space-y-3">
                  <select
                    v-model="currentPage"
                    @change="onchange($event)"
                    class="py-2 px-3 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 light:bg-slate-900 light:border-gray-700 light:text-gray-400"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
                <p class="text-sm text-gray-600 light:text-gray-400">
                  of {{ pages }}
                </p>
              </div>

              <div>
                <div class="inline-flex gap-x-2">
                  <button
                    :disabled="currentPage === 1"
                    @click.prevent="prev()"
                    type="button"
                    class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm light:bg-slate-900 light:hover:bg-slate-800 light:border-gray-700 light:text-gray-400 light:hover:text-white light:focus:ring-offset-gray-800"
                  >
                    <svg
                      class="w-3 h-3"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                      />
                    </svg>
                    Prev
                  </button>

                  <button
                    :disabled="currentPage === pages"
                    @click.prevent="next()"
                    type="button"
                    class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm light:bg-slate-900 light:hover:bg-slate-800 light:border-gray-700 light:text-gray-400 light:hover:text-white light:focus:ring-offset-gray-800"
                  >
                    Next
                    <svg
                      class="w-3 h-3"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <!-- End Footer -->
          </div>
        </div>
      </div>
    </div>
    <!-- End Card -->
  </div>

  <!-- End Table Section -->
</template>
<script lang="ts">
import { ref, onMounted, reactive, toRaw, watch } from "vue";
import FruitsCrud from "../../../api/FruitsCrud";
import { Fruits, response } from "../../../interface/Fruits";
import moment from "moment";
import { CartStore } from "../../../store/CartStore/CartStore";
export default {
  setup() {
    const store = CartStore();
    let ProxyFruits: response<Fruits[]> = reactive({});
    let page = ref(1);
    let Fruits = ref([] as Fruits[]);
    let currentPage = ref();
    let pages = ref();
    const LoadFruits = async (page: Number) => {
      try {
        const response = await FruitsCrud.getFuitswithPage(page);
        ProxyFruits.data = response.data.data;
        Fruits.value = toRaw(ProxyFruits.data) as Fruits[];
        pages.value = response.data.page;
        currentPage.value = response.data.currentPage;
        pages.value = response.data.page;
        console.log(response.data.page);
      } catch (e: any) {
        console.log(e);
      } finally {
        console.log("complete");
      }
    };
    const next = async () => {
      if (currentPage.value == pages.value) {
        return;
      } else {
        page.value = page.value + 1;
      }
    };
    const prev = async () => {
      page.value = page.value - 1;
    };
    const onchange = (event: Event) => {
      const el = event.target as HTMLInputElement;
      LoadFruits(Number(el.value));
      console.log(el.value);
    };
    const DeleteFruits = async (id: String) => {
      try {
        await FruitsCrud.DeleteFruit(id);
        const deleted = Fruits.value.filter((fruit: Fruits) => fruit.id != id);

        Fruits.value = deleted;
        store.Cart = deleted;
      } catch (e: any) {
        console.log(e);
      }
    };
    onMounted(() => {
      console.log(currentPage.value);
      LoadFruits(page.value);
    });
    watch(
      () => page.value,

      () => {
        LoadFruits(page.value);
      }
    );
    watch(
      () => Fruits.value.length,

      () => {
        LoadFruits(page.value);
      }
    );
    return {
      Fruits,
      moment,
      DeleteFruits,
      next,
      prev,
      pages,
      currentPage,
      onchange,
    };
  },
};
</script>
<style></style>
