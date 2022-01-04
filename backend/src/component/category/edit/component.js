import React, { useEffect } from "react";
import FormInput from "../form";
import { Skeleton } from "antd";
import { useParams } from "react-router-dom";
import { GET_CATEGORY, UPDATE_CATEGORY } from "../../query/category.query";
import { useMutation, useQuery } from "@apollo/client";

const CategoryUpdate = () => {
  let params = useParams();
  const [get, { dataG, loadingG }] = useQuery(GET_CATEGORY);
  const [update, { dataU, loadingU, errorU }] = useMutation(UPDATE_CATEGORY);

  useEffect(() => {
    if (!errorU && dataU) {
      window.location.reload();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadingU]);
  useEffect(() => {
    get({
      variables: {
        id: params.id,
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Skeleton loading={loadingG}>
      <FormInput data={dataG} onSubmit={update} />
    </Skeleton>
  );
};

export default CategoryUpdate;
