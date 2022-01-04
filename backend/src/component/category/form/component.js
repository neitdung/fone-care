import React, {} from "react";
import { Form, Input, Upload, Button, Select, Modal } from 'antd';
import { GET_CATEGORIES } from "../../query/category.query";
import { useQuery } from "@apollo/client";

const FormInput = (data, onSubmit) => {

//   const [previewVisible, setPreviewVisible] = useState(false);
//   const [form] = Form.useForm();
//   const [previewImage, setPreviewImage] = useState('');
//   const [bannerImage, setBannerImage] = useState([]);
//   const [cateOptions, setCateOptions] = useState([]);
//   const [mainCate, setMainCate] = useState(false);
//   const [gets, { dataGS }] = useQuery(GET_CATEGORIES);
//   useEffect( () => {
//     gets();
//   }, []);

//   useEffect( () => {
//     if (dataGS?.) {          
//       let nxCateOptions = cateList.map(fCate => ({value: fCate._id, label: fCate.name}))
//       setCateOptions(nxCateOptions);
//     }
// }, [dataGS])
  return (
    <div>form</div>
    // <Skeleton loading={loadingG}>
    //   <Form data={dataG} onSubmit={update} />
    // </Skeleton>
  );
};

export default FormInput;
