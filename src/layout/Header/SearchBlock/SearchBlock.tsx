'use client';
import React, { ChangeEvent, useMemo, useState } from 'react';
import styles from './SearchBlock.module.scss';
import { SearchInput } from '@/components/ui/SearchInput/SearchInput';
import Fuse from 'fuse.js';
import { ResultBlock } from './ResultBlock/ResultBlock';

const data = [
  { name: 'Apple', category: 'Fruit' },
  { name: 'Banana', category: 'Fruit' },
  { name: 'Carrot', category: 'Vegetable' },
  { name: 'Dragonfruit', category: 'Fruit' },
  { name: 'Eggplant', category: 'Vegetable' },
  { name: 'Fig', category: 'Fruit' },
  { name: 'Grape', category: 'Fruit' },
];

export const SearchBlock = () => {
  const [value, setValue] = useState<string>('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const fuse = useMemo(() => {
    return new Fuse(data, {
      keys: ['name', 'category'],
      threshold: 0.3, // чем меньше — тем строже поиск
    });
  }, []);

  const resultsData = value ? fuse.search(value).map((result) => result.item) : data;

  return (
    <div className={styles.root}>
      <SearchInput
        name='searchInput'
        type='text'
        value={value}
        onChange={onChange}
        placeholder='Поиск по товарам и услугам...'
      />

      <ResultBlock resultsData={resultsData} value={value} />
    </div>
  );
};
