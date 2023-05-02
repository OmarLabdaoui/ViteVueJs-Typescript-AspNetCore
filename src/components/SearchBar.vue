vu vui
<template lang="">
  <div
    class="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24"
  >
    <div
      @click.self="modal.CloseModal"
      class="fixed inset-0 bg-slate-900/25 backdrop-blur transition-opacity opacity-100"
    ></div>
    <div
      class="relative w-full max-w-lg transform px-4 transition-all opacity-100 scale-100"
    >
      <div
        class="overflow-hidden rounded-lg bg-white shadow-md"
        id="headlessui-dialog-panel-108"
        data-headlessui-state="open"
      >
        <div class="relative">
          <input
            v-model="KeyUp"
            class="block w-full appearance-none bg-transparent py-4 pl-4 pr-12 text-base text-slate-900 placeholder:text-slate-600 focus:outline-none sm:text-sm sm:leading-6"
            placeholder="Find anything..."
            aria-label="Search components"
            id="headlessui-combobox-input-109"
            role="combobox"
            type="text"
            aria-expanded="false"
            data-headlessui-state=""
            tabindex="0"
            style="caret-color: rgb(107, 114, 128)"
          /><svg
            class="pointer-events-none absolute top-4 right-4 h-6 w-6 fill-slate-400"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.47 21.53a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm-9.97-4.28a6.75 6.75 0 0 1-6.75-6.75h-1.5a8.25 8.25 0 0 0 8.25 8.25v-1.5ZM3.75 10.5a6.75 6.75 0 0 1 6.75-6.75v-1.5a8.25 8.25 0 0 0-8.25 8.25h1.5Zm6.75-6.75a6.75 6.75 0 0 1 6.75 6.75h1.5a8.25 8.25 0 0 0-8.25-8.25v1.5Zm11.03 16.72-5.196-5.197-1.061 1.06 5.197 5.197 1.06-1.06Zm-4.28-9.97c0 1.864-.755 3.55-1.977 4.773l1.06 1.06A8.226 8.226 0 0 0 18.75 10.5h-1.5Zm-1.977 4.773A6.727 6.727 0 0 1 10.5 17.25v1.5a8.226 8.226 0 0 0 5.834-2.416l-1.061-1.061Z"
            ></path>
          </svg>
        </div>
        <ul
          class="max-h-[18.375rem] divide-y divide-slate-200 overflow-y-auto rounded-b-lg border-t border-slate-200 text-sm leading-6"
          role="listbox"
          id="headlessui-combobox-options-280"
          data-headlessui-state="open"
        >
          <li
            v-for="fruit in SearchFruits"
            :key="fruit.id"
            class="flex items-center justify-between p-4"
            id="headlessui-combobox-option-286"
            role="option"
            tabindex="-1"
            aria-selected="false"
            data-headlessui-state=""
          >
            <div style="width: 25px">
              <img :src="fruit.image" />
            </div>
            <span
              class="ml-4 text-right whitespace-nowrap font-semibold text-slate-900"
              >{{ fruit.name }}</span
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { inject, reactive, ref, toRaw, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
import FruitsCrud from "../api/FruitsCrud";
import { Fruits, response } from "../interface/Fruits";

export default {
  setup() {
    const modal = inject("modal");
    let ProxyFruits: response<Fruits[]> = reactive({});
    const router = useRouter();
    let Fruits = ref([] as Fruits[]);
    let KeyUp = ref();
    const LoadFruits = async () => {
      try {
        const response = await FruitsCrud.getFuits();
        ProxyFruits.data = response.data.data;
        Fruits.value = toRaw(ProxyFruits.data) as Fruits[];
      } catch (e: any) {
        console.log(e);
      } finally {
        console.log("complete");
      }
    };
    const SearchFruits = computed(() => {
      return KeyUp.value == ""
        ? KeyUp.value == ""
        : Fruits.value.filter((fruit) =>
            fruit.name?.toLowerCase()?.includes(KeyUp.value?.toLowerCase())
          );
    });
    onMounted(() => {
      LoadFruits();
    });
    return {
      modal,
      Fruits,
      KeyUp,
      SearchFruits,
    };
  },
};
</script>
<style scoped>
*,
:after,
:before {
  border: 0 solid #e5e7eb;
  box-sizing: border-box;
}
</style>
