const AppIntroduction = () => {
  const plusIcon = '/plusicon.png';
  const appSemple = '/AppSemple.png';

  return (
    <div className=" w-screen md:h-[31rem] h-[18rem]">
      <div className=" md:px-16 px-8 md:pt-12 pt-6 h-full">
        <div className=" md:flex w-full h-full">
          <div className=" min-[1200px]:w-3/5 w-full">
            <div className=" md:text-6xl text-xl font-medium">
              매일 다양한 기업들이
              <br /> <span className=" text-[#F8C303]">식사임당</span>을
              경험하고 있습니다.
            </div>
            <div className=" text-[#909090] md:text-3xl text-base pt-5 md:pr-40 pr-4">
              직장인들은 언제 어디서나 맛있는 식사를 할 수 있도록 맞춤 서비스를
              지원합니다.
            </div>
            <div className="flex min-[1200px]:pt-8 pt-2">
              <div className=" grid grid-cols-2">
                <div>
                  <div className=" flex md:h-28 h-12">
                    <div className="h-[20px] md:text-7xl text-3xl font-semibold md:pt-8 pt-4">
                      30만
                    </div>
                    <img
                      src={plusIcon}
                      alt="plus"
                      className=" md:w-16 w-8 md:h-16 h-8"
                    />
                  </div>
                  <div className=" md:text-xl text-sm text-[#909090] md:pt-4 pt-2">
                    식권 이용 임직원 수
                  </div>
                </div>
                <div>
                  <div className=" flex md:h-28 h-12">
                    <div className=" h-[20px] md:text-7xl text-3xl font-semibold md:pt-8 pt-4">
                      1,600만
                    </div>
                    <img
                      src={plusIcon}
                      alt="plus"
                      className=" md:w-16 w-8 md:h-16 h-8"
                    />
                  </div>
                  <div className=" md:text-xl text-sm text-[#909090] md:pt-4 pt-2">
                    사용된 식권
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden min-[1200px]:w-2/5 md:justify-end min-[1200px]:flex">
            <img src={appSemple} alt="appsemple" className="w-[27rem]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppIntroduction;
