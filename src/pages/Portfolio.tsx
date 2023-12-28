import { images } from '../constants';

const Portfolio = () => {
  return (
    <div className="bg-white flex flex-col">
      <div className="self-center w-full max-w-[1236px] mt-24 px-5 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
            <div className="justify-center items-center bg-gray-200 flex flex-col aspect-square w-full rounded-3xl max-md:mt-10 text-center">
              <img
                loading="lazy"
                src={images.portfolio1}
                alt='portfolio'
                className="aspect-square object-contain object-center w-full overflow-hidden"
              />
              <p className='p-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <div className="justify-center items-center bg-gray-200 flex flex-col aspect-square w-full rounded-3xl max-md:mt-10 text-center">
              <img
                loading="lazy"
                src={images.portfolio2}
                alt='portfolio'
                className="aspect-square object-contain object-center w-full overflow-hidden"
              />
              <p className='p-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <div className="justify-center items-center bg-gray-200 flex flex-col aspect-square w-full rounded-3xl max-md:mt-10 text-center">
              <img
                loading="lazy"
                src={images.portfolio1}
                alt='portfolio'
                className="aspect-square object-contain object-center w-full overflow-hidden"
              />
              <p className='p-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            </div>
          </div>
        </div>
      </div>
      <div className="self-center w-full max-w-[1236px] mt-24 px-5 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
            <div className="justify-center items-center bg-gray-200 flex flex-col aspect-square w-full rounded-3xl max-md:mt-10 text-center">
              <img
                loading="lazy"
                src={images.portfolio1}
                alt='portfolio'
                className="aspect-square object-contain object-center w-full overflow-hidden"
              />
              <p className='p-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <div className="justify-center items-center bg-gray-200 flex flex-col aspect-square w-full rounded-3xl max-md:mt-10 text-center">
              <img
                loading="lazy"
                src={images.portfolio2}
                className="aspect-square object-contain object-center w-full overflow-hidden"
              />
              <p className='p-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <div className="justify-center items-center bg-gray-200 flex flex-col aspect-square w-full rounded-3xl max-md:mt-10 text-center">
              <img
                loading="lazy"
                src={images.portfolio1}
                alt='portfolio'
                className="aspect-square object-contain object-center w-full overflow-hidden"
              />
              <p className='p-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio