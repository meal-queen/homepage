const Footer = () => {
  const logo = '/theWhiteLogo.png';

  return (
    <div className=" w-screen md:h-40 h-32 bg-[#281C06]">
      <div className=" px-4 w-full h-full flex">
        <div className=" md:w-1/4 h-full flex items-center">
          <img src={logo} alt="logo" className=" md:w-64 w-28" />
        </div>
        <div className=" w-3/4 h-full md:flex items-center justify-end">
          <div className=" pt-8">
            <div className=" text-white text-end md:text-lg text-sm">
              개인정보처리방침 | 이용약관 | 제휴문의
            </div>
            <div className=" text-white md:text-start text-end md:text-base text-[0.7rem]">
              운영문의 070-1234-1234 / info@ssid.com (09:00~18:00 주말, 공휴일
              제외)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
