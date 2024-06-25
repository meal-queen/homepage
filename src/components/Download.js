const Download = () => {
  return (
    <div className=" w-screen md:h-[30rem] h-[40rem] bg-white">
      <div className=" w-full md:h-1/3 h-1/5 flex justify-center">
        <div>
          <div className=" md:text-5xl text-2xl font-bold text-center md:pt-12 pt-6 py-3">
            소개서 다운로드
          </div>
          <div className="md:text-2xl py-2">
            우리 회사에 필요한 소개서를 다운로드 해보세요!
          </div>
        </div>
      </div>
      <div className=" w-full md:h-2/3 h-4/5 flex justify-center items-center">
        <div className=" md:w-full h-full md:flex grid md:justify-between items-center min-[1200px]:px-16 px-2">
          <div className=" min-[1200px]:w-96 md:w-60 lg:w-60 w-[22rem] md:h-48 h-36 border border-black">
            <div className=" w-full h-full flex flex-col justify-center py-3">
              <div className=" w-full h-1/3 flex justify-center items-center">
                <div className=" md:text-3xl text-2xl font-bold">
                  모바일 식권
                </div>
              </div>
              <div className=" w-full h-1/3 flex justify-center items-center">
                <div className="">
                  다양한 푸드 서비스를 앱 하나로 즐기는 식권 플랫폼
                </div>
              </div>
              <div className=" w-full h-1/3 flex justify-center items-center">
                <div className=" w-40 h-10 bg-[#FFC100] flex justify-center items-center">
                  <div className=" text-white text-2xl">다운로드</div>
                </div>
              </div>
            </div>
          </div>
          <div className=" min-[1200px]:w-96 md:w-60 lg:w-60 w-[22rem] md:h-48 h-36 border border-black">
            <div className=" w-full h-full flex flex-col justify-center py-3">
              <div className=" w-full h-1/3 flex justify-center items-center">
                <div className=" md:text-3xl text-2xl font-bold">
                  찾아가는 구내식당
                </div>
              </div>
              <div className=" w-full h-1/3 flex justify-center items-center">
                <div className="">
                  맛있는 음식을 사무실에서 편하게 즐기는 구독 서비스
                </div>
              </div>
              <div className=" w-full h-1/3 flex justify-center items-center">
                <div className=" w-40 h-10 bg-[#FFC100] flex justify-center items-center">
                  <div className=" text-white text-2xl">다운로드</div>
                </div>
              </div>
            </div>
          </div>
          <div className=" min-[1200px]:w-96 md:w-60 lg:w-60 w-[22rem] md:h-48 h-36 border border-black">
            <div className=" w-full h-full flex flex-col justify-center py-3">
              <div className=" w-full h-1/3 flex justify-center items-center">
                <div className=" md:text-3xl text-2xl font-bold">
                  식사임당 스낵
                </div>
              </div>
              <div className=" w-full h-1/3 flex justify-center items-center">
                <div className="">
                  다양한 간식을 합리적인 가격에 즐기는 구독 서비스
                </div>
              </div>
              <div className=" w-full h-1/3 flex justify-center items-center">
                <div className=" w-40 h-10 bg-[#FFC100] flex justify-center items-center">
                  <div className=" text-white text-2xl">다운로드</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
