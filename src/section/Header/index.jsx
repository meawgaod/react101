import fileResume from '../../assets/fileeiei.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { data } from '../../Contents/Header'
const Header = () => {
    return (
        <div className='flex flex-col gap-4'>
            <div className='text-3xl text-primaryTitle font-semibold'>{data.name}</div>
            <div className='text-primaryAccent font-semibold'>{data.title}</div>
            <div className='text-sm w-5/6'>{data.caption}</div>
            <div className='mt-4'>
                <a href={fileResume} target='_blank'>
                    <span className='rounded-md bg-primaryTitle text-white py-2 px-4'>
                        {data.btnText}
                        <span className='rotate-90 inline-block ml-1 text-sm'>
                            <FontAwesomeIcon className='animate-bounce' icon={faChevronDown} />
                        </span>
                    </span>
                </a>
            </div>
        </div>
    )
}

export default Header;