import { images } from '../constants';

const About = () => {
  return (
    <div className="bg-white flex flex-col items-stretch">
      <div className="self-center w-full max-w-[1236px] mt-24 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
            <div className="flex flex-col items-stretch my-auto px-5 max-md:max-w-full max-md:mt-10">
              <div className="text-black text-2xl font-bold max-md:max-w-full">
                Hey there! I'm John Doe, 35 years old, and I'm captivated by the
                world of photography.
              </div>
              <div className="text-black text-lg mt-9 max-md:max-w-full">
                As far back as I can remember, my love affair with photography
                began when I unwrapped my very first camera on a magical
                Christmas morning. It was a gift that transformed my world. The
                sheer joy of holding that camera in my hands sparked an
                insatiable curiosity and ignited a passion within me that
                continues to burn brightly to this day.
                <br />
                <br />
                From the moment I clicked that shutter for the first time, I was
                hooked. The ability to freeze moments in time, to capture
                emotions, and to tell stories through the lens of a camera
                fascinated me endlessly. What started as an innocent gift
                evolved into a lifelong obsession and a journey of
                self-discovery through visual storytelling.
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              src={images.camera1}
              alt='about'
              className="aspect-[1.5] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-7"
            />
          </div>
        </div>
      </div>
      <div className="self-center w-full max-w-[1236px] mt-16 px-5 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              srcSet={images.camera2}
              alt='about'
              className="aspect-[1.54] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-5"
            />
          </div>
          <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="text-black text-lg mt-1 max-md:max-w-full max-md:mt-6">
              Through the years, I've explored various facets of
              photography—experimenting with different techniques, diving into
              diverse genres, and honing my skills. Every click of the shutter
              is an opportunity for me to express myself creatively and to share
              my unique perspective with the world.
              <br />
              <br />
              Photography, for me, goes beyond mere snapshots; it's a way of
              life—a constant pursuit of beauty in the everyday, an unspoken
              language that speaks volumes, and a medium through which I connect
              with the world around me. Whether it's capturing the play of light
              at sunrise, the genuine emotions in a portrait, or the
              breathtaking landscapes that Mother Nature offers, I find endless
              inspiration in every frame.
              <br />
              <br />
              Join me on this incredible journey as I strive to freeze moments,
              evoke emotions, and encapsulate the beauty of life through my
              lens. Let's embark on this visual adventure together and discover
              the world of photography through my eyes.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About