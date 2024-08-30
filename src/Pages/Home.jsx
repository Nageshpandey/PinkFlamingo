import SlideWrap from '../Components/SlideWrap'
import Categories from '../Components/Categories'
import WhyPinkFlamingo from '../Components/WhyPinkFlamingo'
import LatestBlogs from '../Components/LatestBlogs'
import ContactUs from '../Components/ContactUs'


export default function Home() {

  return (
    <div>

      <section>
        <SlideWrap />
      </section>
      <section className='flex w-full items-center justify-center'>
        <Categories />
      </section>
      <section className='flex w-full items-center justify-center py-5'>
        <WhyPinkFlamingo />
      </section>
      <section className='flex w-full items-center justify-center py-10'>
        <LatestBlogs />
      </section>
      <section className='flex w-full items-center justify-center py-10'>
        <ContactUs />
      </section>
    </div>
  )
}
