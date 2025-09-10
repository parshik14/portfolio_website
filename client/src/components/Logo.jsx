import { useNavigate } from 'react-router-dom'
import onlyLogo from '../assets/onlyLogo.png'
const Logo = () => {

    const navigate = useNavigate()
    const handleclick = () => {
        navigate("/")
    }

    return (
        <div>
            <img src={onlyLogo} alt="pc" className='cursor-pointer h-[30px] bg-cover'
                onClick={handleclick} />
        </div>
    )
}

export default Logo