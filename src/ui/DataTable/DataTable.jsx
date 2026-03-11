import { Table } from "antd";

export const DataTable = ({ data, columns, pagination }) => {
  return (
    <div className="w-full overflow-x-auto">
      <Table
        dataSource={data}
        columns={columns}
        pagination={pagination}
        rootClassName="[&_.ant-table-cell]:!py-[16px] [&_.ant-table-cell]:!px-[24px] [&_.ant-table-cell]:!font-medium [&_.ant-table-cell]:!cursor-pointer"
      />
    </div>
  );
};
