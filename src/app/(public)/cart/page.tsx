import { AccountPageLayout } from '@/layout/AccountPageLayout/AccountPageLayout';
import { CartPage } from '@/pageComponents/CartPage/CartPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Virazh Solutions - Корзина',
  description: 'Virazh Solutions - Корзина',
};

export default function Cart() {
  return (
    <AccountPageLayout title='Моя корзина'>
      <CartPage />
    </AccountPageLayout>
  );
}
