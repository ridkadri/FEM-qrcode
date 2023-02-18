import qrcode from './images/image-qr-code.png';

function App() {
  return (
    <div className='bg-background h-screen'>
      <div className="flex justify-center items-center h-full ">
        <div className='max-w-screen-mobile m-7 rounded-2xl shadow-lg bg-white p-4 my-auto'>
          <img className="w-full rounded-xl" src={qrcode} alt="qr-code"/>
          <div className='px-6 py-4'>
            <h1 className='font-bold text-[21px] text-dark-blue text-center mb-2'>
              Improve your front-end skills by building projects
            </h1>
            <p 
              className='text-[15px] text-gray-blue text-center'>
              Scan the QR code to visit Frontend Mentor and 
              take your coding skills to <br/> the next level
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
