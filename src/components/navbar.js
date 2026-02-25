'use client'
import { Fragment, useEffect, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon, BookOpenIcon } from '@heroicons/react/20/solid'
import logo_pyv from '../../public/logopyv.webp'
import Image from 'next/image'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [products, setCallsToAction] = useState([])

  useEffect(() => {
    setMobileMenuOpen(false)
    setCallsToAction([
      { name: 'Documental — "El soldado"', href: 'https://www.youtube.com/watch?v=rCB8O1_7nLs&t=1938s', icon: PlayCircleIcon },
      { name: 'Contactate', href: '/contacto', icon: PhoneIcon },
      { name: 'Biblioteca Peronista', href: 'https://drive.google.com/drive/folders/1aTioaBjhAQ-QV6EJbCW1gOLR7Fgc5Qno', icon: BookOpenIcon },
    ])

    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`bg-white/95 backdrop-blur-sm sticky top-0 z-40 transition-all duration-300 ${scrolled ? 'shadow-editorial border-b border-gray-200/50' : 'border-b border-transparent'}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="m-0">
            <span className="sr-only">Principios y Valores</span>
            <Image className="h-10 sm:h-12 w-auto" src={logo_pyv} alt="Logo del partido" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-dark-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Abrir menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-8 lg:items-center">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-medium tracking-wide text-dark-700 hover:text-celeste-500 transition-colors duration-300 outline-none">
              Informaci&oacute;n
              <ChevronDownIcon className="h-4 w-4 flex-none text-dark-400" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-sm overflow-hidden bg-white shadow-editorial border border-gray-200/60">
                <div className="p-3">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-5 p-3 text-sm leading-6 hover:bg-gray-50/60 transition-colors duration-200"
                    >
                      <div className="flex h-10 w-10 flex-none items-center justify-center bg-gray-100/50 group-hover:bg-celeste-100/50 transition-colors duration-200">
                        <item.icon className="h-5 w-5 text-dark-500 group-hover:text-celeste-500 transition-colors duration-200" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-medium text-dark-900 group-hover:text-celeste-600 transition-colors duration-200">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <a href="/contacto" className="text-sm font-medium tracking-wide text-dark-700 hover:text-celeste-500 transition-colors duration-300">
            Contacto
          </a>
          <a href="/catalogo" className="text-sm font-medium tracking-wide text-dark-700 hover:text-celeste-500 transition-colors duration-300">
            Cat&aacute;logo
          </a>
          <a href="/actividades" className="text-sm font-medium tracking-wide text-dark-700 hover:text-celeste-500 transition-colors duration-300">
            Actividades
          </a>
          <a href="/arbol" className="text-sm font-medium tracking-wide text-dark-700 hover:text-celeste-500 transition-colors duration-300">
            &Aacute;rbol peronista
          </a>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="https://chat.whatsapp.com/DBS17Xx8SUVKN04Fu4wfl8"
            className="text-sm font-semibold tracking-wide text-white bg-azul-800 hover:bg-celeste-600 px-6 py-2.5 transition-all duration-300 press-feedback"
          >
            Afiliate ac&aacute; <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>

      {/* Mobile menu */}
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50 bg-azul-950/30 backdrop-blur-sm" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:border-l sm:border-gray-200/60">
          <div className="flex items-center justify-between" onClick={() => setMobileMenuOpen(false)}>
            <a href="/" className="-m-0 p-0">
              <span className="sr-only">Principios y Valores</span>
              <Image className="h-10 w-auto" src={logo_pyv} alt="Logo partido principios y valores" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-dark-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Cerrar menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-8 flow-root">
            <div className="-my-6 divide-y divide-gray-200/60">
              <div className="space-y-1 py-6">
                <Disclosure as="div">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between py-3 px-3 text-base font-medium text-dark-900 hover:text-celeste-500 transition-colors duration-200">
                        Informaci&oacute;n
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none text-dark-400 transition-transform duration-200')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-1 space-y-1">
                        {[...products].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block py-2 pl-6 pr-3 text-sm font-medium text-dark-500 hover:text-celeste-500 transition-colors duration-200"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <a href="/contacto" className="block px-3 py-3 text-base font-medium text-dark-900 hover:text-celeste-500 transition-colors duration-200">
                  Contacto
                </a>
                <a href="/actividades" className="block px-3 py-3 text-base font-medium text-dark-900 hover:text-celeste-500 transition-colors duration-200">
                  Actividades
                </a>
                <a href="/catalogo" className="block px-3 py-3 text-base font-medium text-dark-900 hover:text-celeste-500 transition-colors duration-200">
                  Cat&aacute;logo
                </a>
                <a href="/arbol" className="block px-3 py-3 text-base font-medium text-dark-900 hover:text-celeste-500 transition-colors duration-200">
                  &Aacute;rbol peronista
                </a>
              </div>
              <div className="py-6">
                <a
                  href="https://chat.whatsapp.com/DBS17Xx8SUVKN04Fu4wfl8"
                  className="block text-center px-4 py-3 text-base font-semibold text-white bg-azul-800 hover:bg-celeste-600 transition-colors duration-300"
                >
                  Afiliate ac&aacute; &rarr;
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </div>
  )
}
export default Navbar
