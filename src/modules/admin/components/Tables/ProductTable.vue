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
        height="65vh"
      >
        <template v-slot:top>
          <v-toolbar flat>
            <v-dialog v-model="dialog" max-width="700">
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="primary" class="ml-auto text-xs" v-bind="attrs" v-on="on"
                  >Thêm sản phẩm</v-btn
                >
              </template>
              <v-card>
                <v-card-title
                  ><span class="text-md-h4">{{ formTitle }}</span></v-card-title
                >
                <v-divider></v-divider>
                <v-card-text class="pt-4 px-3">
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                          single-line
                          dense
                          hide-details="auto"
                          outlined
                          label="Nhập tên sản phẩm"
                          v-model="editItem.name"
                        />
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                          single-line
                          dense
                          hide-details="auto"
                          outlined
                          label="Nhập giá sản phẩm"
                          v-model="editItem.original_price"
                        />
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                        <v-file-input
                          multiple
                          single-line
                          :prepend-icon="null"
                          label="Hình ảnh sản phẩm"
                          hide-details="auto"
                          outlined
                          dense
                        ></v-file-input>
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                          single-line
                          dense
                          hide-details="auto"
                          outlined
                          label="Số lượng sản phẩm"
                          value="0"
                          v-model="editItem.quantity"
                        />
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                        <v-select
                          single-line
                          dense
                          hide-details="auto"
                          outlined
                          label="Giảm giá"
                          :items="discounts"
                          v-model="editItem.discount"
                        />
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                        <v-select
                          single-line
                          dense
                          hide-details="auto"
                          outlined
                          label="Danh mục sản phẩm"
                          :items="categories"
                          item-text="name"
                          item-value="id"
                          v-model="editItem.category_id"
                        />
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                        <v-select
                          single-line
                          dense
                          hide-details="auto"
                          outlined
                          label="Tình trạng sản phẩm"
                          :items="status"
                          item-text="name"
                          item-value="id"
                        />
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                        <div class="d-flex">
                          <v-checkbox
                            class="mr-3"
                            dense
                            label="Miễn phí ship"
                            v-model="editItem.is_free_shipping"
                          ></v-checkbox>
                          <v-checkbox
                            dense
                            label="Quà tặng"
                            v-model="editItem.is_gift"
                          ></v-checkbox>
                        </div>
                      </v-col>
                      <v-col cols="12">
                        <v-textarea
                          single-line
                          dense
                          auto-grow
                          outlined
                          hide-details="auto"
                          label="Mô tả sản phẩm"
                          v-model="editItem.description"
                        ></v-textarea>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="secondary"
                    outlined
                    class="text-xs mr-3"
                    @click="closeModal('MODAL_ITEM')"
                    >Hủy
                  </v-btn>
                  <v-btn color="primary" class="text-xs" @click="save">Lưu</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>

            <!-- dialog delete-->
            <v-dialog v-model="dialogDelete" max-width="350">
              <v-card>
                <v-card-title class="text-sm">Bạn có chắc muốn xóa sản phẩm này?</v-card-title>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="blue darken-1"
                    class="text-xs"
                    text
                    @click="closeModal('MODAL_DELETE')"
                    >Hủy
                  </v-btn>
                  <v-btn color="blue darken-1" class="text-xs" text @click="deleteConfirm"
                    >Xóa
                  </v-btn>
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>

        <template #[`header`]="{ props: { headers } }">
          <thead class="custom-header">
            <tr class="custom-header">
              <th class="custom-header-item" v-for="(item, index) in headers" :key="index">
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
            <span class="text-xs">{{ item.description }}</span>
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
            <v-icon @click="deleteItem"> mdi-delete </v-icon>
          </div>
        </template>
      </v-data-table>

      <div class="table-footer">
        <v-pagination
          v-model="page"
          :total-visible="5"
          class="text-xs"
          :length="lists.length"
        ></v-pagination>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import { categoryApis, productApis } from '@/apis';
import { MODAL_ITEM, MODAL_DELETE } from '@/constants';

export default {
  name: 'ProductTable',
  data() {
    return {
      dialog: false,
      dialogDelete: false,
      editedIndex: -1,
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
      discounts: [0, 5, 10, 15, 20, 25, 30],
      status: ['Còn hàng', 'Hết hàng'],
      lists: [],
      editItem: {},
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
    formTitle() {
      return this.editedIndex === -1 ? 'Thêm sản phẩm' : 'Sửa sản phẩm';
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
    closeModal(type) {
      switch (type) {
        case MODAL_ITEM:
          this.dialog = false;
          this.$nextTick(() => {
            this.editedIndex = -1;
          });
          break;
        case MODAL_DELETE:
          this.dialogDelete = false;
          this.$nextTick(() => {
            this.editedIndex = -1;
          });
          break;
        default:
          return;
      }
    },
    deleteItem() {
      this.dialogDelete = true;
    },
    deleteConfirm() {
      this.closeModal(MODAL_DELETE);
    },
    showEditItem(item) {
      this.dialog = true;
      this.editItem = { ...item };
    },
    save() {},
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
      width: 29rem;
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
.table-footer {
  margin-top: 3rem;
  .v-pagination__item {
    font-size: 1.5rem !important;
  }
}
</style>
