import React from "react";
import Button from "../components/standard/button";
import Input from "../components/standard/input";

const AddUpdateProduct = () => {
  return (
    <div>
      <div className="text-2xl font-bold mb-5">Add Product</div>
      <div className="shadow-primaryShadow grid gap-3 rounded-10 py-5 px-10">
        <Input
          onChange={() => {}}
          type="text"
          value=""
          label="Title"
          placeholder="Title contain atleast 10 characters"
        />
        <Input
          onChange={() => {}}
          type="text"
          value=""
          label="Description"
          placeholder="Description contain atleast 50 characters"
        />
        <Input
          onChange={() => {}}
          type=""
          value=""
          label="Image Link"
          placeholder="Image contains a valid link"
        />
        <Input
          onChange={() => {}}
          type="text"
          value=""
          label="Categories"
          placeholder="Enter category"
        />
        <Input
          onChange={() => {}}
          type="text"
          value=""
          label="Brand"
          placeholder="Enter Brand name"
        />
        <Input
          onChange={() => {}}
          type="text"
          value=""
          label="Price"
          placeholder="Enter Price"
        />
        <Input
          onChange={() => {}}
          type="text"
          value=""
          label="Discount"
          placeholder="Enter Discount"
        />
        <div className="flex justify-end">
          <Button>Add</Button>
        </div>
      </div>
    </div>
  );
};

export default AddUpdateProduct;
