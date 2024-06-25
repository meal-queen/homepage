const LogoNBg = () => {
  const logo = '/theWhiteLogo.png';

  return (
    <div className=" w-screen pt-20">
      <div className="w-full flex">
        <div className=" md:h-[31rem] h-60 w-full flex bg-[url('./assets/images/bgImg.jpg')] bg-cover bg-no-repeat bg-center justify-center items-center">
          <img src={logo} alt="LOGO" className=" md:w-96 md:h-44 w-40" />
        </div>
      </div>
    </div>
  );
};

export default LogoNBg;
