<template>
  <div class="case-list">
    <!-- 筛选和搜索区域 -->
    <div class="filters">
      <el-input
        placeholder="Search by data"
        v-model="searchQuery"
        clearable
        class="search-box"
      />
      <el-select
        v-model="statusFilter"
        placeholder="Filter by status"
        class="filter-box"
        clearable
      >
        <el-option label="Annotated" value="Annotated" />
        <el-option label="Unannotated" value="Unannotated" />
      </el-select>
    </div>

    <!-- 案例表格 -->
    <div class="table-wrapper">
      <el-table
        :data="filteredData"
        border
        stripe
        class="table-container"
        style="width: 100%"
      >
        <el-table-column prop="id" label="ID" align="center" :resizable="false" />
        <el-table-column prop="data" label="Data" align="center" :resizable="false" />
        <el-table-column
          prop="responsible"
          label="Responsible"
          align="center"
          :resizable="false"
        />
        <el-table-column
          prop="status"
          label="Status"
          align="center"
          :resizable="false"
        >
          <template #default="scope">
            <el-tag
              :type="scope.row.status === 'Annotated' ? 'success' : 'info'"
            >
              {{ scope.row.status }}
            </el-tag>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 模拟案例数据
      caseData: Array.from({ length: 100 }, (_, index) => ({
        id: index + 1,
        data: `data_${(index + 1).toString().padStart(2, "0")}`,
        responsible: "junior",
        status: index % 2 === 0 ? "Annotated" : "Unannotated",
      })),
      searchQuery: "", // 搜索框输入值
      statusFilter: null, // 筛选状态值
    };
  },
  computed: {
    // 根据搜索和筛选条件过滤数据
    filteredData() {
      return this.caseData.filter((item) => {
        const matchesSearch =
          !this.searchQuery || item.data.includes(this.searchQuery);
        const matchesFilter =
          !this.statusFilter || item.status === this.statusFilter;
        return matchesSearch && matchesFilter;
      });
    },
  },
};
</script>

<style scoped>
.case-list {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
}

.filters {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.search-box {
  width: 300px;
}

.filter-box {
  width: 200px;
}

.table-wrapper {
  max-height: 550px; /* 限制表格整体高度 */
  overflow: auto; /* 保证滚动条出现在表格内容部分 */
  border-radius: 8px;
  border: 1px solid #ddd;
  /* 保留滚动条空间 */
  scrollbar-gutter: stable both-edges;
}

.el-table {
  border-radius: 8px;
  border: none;
  width: 100%; /* 固定宽度 */
}

.el-table th {
  background-color: #f5f5f5;
  text-align: center;
  font-weight: bold;
}

.el-table td {
  text-align: center;
}
</style>
