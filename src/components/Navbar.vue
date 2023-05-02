<script lang="ts">
import { ref, onMounted, provide } from "vue";
import { useRouter } from "vue-router";
import { Auth } from "../api/Auth";
import { CartStore } from "../store/CartStore/CartStore";
import SearchBar from "../components/SearchBar.vue";

export default {
  components: { SearchBar },
  setup() {
    let isShowing = ref(false);
    const route = useRouter();
    let selectedSearch = ref();
    const store = CartStore();
    const Logout = () => {
      store.Logout();
      route.push("/login");
    };

    const showModal = () => {
      isShowing.value = true;
    };
    const CloseModal = () => {
      isShowing.value = false;
    };
    provide("modal", {
      CloseModal,
    });

    onMounted(() => {
      store.GetDecodedToken();
      console.log(selectedSearch.value);
    });
    return {
      store,
      Auth,
      Logout,
      selectedSearch,
      isShowing,
      showModal,
      CloseModal,
    };
  },
};
</script>
<style scoped></style>
<template>
  <div class="bg-white">
    <header class="relative bg-white">
      <p
        class="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8"
      >
        Get free delivery on orders over $100
      </p>

      <nav aria-label="Top" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="border-b border-gray-200">
          <div class="flex h-16 items-center">
            <!-- Mobile menu toggle, controls the 'mobileMenuOpen' state. -->
            <button
              type="button"
              class="rounded-md bg-white p-2 text-gray-400 lg:hidden"
            >
              <span class="sr-only">Open menu</span>
              <!-- Heroicon name: outline/bars-3 -->
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
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>

            <!-- Logo -->
            <div class="ml-4 flex lg:ml-0">
              <a href="#">
                <span class="sr-only">Your Company</span>
                <img
                  class="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
            </div>

            <!-- Flyout menus -->
            <div class="hidden lg:ml-8 lg:block lg:self-stretch">
              <div class="flex h-full space-x-8">
                <div class="flex">
                  <div
                    class="absolute inset-x-0 top-full text-sm text-gray-500"
                  >
                    <!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow -->
                    <div
                      class="absolute inset-0 top-1/2 bg-white shadow"
                      aria-hidden="true"
                    ></div>

                    <div class="relative bg-white">
                      <div class="mx-auto max-w-7xl px-8"></div>
                    </div>
                  </div>
                </div>

                <div class="flex">
                  <div
                    class="absolute inset-x-0 top-full text-sm text-gray-500"
                  >
                    <div
                      class="absolute inset-0 top-1/2 bg-white shadow"
                      aria-hidden="true"
                    ></div>

                    <div class="relative bg-white">
                      <div class="mx-auto max-w-7xl px-8"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="ml-auto flex items-center">
              <div
                class="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6"
              >
                <div v-if="!store.isLoginIn()">
                  <router-link to="/login">
                    <a
                      href="#"
                      class="text-sm font-medium text-gray-700 hover:text-gray-800"
                      >Sign in</a
                    ></router-link
                  >
                </div>

                <span class="h-6 w-px bg-gray-200" aria-hidden="true"></span>
                <div v-if="!store.isLoginIn()">
                  <router-link to="/register">
                    <a
                      href="#"
                      class="text-sm font-medium text-gray-700 hover:text-gray-800"
                      >Create account</a
                    ></router-link
                  >
                </div>
                <div v-if="store.isLoginIn()">
                  <div class="hs-dropdown relative inline-flex">
                    <button
                      id="hs-dropdown-custom-trigger"
                      type="button"
                      class="hs-dropdown-toggle py-1 pl-1 pr-3 inline-flex justify-center items-center gap-2 rounded-full border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm light:bg-gray-800 light:hover:bg-gray-800 light:border-gray-700 light:text-gray-400 light:hover:text-white light:focus:ring-offset-gray-800"
                    >
                      <img
                        class="w-8 h-auto rounded-full"
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                        alt="Maria"
                      />
                      <span
                        class="text-gray-600 font-medium truncate max-w-[7.5rem] light:text-gray-400"
                        >Maria</span
                      >
                      <svg
                        class="hs-dropdown-open:rotate-180 w-2.5 h-2.5 text-gray-600"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                        />
                      </svg>
                    </button>

                    <div
                      class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden mt-2 min-w-[15rem] bg-white shadow-md rounded-lg p-2 mt-2 divide-y divide-gray-200 light:bg-gray-800 light:border light:border-gray-700 light:divide-gray-700"
                      aria-labelledby="hs-dropdown-with-title"
                    >
                      <div class="py-2 first:pt-0 last:pb-0">
                        <span
                          class="block py-2 px-3 text-xs font-medium uppercase text-gray-400 light:text-gray-500"
                        >
                          Settings
                        </span>
                        <a
                          class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 light:text-gray-400 light:hover:bg-gray-700 light:hover:text-gray-300"
                          href="#"
                        >
                          <svg
                            class="flex-none"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                          >
                            <path
                              d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"
                            />
                          </svg>
                          Newsletter
                        </a>
                        <a
                          class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 light:text-gray-400 light:hover:bg-gray-700 light:hover:text-gray-300"
                          href="#"
                        >
                          <svg
                            class="flex-none"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                          >
                            <path
                              d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z"
                            />
                            <path
                              d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z"
                            />
                          </svg>
                          Purchases
                        </a>
                        <router-link to="/dash">
                          <a
                            v-if="store.isAdmin()"
                            class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 light:text-gray-400 light:hover:bg-gray-700 light:hover:text-gray-300"
                            href="#"
                          >
                            <svg
                              class="flex-none"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="currentColor"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M7.646 10.854a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 9.293V5.5a.5.5 0 0 0-1 0v3.793L6.354 8.146a.5.5 0 1 0-.708.708l2 2z"
                              />
                              <path
                                d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"
                              />
                            </svg>
                            Dashboard
                          </a></router-link
                        >
                        <a
                          class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 light:text-gray-400 light:hover:bg-gray-700 light:hover:text-gray-300"
                          href="#"
                        >
                          <svg
                            class="flex-none"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                          >
                            <path
                              d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"
                            />
                          </svg>
                          Team Account
                        </a>
                      </div>
                      <div class="py-2 first:pt-0 last:pb-0">
                        <span
                          class="block py-2 px-3 text-xs font-medium uppercase text-gray-400 light:text-gray-500"
                        >
                          Logout
                        </span>
                        <a
                          class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 light:text-gray-400 light:hover:bg-gray-700 light:hover:text-gray-300"
                          href="#"
                          @click.prevent="Logout()"
                        >
                          <svg
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.5"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            class="h-5 w-5 [color]-$fill-color"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                            ></path>
                          </svg>
                          Logout Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Cart -->
              <router-link to="/cart">
                <div class="ml-4 flow-root lg:ml-6">
                  <a href="#" class="group -m-2 flex items-center p-2">
                    <!-- Heroicon name: outline/shopping-bag -->
                    <svg
                      class="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
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
                        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>
                    <span
                      class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800"
                      >{{ store.Cartlenght }}</span
                    >
                    <span class="sr-only">items in cart, view bag</span>
                  </a>
                </div></router-link
              >
            </div>
          </div>
        </div>
      </nav>
    </header>
  </div>
  <button @click.prevent="showModal()">Modal</button>
  <div v-if="isShowing"><SearchBar /></div>
</template>
