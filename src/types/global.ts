import React from 'react';

export type Routes = {
  path: string;
  component: React.FC;
};

export type FormControls = {
  id: string;
  type: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: any;
};

export type CardProducts = {
  img: string;
  title: string;
  desc: string;
  price: string;
};
