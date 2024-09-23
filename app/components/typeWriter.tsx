'use client';

import Typewriter from 'typewriter-effect';

export default function TypewriterComponent() {
  return (
    <div>
      <Typewriter
        options={{
          cursor: '',
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString(
              '<span class="bg-gradient-to-r from-[#0EA5EA] to-[#0BD1D1] bg-clip-text text-transparent">Hola, soy @cardugarte</span>',
            )
            .pauseFor(2500)
            .start();
        }}
      />
    </div>
  );
}
