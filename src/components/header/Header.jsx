import './header.css';

export const Header = () => {
  return (
    <>
                <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
                            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                                <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Quantum Rift Labs</span>
                                </a>
                                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                                </div>
                            </div>
                </nav>

    </>
  )
}
