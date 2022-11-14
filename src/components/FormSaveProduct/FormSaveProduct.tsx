import classNames from 'classnames/bind';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { CardProducts, FormControls } from '~/types/global';
import Button from '../Button';
import FormControl from '../FormControl';
import styles from './FormSaveProduct.module.scss';

import { SaveSlice } from './SaveSlice';

const cx = classNames.bind(styles);

function FormSaveProduct() {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState('');

  const dispatch = useDispatch();

  const handleInputTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleInputDesc = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDesc(e.target.value);
  };

  const handleInputPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value);
  };

  const FORM_CONTROL_LIST: FormControls[] = [
    {
      id: 'name',
      type: 'text',
      label: 'Name Product',
      placeholder: 'Input Name Product...',
      value: name,
      onChange: handleInputTitle,
    },
    {
      id: 'desc',
      type: 'text',
      label: 'Desc Product',
      placeholder: 'Input Desc Product...',
      value: desc,
      onChange: handleInputDesc,
    },
    {
      id: 'price',
      type: 'text',
      label: 'Price Product',
      placeholder: 'Input Price Product...',
      value: price,
      onChange: handleInputPrice,
    },
  ];

  const handleSubmit = () => {
    const action = SaveSlice.actions.addProduct({
      title: name,
      desc: desc,
      price: price,
      img: 'https://picsum.photos/150',
    } as CardProducts);
    dispatch(action);
  };

  return (
    <div className={cx('wrapper')}>
      {FORM_CONTROL_LIST.map((formControl, index) => {
        return (
          <FormControl
            key={index}
            id={formControl.id}
            label={formControl.label}
            type={formControl.type}
            placeholder={formControl.placeholder}
            value={formControl.value}
            onChange={formControl.onChange}
          ></FormControl>
        );
      })}
      <Button onClick={handleSubmit}>Save</Button>
    </div>
  );
}

export default FormSaveProduct;
