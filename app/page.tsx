import { BlogPosts } from 'app/components/posts';
import TypewriterComponent from './components/typeWriter';
import Image from 'next/image';

export default function Page() {
  return (
    <section className='flex items-center justify-center flex-col'>
      <div className="grid grid-cols-3 gap-4 p-20 bg-gray-700  backdrop-blur-3xl w-4xl rounded-lg">
        <h1 className="mb-8 text-4xl font-semibold tracking-tighter col-span-2">
          <TypewriterComponent />
        </h1>
        <Image src={'/images/zuricata.jpg'} alt="" width={150} height={150} className="rounded-full col-span-1" />
        <p className="mb-4 col-span-3">
          {`Desarrollo interfaces de usuario para aplicaciones web con frameworks y librerías de JasvaScript. Me encanta escribir, viajar y tomar fotografías expontaneas. Estoy completamente seguro de que Bitcoin será la moneda que representa un mundo en Libertad.`}
        </p>
        <div className="container mx-auto p-2">
          <h2 className='mb-2 text-2xl font-semibold tracking-tighter col-span-2 bg-gradient-to-r from-[#0EA5EA] to-[#0BD1D1] bg-clip-text text-transparent'>Posts</h2>
          <BlogPosts />
        </div>
      </div>

    </section>
  );
}
