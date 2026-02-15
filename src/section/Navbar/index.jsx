import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {
    return(
        <dev className= 'flex flex-col gap-4 font-semibold' >
            <dev>
              <FontAwesomeIcon className='mr-2' icon={faChevronDown} />
              About</dev>
              
            <dev>Exprerience</dev>
            <dev>Projects</dev>
            <dev>Article</dev>
            </dev>
    )
}

export default Navbar;