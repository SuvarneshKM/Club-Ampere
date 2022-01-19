import ArrowRightLineIcon from 'remixicon-react/ArrowRightLineIcon';

export default function Card() {
  return (
    <div className='flex flex-wrap gap-6 justify-center'>
      <div className='w-80 h-80 rounded-xl px-6 py-14 flex flex-col bg-white bg-opacity-5'>
        <img
          src='./images/guide/syllabus.png'
          className='w-12 h-12'
          alt='Syllabus'
        />
        <h4 className='font-bold text-white text-base pb-4'>Syllabus</h4>
        <p className='font-normal text-white text-opacity-50 text-sm pb-6'>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat.
        </p>
        <button className='flex space-x-1 text-secondary'>
          Go there
          <ArrowRightLineIcon />
        </button>
      </div>
      <div className='w-80 h-80 rounded-xl px-6 py-14 flex flex-col bg-white bg-opacity-5'>
        <img
          src='./images/guide/questions.png'
          className='w-12 h-12'
          alt='Syllabus'
        />
        <h4 className='font-bold text-white text-base pb-4'>Questions</h4>
        <p className='font-normal text-white text-opacity-50 text-sm pb-6'>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat.
        </p>
        <button className='flex space-x-1 text-secondary'>
          Go there
          <ArrowRightLineIcon />
        </button>
      </div>
      <div className='w-80 h-80 rounded-xl px-6 py-14 flex flex-col bg-white bg-opacity-5'>
        <img
          src='./images/guide/study.png'
          className='w-12 h-12'
          alt='Syllabus'
        />
        <h4 className='font-bold text-white text-base pb-4'>Study Materials</h4>
        <p className='font-normal text-white text-opacity-50 text-sm pb-6'>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat.
        </p>
        <button className='flex space-x-1 text-secondary'>
          Go there
          <ArrowRightLineIcon />
        </button>
      </div>
    </div>
  );
}
