import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons'
import { faPython } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
    return(
         <div className='flex items-end ml-2 gap-2 text-2xl'>
              <FontAwesomeIcon className='hover:scale-125 hover:text-primaryTitle transition-all' icon={faGoogle} />
              <FontAwesomeIcon className='hover:scale-125 hover:text-primaryTitle transition-all' icon={faSquareInstagram} />
              <FontAwesomeIcon className='hover:scale-125 hover:text-primaryTitle transition-all' icon={faPython} />
          </div>
    )
}

export default Contact;