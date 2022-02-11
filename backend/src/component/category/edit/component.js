import React from "react";
import FormInput from "../form";
import { Skeleton } from "antd";
import { useParams } from "react-router-dom";
import { GET_CATEGORY } from "../../../query/category.query";
import {  useQuery } from "@apollo/client";

const CategoryEdit = () => {
  let params = useParams();
  const { data, loading } = useQuery(GET_CATEGORY, { 
    variables: {
      id: params.id
    }
  });

  return (
    <Skeleton loading={loading}>
      <FormInput data={data} />
    </Skeleton>
  );
};

export default CategoryEdit;
