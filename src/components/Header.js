import { Link } from 'react-scroll';

const Header = () => {
  const logoImg = '/simpleLogo.png';
  const headerHeight = 5 * 16;

  return (
    <div
      className="w-screen h-20 bg-white flex fixed"
      style={{ height: '5rem' }}
    >
      <div className="w-full flex md:px-8">
        <div className="md:w-2/6 flex items-center md:justify-start justify-center w-full">
          <Link
            to="logoNBg"
            smooth={true}
            duration={500}
            offset={-headerHeight}
          >
            <img src={logoImg} alt="LOGO" className="md:w-[200px] w-28" />
          </Link>
        </div>
        <div className="md:w-4/6 hidden md:flex">
          <div className="h-full flex items-center justify-between w-full">
            <Link
              to="introduction"
              smooth={true}
              duration={500}
              offset={-headerHeight}
            >
              서비스 소개
            </Link>
            <Link
              to="faculty"
              smooth={true}
              duration={500}
              offset={-headerHeight}
            >
              서비스 유형
            </Link>
            <Link
              to="benefits"
              smooth={true}
              duration={500}
              offset={-headerHeight}
            >
              도입 혜택
            </Link>
            <Link
              to="customer"
              smooth={true}
              duration={500}
              offset={-headerHeight}
            >
              주요 고객사
            </Link>
            <Link
              to="download"
              smooth={true}
              duration={500}
              offset={-headerHeight}
            >
              가맹점 가입신청
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
