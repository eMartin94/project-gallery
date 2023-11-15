import { IconMail, IconPhone, IconSend } from '@tabler/icons-react';
import { useDarkMode } from '../hooks/useDarkMode';
import { useState } from 'react';
import { sendEmail } from '../utils/sendEmail';
import Notification from '../components/Notification';

const ContactPage = () => {
  const { isDarkMode } = useDarkMode();
  const [userEmail, setUserEmail] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [userMessage, setUserMessage] = useState(
    'Thank you for your message. I will reply as soon as possible.'
  );
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await sendEmail(userEmail, userMessage);
    if (res) {
      setSuccess(true);
      setUserMessage(
        'Thank you for your message. I will reply as soon as possible.'
      );
      setUserEmail('');
    } else {
      setSuccess(false);
      setUserMessage('Something went wrong, please try again.');
    }
    setShowMessage(true);
    // handleMessage();
  };

  const handleMessage = () => {
    // setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 5000);
  };

  return (
    <section
      className={`w-[calc(100%-56px)] lg:w-[calc(100%-256px)] min-h-screen ml-14 lg:ml-64 px-8 py-4 flex flex-col gap-4 ${
        isDarkMode ? 'bg-gray-800' : 'bg-white'
      } transition-all duration-300 ease-linear relative`}
    >
      <div className='w-full h-full flex flex-col justify-evenly items-center'>
        <h1
          className={`text-3xl font-bold tracking-wider ${
            isDarkMode ? 'text-white' : 'text-black'
          } animate-opacity-out`}
        >
          Contact
        </h1>
        <div className='flex flex-col sm:flex-row gap-2 justify-evenly w-full animate-opacity-in'>
          <div className='flex flex-col gap-2 justify-center items-center px-4 py-8'>
            <IconMail className='text-gray-500' size={30} />
            <span className='text-lg font-bold text-gray-500'>EMAIL</span>
            <span className={`${isDarkMode ? 'text-white' : 'text-black'}`}>
              eduardo.martin688@gmail.com
            </span>
          </div>
          <div className='flex flex-col gap-2 justify-center items-center px-4 py-8'>
            <IconPhone className='text-gray-500' size={30} />
            <span className='text-lg font-bold text-gray-500'>PHONE</span>
            <span className={`${isDarkMode ? 'text-white' : 'text-black'}`}>
              +51 937 521 453
            </span>
          </div>
        </div>
        <div className='w-[1px] h-14 bg-gray-500'></div>
        <div className='flex flex-col gap-4 w-full justify-center items-center animate-opacity-in'>
          <span
            className={`uppercase text-center text-sm ${
              isDarkMode ? 'text-white' : 'text-black'
            }`}
          >
            únete a nuestra lista de correo
          </span>
          <form
            onSubmit={handleSubmit}
            className='flex flex-row w-full justify-center'
          >
            <input
              type='email'
              placeholder='Ingresa tu correo'
              className={`px-4 py-2 w-full sm:w-96 outline-none ${
                isDarkMode ? 'bg-white text-gray-500' : 'bg-gray-100 text-black'
              }`}
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
            <button
              type='submit'
              className={`px-4 py-4 w-16 ease-linear group ${
                isDarkMode ? 'bg-white' : 'bg-gray-100'
              }`}
              onClick={handleMessage}
            >
              <IconSend className='group-hover:translate-x-2 transition-all duration-300' />
            </button>
          </form>
        </div>
      </div>
      <Notification
        showMessage={showMessage}
        message={userMessage}
        success={success}
      />
      {/* <button onClick={handleMessage}>ver</button> */}
    </section>
  );
};

export default ContactPage;
