import { createSlice } from '@reduxjs/toolkit';

export const SaveSlice = createSlice({
  name: 'buy',
  initialState: [
    {
      img: 'https://picsum.photos/150',
      desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit quasi accusantium ducimus quia animi ea ipsam quibusdam voluptates praesentium laboriosam, cumque, obcaecati, minima voluptas. Explicabo quae voluptatibus recusandae neque id?',
      price: '20.000 VNĐ',
      title: 'Product 1',
    },
    {
      img: 'https://picsum.photos/150',
      desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit quasi accusantium ducimus quia animi ea ipsam quibusdam voluptates praesentium laboriosam, cumque, obcaecati, minima voluptas. Explicabo quae voluptatibus recusandae neque id?',
      price: '30.000 VNĐ',
      title: 'Product 2',
    },
    {
      img: 'https://picsum.photos/150',
      desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit quasi accusantium ducimus quia animi ea ipsam quibusdam voluptates praesentium laboriosam, cumque, obcaecati, minima voluptas. Explicabo quae voluptatibus recusandae neque id?',
      price: '12.000 VNĐ',
      title: 'Product 3',
    },
  ],
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload);
    },
  },
});
