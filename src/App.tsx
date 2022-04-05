import { Tab } from '@headlessui/react';
import { Fragment } from 'react';
import { Facebook, Github, Instagram } from './components/SVG';
import profile from './images/profile.jpg'
import html from './images/skills/html5.jpg'
import css from './images/skills/css3.jpg'
import js from './images/skills/js.jpg'
import php from './images/skills/PHP.jpg'
import sass from './images/skills/sass.jpg'
import tailwind from './images/skills/tailwindcss.png'
import bootstrap from './images/skills/bootstrap.png'
import laravel from './images/skills/laravel.png'
import nodejs from './images/skills/nodejs.png'
import MySQL from './images/skills/MySQL.png'
import mongoDB from './images/skills/mongoDB.png'
import expressjs from './images/skills/expressjs.png'
import vscode from './images/skills/vscode.png'

function App() {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12 md:col-span-5 xl:col-span-4 bg-emerald-500 min-h-screen">
        <div className="container mx-auto px-5 py-5">
          <div className='flex items-center flex-col relative'>
            <div className='w-48 h-48 rounded-full overflow-hidden border-8 border-emerald-500 absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-0 z-20'>
              <img
                className='object-cover'
                src={profile} alt="Moh. Sarifudin" />
            </div>
            <div className='bg-slate-100 w-full h-[calc(100vh-136px)] mt-24 relative'>
              <div className='mt-28'>
                <h1 className='font-bold text-2xl text-center text-slate-900'>Moh. Sarifudin</h1>
                <p className='text-sm text-slate-500 mt-2 px-3 indent-4 text-justify font-semibold overflow-auto h-[calc(100vh-350px)]'>Saya adalah <p className='font-bold inline'>FULLSTACK WEB DEVELOPER</p>, menekuni dunia pemrograman terutama dibidang web development sejak 2019. Berawal dari rasa penasaran bagaimana internet bekerja saya mempelajari secara otodidak dan terjerumus ke dunia pemrograman. Website ini saya buat sebagai portfolio online pribadi saya untuk bisa dikenal secara luas. Terima kasih atas kunjungan anda semoga apa yang anda cari ada di sini, senang bisa membantu.</p>
                <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-0 mb-5'>
                  <ul className='flex items-center gap-4'>
                    <li>
                      <a href="https://www.facebook.com/moh.syarifudin" target="_blank" className='inline-block w-7'>
                        <Facebook className='fill-sky-600' />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/m_syarif93/" target="_blank" className='inline-block w-7'>
                        <Instagram className='fill-rose-500' />
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/Syarif93" target="_blank" className='inline-block w-7'>
                        <Github className='fill-slate-900' />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-12 md:col-span-7 xl:col-span-8 p-5">
        <Tab.Group>
          <Tab.List className="flex justify-center items-center border-b-4 border-emerald-500 rounded">
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  type='button'
                  className={`${selected && 'bg-emerald-500 text-white'} px-3 py-1 rounded-tl rounded-tr text-slate-900 text-base font-bold md:px-5 md:py-1 md:text-lg`}
                >
                  Pendidikan
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  type='button'
                  className={`${selected && 'bg-emerald-500 text-white'} px-3 py-1 rounded-tl rounded-tr text-slate-900 text-base font-bold md:px-5 md:py-1 md:text-lg`}
                >
                  Kemampuan
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  type='button'
                  className={`${selected && 'bg-emerald-500 text-white'} px-3 py-1 rounded-tl rounded-tr text-slate-900 text-base font-bold md:px-5 md:py-1 md:text-lg`}
                >
                  Portfolio
                </button>
              )}
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <div className='p-7 md:h-[calc(100vh-90px)] overflow-auto'>
                <div className='col-span-1'>
                  <h2 className='mb-3 font-bold text-lg'>Pendidikan Formal</h2>
                  <ol className="relative border-l border-gray-200 dark:border-gray-700">                  
                    <li className="mb-10 ml-4">
                      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
                      <time className="mb-1 text-sm font-normal leading-none text-gray-400">1998 - 2005</time>
                      <h3 className="text-lg font-semibold text-gray-900">SD Negeri 4 Biau</h3>
                      <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Kab. Buol Sulawesi Tengah Indonesia</p>
                    </li>
                    <li className="mb-10 ml-4">
                      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
                      <time className="mb-1 text-sm font-normal leading-none text-gray-400">2005 - 2008</time>
                      <h3 className="text-lg font-semibold text-gray-900">Mts Negeri 1 Biau</h3>
                      <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Kab. Buol Sulawesi Tengah Indonesia</p>
                    </li>
                    <li className="mb-10 ml-4">
                      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
                      <time className="mb-1 text-sm font-normal leading-none text-gray-400">2008 - 2011</time>
                      <h3 className="text-lg font-semibold text-gray-900">SMA Negeri 1 Biau</h3>
                      <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Kab. Buol Sulawesi Tengah Indonesia</p>
                    </li>
                  </ol>
                </div>
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className='p-7'>
                <h3 className='text-center text-2xl font-bold text-slate-900'>Skills & Tools</h3>
                <div className='mt-8 flex justify-center items-center flex-wrap gap-4'>
                  <img className='w-20' src={html} alt="HTML5" />
                  <img className='w-20' src={css} alt="CSS3" />
                  <img className='w-20' src={js} alt="JavaScript" />
                  <img className='w-20' src={php} alt="PHP" />
                  <img className='w-20' src={sass} alt="SASS" />
                  <img className='w-20' src={tailwind} alt="TAILWINDCSS" />
                  <img className='w-20' src={bootstrap} alt="BOOTSTRAP" />
                  <img className='w-20' src={laravel} alt="LARAVEL" />
                  <img className='w-20' src={nodejs} alt="NodeJS" />
                  <img className='w-20' src={expressjs} alt="ExpressJS" />
                  <img className='w-20' src={MySQL} alt="MySQL" />
                  <img className='w-20' src={mongoDB} alt="MongoDB" />
                  <img className='w-20' src={vscode} alt="VSCode" />
                </div>
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className='p-7'>
                <p className='text-xl text-center text-emerald-500 font-bold'>COMMING SOON</p>
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}

export default App;
