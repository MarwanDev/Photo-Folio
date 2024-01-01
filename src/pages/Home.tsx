import { images } from '../constants';

const Home = () => {
  return (
    <div className="justify-center items-center bg-white flex flex-col px-16 py-12 max-md:px-5">
      <div className="w-full max-w-[1144px] mt-16 mb-12 max-md:max-w-full max-md:my-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[46%] max-md:w-full max-md:ml-0">
            <div className="items-stretch flex flex-col my-auto max-md:max-w-full max-md:mt-10">
              <div className="text-neutral-800 text-4xl leading-10 tracking-tighter max-md:max-w-full">
                Hello! I'm John Doe
              </div>{" "}
              <div className="text-neutral-800 text-xl font-light leading-8 mt-4 max-md:max-w-full">
                A connoisseur of cityscapes and a storyteller through the lens,
                based in the vibrant heart of London. <br />
                <br />
                With over a decade of experience, I have been capturing the
                essence of urban life, one frame at a time.
              </div>
              <div className="justify-between items-stretch border-t-[color:var(--Grey,#D6D7DD)] flex gap-5 mt-8 py-4 border-t border-solid max-md:max-w-full max-md:flex-wrap">
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[54%] ml-5 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              src={images.home}
              alt="home"
              className="aspect-[0.71] object-contain object-center w-full items-start overflow-hidden grow max-md:max-w-full max-md:mt-10 h-[40vh]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home