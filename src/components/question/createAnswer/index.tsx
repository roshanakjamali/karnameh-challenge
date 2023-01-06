import React from 'react';
import Button from '../../buttons/Button';

export const CreateAnswer: React.FC<{}> = () => {
  return (
    <>
      <div className='mt-6 mb-4'>
        <h1 className='text-black'>پاسخ خود را ثبت کنید.</h1>
      </div>
      <div className='grid gap-4'>
        <div>
          <label htmlFor='problem'>پاسخ خود را بنویسید.</label>
          <textarea id='problem' placeholder='متن پاسخ ...' />
        </div>
        <div>
          <Button label='ارسال پاسخ' className='px-16 w-auto' />
        </div>
      </div>
    </>
  );
};
