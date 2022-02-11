import GlobalLineIcon from 'remixicon-react/GlobalLineIcon';
import InstagramLineIcon from 'remixicon-react/InstagramLineIcon';
import LinkedinFillIcon from 'remixicon-react/LinkedinFillIcon';
import GithubFillIcon from 'remixicon-react/GithubFillIcon';


export default function DevelopmentTeam() {
    return (
        <>
            <div className="text-center flex flex-col justify-center items-center py-7">
                <img src="./images/team/dev/sreemikil.png" alt="Sreemikil T Manoharan" className="w-24 h-24 object-cover rounded-full" />
                <p className="font-semibold text-sm text-white pt-4">Sreemikil T Manoharan</p>
                <p className="font-semibold text-sm text-secondary text-opacity-70">UI/UX Designer</p>
                <div className='flex space-x-4 pt-4'>
                    <a href="https://sreemikil.github.io/" target="_blank" rel="noopener noreferrer">
                        <GlobalLineIcon className="w-5 h-5 text-icon hover:text-white" />
                    </a>
                    <a href="https://www.instagram.com/sreemikil_t/" target="_blank" rel="noopener noreferrer">
                        <InstagramLineIcon className="w-5 h-5 text-icon hover:text-white" />
                    </a>
                    <a href="https://www.linkedin.com/in/sreemikil-t-manoharan-4a050a188/" target="_blank" rel="noopener noreferrer">
                        <LinkedinFillIcon className="w-5 h-5 text-icon hover:text-white" />
                    </a>
                </div>
            </div>
            <div className="text-center flex flex-col justify-center items-center py-7">
                <img src="./images/team/dev/suvarnesh.png" alt="Suvarnesh K M" className="w-24 h-24 object-cover rounded-full" />
                <p className="font-semibold text-sm text-white pt-4">Suvarnesh K M</p>
                <p className="font-semibold text-sm text-secondary text-opacity-70">Frontend Developer</p>
                <div className='flex space-x-4 pt-4'>
                    <a href="https://github.com/suvarneshkm/" target="_blank" rel="noopener noreferrer">
                        <GithubFillIcon className="w-5 h-5 text-icon hover:text-white" />
                    </a>
                    <a href="https://www.instagram.com/_suvarnesh.rdg_/" target="_blank" rel="noopener noreferrer">
                        <InstagramLineIcon className="w-5 h-5 text-icon hover:text-white" />
                    </a>
                    <a href="https://www.linkedin.com/in/suvarnesh-km/" target="_blank" rel="noopener noreferrer">
                        <LinkedinFillIcon className="w-5 h-5 text-icon hover:text-white" />
                    </a>
                </div>
            </div>
        </>
    )
}
