import Button from '../../buttons/Button';

interface CreateNewQuestionProps {
  onClose(): void;
}

export const CreateNewQuestion: React.FC<CreateNewQuestionProps> = ({
  onClose,
}) => {
  return (
    <div className='grid gap-4'>
      <div>
        <label htmlFor='subject'>موضوع</label>
        <input type='text' id='subject' />
      </div>
      <div>
        <label htmlFor='problem'>متن سوال</label>
        <textarea id='problem' />
      </div>
      <div className='flex justify-end'>
        <Button label='انصراف' varient='text' onClick={onClose} />
        <Button label='ایجاد سوال' />
      </div>
    </div>
  );
};
