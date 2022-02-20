<template>
  <v-row>
    <v-col cols="12">
      <v-data-table
        fixed-header
        hide-default-header
        hide-default-footer
        :headers="headers"
        :items="lists"
        item-key="id"
        :items-per-page="15"
        height="65vh"
      >
        <template v-slot:top>
          <v-toolbar flat>
            <v-btn
              color="primary"
              class="ml-auto text-xs"
              @click="isOpenAddProductModal = true"
              >Thêm sản phẩm</v-btn
            >
            <!-- modal add product -->
            <AddProductModal
              :categories="categories"
              :dialog.sync="isOpenAddProductModal"
            />

            <!-- modal edit product -->
            <EditProductModal
              :items="editItem"
              :categories="categories"
              :dialog.sync="isOpenEditProductModal"
            />

            <!-- modal delete product -->
            <RemoveProductModal
              :product-id="removeProductId"
              :dialog.sync="isOpenDeleteModal"
            />
          </v-toolbar>
        </template>

        <template #[`header`]="{ props: { headers } }">
          <thead class="custom-header">
            <tr class="custom-header">
              <th
                class="custom-header-item"
                v-for="(item, index) in headers"
                :key="index"
              >
                <div class="sort-cell">
                  {{ item.text }}
                  <div v-if="item.sortable" class="sort-control">
                    <span>▲</span>
                    <span>▼</span>
                  </div>
                </div>
              </th>
            </tr>
          </thead>
        </template>

        <template #[`item.id`]="{ item }">
          <div class="centered-cell info-cell">
            <span class="text-xs">{{ item.id }}</span>
          </div>
        </template>

        <template #[`item.name`]="{ item }">
          <div class="info-cell">
            <span class="text-xs">{{ item.name }}</span>
          </div>
        </template>

        <template #[`item.original_price`]="{ item }">
          <div class="centered-cell info-cell">
            <span class="text-xs">{{ item.original_price }}</span>
          </div>
        </template>

        <template #[`item.quantity`]="{ item }">
          <div class="centered-cell info-cell">
            <span class="text-xs">{{ item.quantity }}</span>
          </div>
        </template>

        <template #[`item.description`]="{ item }">
          <div class="info-cell">
            <span class="text-xs text-clamp">{{ item.description }}</span>
          </div>
        </template>

        <template #[`item.status`]="{ item }">
          <div class="centered-cell info-cell">
            <v-chip small :color="getColorStatus" class="font-weight-medium">
              {{ item.quantity >= 1 ? 'Còn hàng' : 'Hết hàng' }}
            </v-chip>
          </div>
        </template>

        <template #[`item.discount`]="{ item }">
          <div class="centered-cell info-cell">
            <span class="text-xs">{{ item.discount }}</span>
          </div>
        </template>

        <template #[`item.actions`]="{ item }">
          <div class="centered-cell info-cell">
            <v-icon class="mr-2" @click="showEditItem(item)"> mdi-pencil </v-icon>
            <v-icon @click="deleteItem(item)"> mdi-delete </v-icon>
          </div>
        </template>
      </v-data-table>

      <div class="table-footer">
        <v-pagination
          v-model="page"
          :total-visible="5"
          class="text-xs"
          circle
          :length="5"
        ></v-pagination>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import { categoryApis, productApis } from '@/apis';
import AddProductModal from './Modals/AddProductModal.vue';
import EditProductModal from './Modals/EditProductModal.vue';
import RemoveProductModal from './Modals/RemoveProductModal.vue';

export default {
  name: 'ProductTable',
  components: {
    AddProductModal,
    EditProductModal,
    RemoveProductModal,
  },
  data() {
    return {
      isOpenAddProductModal: false,
      isOpenEditProductModal: false,
      isOpenDeleteModal: false,
      page: 1,
      headers: [
        { text: 'SKU', value: 'id', sortable: true },
        { text: 'Tên sản phẩm', value: 'name', sortable: true },
        { text: 'Giá', value: 'original_price', sortable: true },
        { text: 'Số lượng', value: 'quantity', sortable: true },
        { text: 'Mô tả', value: 'description', sortable: false },
        { text: 'Tình trạng', value: 'status', sortable: true },
        { text: 'Giảm giá', value: 'discount', sortable: true },
        { text: 'Actions', value: 'actions', sortable: true },
      ],
      editItem: {
        name: '',
        image: null,
        status: '',
        is_gift: false,
        discount: 0,
        quantity: 0,
        category_id: '',
        description: '',
        original_price: 0,
        is_free_shipping: false,
      },
      removeProductId: null,
      lists: [],
      categories: [],
    };
  },
  created() {
    this.getProducts();
    this.getCategory();
  },
  computed: {
    getColorStatus(quantity) {
      if (quantity >= 1) {
        return 'primary';
      } else {
        return 'warning';
      }
    },
  },
  methods: {
    async getProducts() {
      try {
        const response = await productApis.getProductList();
        if (response.status === 200) {
          this.lists = [...response.data];
        }
      } catch (e) {
        throw Error('Invalid Token');
      }
    },
    async getCategory() {
      try {
        const response = await categoryApis.getCategoryList();
        if (response.status === 200) {
          this.categories = [...response.data];
        }
      } catch (e) {
        throw Error('Invalid Token');
      }
    },
    deleteItem(item) {
      this.isOpenDeleteModal = true;
      this.removeProductId = item.id;
    },

    showEditItem(item) {
      this.isOpenEditProductModal = true;
      this.editItem = { ...item, status: item.quantity > 1 ? 'Còn hàng' : 'Hết hàng' };
    },
  },
};
</script>

<style lang="scss" scoped>
@import 'src/plugins/vuetify/preset/styles/mixins';

.v-data-table.v-data-table--fixed-header thead th {
  background-color: #e4e4e4 !important;
  text-align: center !important;
}

.custom-header {
  &-item {
    &:nth-child(2) {
      width: 22rem;
    }
    &:nth-child(5) {
      width: 24rem;
    }
  }
}
.sort-cell {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  color: $text-primary;
  font-weight: 500;
  height: 100%;
  span {
    font-size: 0.9rem;
  }
}
.sort-control {
  display: flex;
  flex-direction: column;
  margin-left: 0.8rem;
  cursor: pointer;
}
.centered-cell {
  text-align: center;
}
.info-cell {
  height: 100%;
  padding: 1.5rem 0;
}
.text-clamp {
  @include textClamp(3);
}
.table-footer {
  margin-top: 3rem;
  .v-pagination__item {
    font-size: 1.5rem !important;
  }
}
</style>
