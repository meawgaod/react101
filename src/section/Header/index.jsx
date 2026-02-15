import fileResume from '../../assets/fileeiei.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
const Header = () => {
    return (
        <div className='flex flex-col gap-4'>
            <div className='text-3xl text-primaryTitle'>Piyamas Parikarn</div>
            <div className='text-primaryAccent font-semibold'>Computer Engineer</div>
            <div className='text-sm w-5/6'>I LOVE PIM</div>
            <div className='mt-4'>
                <a href={fileResume} target='_blank'>
                    <span className='rounded-md bg-primaryTitle text-white py-2 px-4'>
                        View Resume
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