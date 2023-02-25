import {categories} from '../utils/constants'
export const SideBar = ({setSelectedCatagory}) => {
  return (
    <div className='xs:w-full flex max-h-screen items-start justify-start xs:flex-row md:flex-col overflow-y-scroll '>
        {
            categories.map((cata) => (
                <button onClick={() => setSelectedCatagory(cata.name)} key={cata.name} className={`${cata.name === 'New'  ? 'bg-red-700' : 'bg-transparent'} ${cata.name === 'JS Mastery' ? 'xs:w-[500px] inline-block' : ''} hover:bg-red-700 rounded-2xl cursor-pointer p-[10px] sm:w-11/12 sm:mx-auto xs:mx-2 my-1 flex items-center justify-start`}>
                    <span className='mr-2'>{cata.icon}</span>
                    <span className='xs:text-sm md:text-auto'>{cata.name}</span>
                </button>
            ))
        }
    </div>
  )
}
