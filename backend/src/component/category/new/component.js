import React, { useEffect } from "react";
import FormInput from "../form";
import { CREATE_CATEGORY } from "../../query/category.query";
import { useMutation } from "@apollo/client";

const CategoryNew = () => {
  const [create, { data, loading, error }] = useMutation(CREATE_CATEGORY);

  useEffect(() => {
    if (!error && data) {
      window.location.reload();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  return (
      <FormInput data={{empty: true}} onSubmit={create} />
  );
};

export default CategoryNew;
