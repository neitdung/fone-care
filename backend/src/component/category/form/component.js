import React, { useEffect, useState } from "react";
import {
  Form,
  Input,
  Upload,
  Button,
  Select,
  Modal,
  Skeleton,
  Switch,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { GET_CATEGORIES, UPDATE_CATEGORY,  } from "../../../query/category.query";
import { useQuery, useMutation } from "@apollo/client";

import axios from "axios";

const FormInput = ({ data, onSubmit }) => {

  const [update] = useMutation(UPDATE_CATEGORY);
  const [create] = useMutation(CREATE_CATEGORY);

  const [form] = Form.useForm();
  const [previewImage, setPreviewImage] = useState("");

  const [previewVisible, setPreviewVisible] = useState(false);
  const [image, setImage] = useState([]);
  const [cateOptions, setCateOptions] = useState([]);
  const [mainCate, setMainCate] = useState(false);

  const { data: dataGS } = useQuery(GET_CATEGORIES);

  useEffect(() => {
    if (data?.getCategory && !data.empty) {
      form.setFieldsValue({ ...data.getCategory });
      setMainCate(data.getCategory.mainCate);
      if (data.getCategory.image) {
        setImage([{ uid: "image", url: data.getCategory.image, status: "done" }]);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (dataGS?.getAllCategories) {
      let nxCateOptions = dataGS.getAllCategories.filter(item => item.mainCate).map((fCate) => ({
        value: fCate.id,
        label: fCate.name,
      }));
      setCateOptions(nxCateOptions);
    }
  }, [dataGS]);

  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewVisible(true);
  };

  const handleChangeImage = ({ fileList: newFileList }) => {
    if (newFileList.length === 0) {
      setImage([]);
    } else {
      setImage([newFileList[newFileList.length - 1]]);
    }
  };

  const handleCancel = () => setPreviewVisible(false);
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  const dummyRequest = ({ file, onSuccess }) => {
    setTimeout(() => {
      onSuccess("ok");
    }, 0);
  };
  
  const uploadImage = () => {
    let formData = new FormData();
    if (image.length && image[0].originFileObj) {
      formData.append("image", image[0].originFileObj);
    }
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    axios({
      method: "POST",
      url: `http://localhost:5000/api/file/upload-image}`,
      data: formData,
      config,
    })
      .then((res) => {
        if (res.data.error) {
          console.log(res.data.message);
        } else {
          form.setFieldsValue({ image: res.data.path });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const submit = async (e) => {
    e.preventDefault();
    await uploadImage();
    form
      .validateFields()
      .then((values) => {
        values.parentCate = mainCate ? "" : values.parentCate;
        onSubmit({ ...values, mainCate: mainCate });
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
    console.log(data);
  };
  return (
    <Skeleton loading={!data}>
      <Form form={form} labelAlign="left">
        <Form.Item
          name="name"
          labelCol={{ span: 3 }}
          label="Category name"
          rules={[
            {
              required: true,
              message: "Please input cate name",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="slug" labelCol={{ span: 3 }} label="Url key">
          <Input />
        </Form.Item>
        <Form.Item label="Is main cate" labelCol={{ span: 3 }}>
          <Switch checked={mainCate} onChange={(e) => setMainCate(!mainCate)} />
        </Form.Item>
        <Form.Item
          name="parentCate"
          label="Parent"
          hidden={mainCate}
          labelCol={{ span: 3 }}
        >
          <Select style={{ width: "50%" }} options={cateOptions} />
        </Form.Item>
        <Form.Item
          name="description"
          labelCol={{ span: 3 }}
          label="Description"
          rules={[
            {
              required: true,
              message: "Please input description",
            },
          ]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>
        <Form.Item labelCol={{ span: 3 }} label="Image">
          <Upload
            listType="picture-card"
            fileList={image}
            onPreview={handlePreview}
            onChange={handleChangeImage}
            customRequest={dummyRequest}
          >
            {uploadButton}
          </Upload>
        </Form.Item>
        <Form.Item>
          <Button onClick={(e) => submit(e)}>Submit</Button>
        </Form.Item>
        <Modal
          visible={previewVisible}
          title="Upload Image"
          footer={null}
          onCancel={handleCancel}
        >
          <img
            alt="example"
            accept=".png, .jpeg, .jpg"
            style={{ width: "100%" }}
            src={previewImage}
          />
        </Modal>
      </Form>
    </Skeleton>
  );
};

export default FormInput;
