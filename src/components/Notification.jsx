import { IconCheck, IconX } from '@tabler/icons-react';

const Notification = ({ showMessage, message, success }) => {
  return (
    <div
      className={`absolute bottom-8 right-1 sm:right-4 bg-gray-500 rounded-lg max-w-sm w-full flex flex-col items-center overflow-hidden p-2 sm:p-4 shadow-lg ${
        showMessage ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
      } ${
        success ? 'bg-green-100' : 'bg-red-100'
      } transition-all duration-300 ease-linear`}
    >
      <div className='flex flex-row gap-2 justify-center items-center w-full'>
        {success ? (
          <IconCheck
            className='text-green-500 font-bold  rounded-full'
            size={40}
          />
        ) : (
          <IconX className='text-red-500 font-bold rounded-full' size={40} />
        )}
        <span
          className={`text-sm sm:text-base ${
            success ? 'text-green-500' : 'text-red-500'
          }`}
        >
          {message}
        </span>
      </div>
      {/* <div
        className={`absolute w-[calc(100%-16px)] h-2 bottom-0 left-2 -scale-x-50 origin-left rounded-sm ${
          success
            ? 'bg-gradient-success animate-progress-bar '
            : 'bg-gradient-danger animate-progress-bar '
        }`}
      ></div> */}
    </div>
  );
};

export default Notification;
