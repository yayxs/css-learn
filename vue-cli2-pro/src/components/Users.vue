<template>
  <div>
    {{ tableData[0] }}

    <el-table :data="tableData" border stripe v-loading="loading">
      <el-table-column
        align="center"
        prop="name"
        label="name"
        min-width="120"
      ></el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      loading: true // 默认加载
    };
  },
  computed: {
    ...mapState({
      tableData: state => state.users.list
    })
  },
  mounted() {
    this.getTableData().finally(() => {
      this.loading = false;
    });
  },
  methods: {
    ...mapActions("users", {
      getTableData: "getList"
    })
  }
};
</script>
<style scoped></style>
