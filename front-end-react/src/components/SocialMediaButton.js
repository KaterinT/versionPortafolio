import { BsTwitter, BsInstagram,BsLinkedin,BsGithub} from 'react-icons/bs'

const SocialMediaButton = () => {
  return (
    <div className='app__socialButton'>
       <div>
        <a href="https://github.com/KaterinT" target="_blank">
          <BsGithub />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/katerin-tello-ura/" target="_blank">
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a href="https://twitter.com/urtkate7" target="_blank">
          <BsTwitter />
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/katerintll/" target="_blank">
          <BsInstagram />
        </a>
      </div>
    </div>
  )
}

export default SocialMediaButton