import React, { useEffect, useState } from "react";
import { UPDATE_CATEGORY, GET_CATEGORIES } from "../../../query/category.query";
import {
  Table,
  Input,
  Skeleton,
  Popconfirm,
  Form,
  Typography,
  Button,
  message,
} from "antd";
import { Link, useNavigate } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";
import { useMutation, useQuery } from "@apollo/client";

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};
const CategoryList = () => {
  const [update] = useMutation(UPDATE_CATEGORY);
  const [form] = Form.useForm();
  const [editingKey, setEditingKey] = useState("");
  let navigate = useNavigate();
  const { data, loading, error } = useQuery(GET_CATEGORIES);
  if (loading) return <Skeleton active loading={true} />;
  if (error) message(`Error! ${error}`);

  const isEditing = (record) => record.id === editingKey;

  const edit = (record) => {
    form.setFieldsValue({
      ...record,
    });
    setEditingKey(record.id);
  };
  const cancel = () => {
    setEditingKey("");
  };

  const save = async (id) => {
    try {
      const row = await form.validateFields();
      await update(id, row);
      setEditingKey("");
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };
  const columns = [
    {
      title: "Category name",
      dataIndex: "name",
      editable: true,
    },
    {
      title: "Parent",
      dataIndex: "parentName",
      editable: false,
    },
    {
      title: "Description",
      dataIndex: "description",
      editable: true,
    },
    {
      title: "Slug",
      dataIndex: "slug",
      editable: true,
    },
    {
      title: "Is main cate?",
      dataIndex: "isMain",
      editable: false,
    },
    {
      title: "operation",
      dataIndex: "operation",
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Button
              onClick={() => save(record.id)}
              style={{
                marginRight: 8,
              }}
            >
              Save
            </Button>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              Cancel
            </Popconfirm>
          </span>
        ) : (
          <span>
            <Typography.Link
              disabled={editingKey !== ""}
              onClick={() => edit(record)}
            >
              <Button
                style={{
                  marginRight: 8,
                }}
              >
                Edit Inline
              </Button>
            </Typography.Link>
            <Typography.Link disabled={editingKey !== ""}>
              <Link to={`/category/${record.id}`}>Update</Link>
            </Typography.Link>
          </span>
        );
      },
    },
  ];
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  return (
    <Skeleton active loading={loading || !data.getAllCategories}>
      <Form form={form} component={false}>
        <Button
          icon={<PlusOutlined />}
          type="primary"
          onClick={(e) => navigate("/category/new")}
        >
          Create new category
        </Button>
        <Table
          components={{
            body: {
              cell: EditableCell,
            },
          }}
          bordered
          dataSource={data?.getAllCategories.map((resItem) => ({
            ...resItem,
            parentName: resItem.parentCate ? resItem.parentCate.name : "",
            isMain: resItem.mainCate ? "Yes" : "No",
          }))}
          columns={mergedColumns}
          rowClassName="editable-row"
          pagination={{
            onChange: cancel,
          }}
        />
      </Form>
    </Skeleton>
  );
};

export default CategoryList;
