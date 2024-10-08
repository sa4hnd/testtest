'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import SocialMediaPopup from './SocialMediaPopup'

export function Page() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const openPopup = () => setIsPopupOpen(true)
  const closePopup = () => setIsPopupOpen(false)

  return (
    <div dir="rtl" className="min-h-screen bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] text-white font-sans overflow-x-hidden">
      <div className="max-w-full mx-auto">
        {/* Header */}
        <header className="py-4 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center md:items-start">
          <div className="flex items-center justify-center md:justify-start w-full md:w-auto">
            <Image 
              src="/logos/gem.png" 
              alt="Gems Logo" 
              width={160} 
              height={160} 
              className="md:-mr-8 md:-mt-8"
            />
          </div>
          <nav className="hidden md:flex space-x-6 mt-4 md:mt-0">
            {['التسعير', 'الخصوصية', 'الشروط'].map((item) => (
              <Link key={item} href="#" className="text-gray-300 hover:text-pink-400 transition-colors">
                {item}
              </Link>
            ))}
          </nav>
        </header>

        {/* Content wrapper */}
        <div className="px-4 md:px-8">
          {/* Hero Section */}
          <section className="text-center py-12 md:py-20 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 to-transparent rounded-full blur-3xl"></div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 relative z-10">
              <div className="flex flex-col items-center justify-center">
                <div className="flex flex-wrap items-baseline justify-center">
                  <span className="relative inline-block ml-2 md:ml-4">
                    <span className="relative z-10 bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text">MNK</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 blur-lg opacity-50"></span>
                  </span>
                  <span className="whitespace-nowrap">بریکارێ تەیێ باوەرپێکری</span>
                </div>
                <span className="whitespace-nowrap mt-2 md:mt-0">د چارەسەریا ئامێران دا</span>
              </div>
            </h1>
            <p className="text-gray-400 text-base md:text-lg lg:text-xl mb-8 md:mb-12 relative z-10 max-w-3xl mx-auto px-4">
            ئەم شارەزایێن هەوە نە بۆ خزمەتێن چاککرنا ئامیران ب لەز، باوەرپێکری، و ب نرخەکێ گونجای. ژ کۆمپیوتەرێن سەر مێزێ و لاپتۆپان ، ئەم کارکرنا وان ڤەدگەرینین دا هوین بەرهەمدار و گرێدای بمینن.
            .
            </p>
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-pink-600 rounded-full blur-xl opacity-50"></div>
              <button 
                onClick={openPopup}
                className="bg-pink-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base font-semibold hover:bg-pink-700 transition-colors relative z-10 shadow-lg overflow-hidden group"
              >
                <span className="relative z-10">← MNK </span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></span>
                <span className="absolute inset-0 border-2 border-white rounded-full opacity-25 animate-spin-slow"></span>
                <span className="absolute inset-0 -z-10 bg-gradient-radial from-pink-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="absolute top-0 left-0 w-12 h-full bg-white/20 -skew-x-[20deg] animate-shine"></span>
                <span className="absolute inset-0 rounded-full shadow-[0_0_20px_10px_rgba(236,72,153,0.3)] opacity-100 group-hover:opacity-80 transition-opacity duration-300"></span>
                <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 opacity-75 blur-md group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>
            </div>
          </section>

          {/* Product Screenshot */}
          <section className="mb-12 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 to-transparent rounded-3xl blur-2xl"></div>
            <div className="relative z-10">
              <Image
                src="/first2.png"
                alt="Gems AI Interface"
                width={1200}
                height={675}
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
          </section>

          {/* Client Logos */}
          <section className="mb-12">
            <p className="text-center text-gray-500 text-sm mb-6">Trusted by professionals from companies such as</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
              {[{ name: 'Credit Suisse', src: '/logos/credit-suisse.svg' }, { name: 'Gartner', src: '/logos/gartner.svg' }, { name: 'Harvard', src: '/logos/harvard.svg' }, { name: 'McKinsey', src: '/logos/mckinsey.svg' }, { name: 'NYT', src: '/logos/nyt.svg' }, { name: 'OpenAI', src: '/logos/openai.svg' }].map((company) => (
                <div key={company.name} className="w-32 h-12 relative grayscale opacity-50 hover:opacity-100 transition-opacity">
                  <Image
                    src={company.src}
                    alt={`${company.name} logo`}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* New content based on the image and your description */}
          <div className="space-y-12 mb-12">
            <div className="text-center">
              <h2 className="text-3xl font-semibold text-white mb-4">بلەزترین چارەسەری<br/>ئێدی دووبارە دوو دل نەبە.</h2>
              <p className="text-gray-400 text-lg">
               ل MNK مە باوەری ب ئاسانکاریێ هەیە ، ب تنێ ب ئێک پەیوەندی یان کلیک، دشێی خزمەتگوزاریێن چاکرن و دەستنیشانکریا ئامێران
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8">
              {[
                { title: "پتر ژ چاککرنەکێ", image: "/answers.png", description: "خزمەتگوزاریێن مە ژ چاککرنێ دەرباز دبن، ئەم پێشکێشی چارەسەریێن تەمام دکەین" },
                { title: "ئامادە یی دەستپێکرنێ", image: "/cpu.png", description: " ئەڤرۆ پەیوەندیێ ب مە بکە و بهێلە ئەم ئاستەنگیێن ئامیرێن تە چارەسەر بکەین. لەز، باوەرپێکری، و بێ سەرئێشی " },
                { title: "بەرسڤێن بلەز وەرگرە", image: "/sahnd.png", description: "سیستەمێ مە یێ پێشکەفتی دێ بەرسڤان ب لەزترین دەم پێشکێش کەت" },
                { title: "خزمەتگوزاری", image: "/hardware.jpg", description: "گەلەک جاران تە تاقی کر؟ چاککرنێن خراب تە ماندی کر؟ ل MNK، ئەم د جودانە رازیبوونا تە، ئارمانجا مەیە!" }
              ].map((section, index) => (
                <div key={index} className="rounded-2xl overflow-visible relative group">
                  <div className="absolute -inset-0.5 bg-white/10 rounded-[18px] opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10 bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] p-6 border border-white/20 rounded-2xl h-full flex flex-col">
                    <h3 className="text-xl font-semibold mb-2 text-white">{section.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{section.description}</p>
                    <div className="bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] rounded-xl p-4 shadow-inner flex-grow">
                      <Image
                        src={section.image}
                        alt={section.title}
                        width={1000}
                        height={500}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-6 mb-12">
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-3 mt-1 text-pink-500">
                  <path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="text-white text-lg font-semibold">چاککرنا ب لەز </h3>
                  <p className="text-gray-400">
                    ئەم دزانین دەم گرانبهایە. لەوما ئەم گەرەنتیا چاککرنا لەز ددەین بێ کێمکرنا کوالیتێ
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-3 mt-1 text-pink-500">
                  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="text-white text-lg font-semibold">بهایێن گونجای</h3>
                  <p className="text-gray-400">
                     خزمەتا بلند کوالیتە نابیت پارێن تە هەمی ببەت. ئەم بهایێن زەلال و رکەبەر پێشکێش دکەین بۆ هەمی پێدڤیێن چاککرنێ


                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-3 mt-1 text-pink-500">
                  <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="text-white text-lg font-semibold">شارەزایی - پسپۆری</h3>
                  <p className="text-gray-400">
                  دەستێن مە د شارەزانە
هەر ئامیرەک دێ ساخکەینەڤە </p>
                </div>
              </div>
            </div>

            <div className="py-12"></div>

            <div className="text-center">
              <h2 className="text-3xl font-semibold text-white mb-4">ل MNK هوین شاهێن مەنە<br/>ئامیرێن وە، بەرپرسیارا مەنە<br/>ب لەز وەرن، دەرگەه ڤەکرینە<br/>چاککرنا هەری باش، مافێ وەنە!
              </h2>
          
            </div>
          </div>

          {/* CTA Section */}
          <section className="text-center mb-12 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#111111] to-[#222222] rounded-lg opacity-75"></div>
            <div className="absolute inset-0 bg-[url('/stars.png')] bg-repeat opacity-30"></div>
            <div className="relative z-10 py-12 px-6">
              <div className="mb-6 relative">
                <Image src="/logos/gem.png" alt="لۆگۆیێ MNK" width={300} height={300} className="mx-auto" />
                <div className="absolute inset-0 bg-gradient-radial from-pink-500/50 to-transparent blur-2xl"></div>
              </div>
              <h2 className="text-3xl font-bold mb-4 text-white">
              ئەڤرۆ پەیوەندیێ بکە
              </h2>
              <button 
                onClick={openPopup}
                className="bg-[#222222] text-white px-4 py-2 md:px-6 md:py-3 rounded-lg text-sm md:text-base font-semibold hover:bg-[#333333] transition-colors shadow-lg border border-gray-700 relative overflow-hidden group"
              >
                <span className="relative z-10">← MNK - REPAIRS </span>
                <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>
            </div>
          </section>

          {/* Footer */}
      {/* Footer */}
<footer className="py-8 border-t border-gray-800">
  <div className="flex flex-wrap justify-between items-end">
    <div className="flex items-center -mr-20 -mb-8">
      <Image src="/logos/gem.png" alt="لۆگۆیێ MNK" width={220} height={220} />
    </div>
    <div className="flex flex-col items-end space-y-4">
      <div className="flex space-x-4">
        <Link href="#" className="text-gray-400 hover:text-white transition-colors">نهێنیپارێزی</Link>
        <Link href="#" className="text-gray-400 hover:text-white transition-colors">مەرج</Link>
      </div>
      <Link 
        href="https://instagram.com/sahnd.hamzani" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-gray-400 hover:text-pink-400 transition-colors text-sm"
      >
        دیزاین و دروستکرن ژلایێ @sahnd.hamzani ڤە
      </Link>
    </div>
  </div>
</footer>

      {/* Social Media Popup */}
      <SocialMediaPopup isOpen={isPopupOpen} onClose={closePopup} />
    </div>
  )
}