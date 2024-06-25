const Benefits = () => {
  const img1 = '/benefitsImg1.png';
  const img2 = '/benefitsImg2.png';
  const img3 = '/benefitsImg3.png';
  const img4 = '/benefitsImg4.png';

  return (
    <div className=" w-screen md:h-[38rem] h-[120rem] bg-white">
      <div className=" w-full flex justify-center">
        <div>
          <div className=" md:text-5xl text-2xl font-bold text-center pt-12 py-3">
            고객사 도입혜택
          </div>
          <div className=" md:text-2xl py-2">
            식사임당이 준비한 특별한 도입혜택 놓치지 마세요!
          </div>
        </div>
      </div>
      <div className=" w-full pt-4 flex justify-center">
        <div className=" md:w-4/5 w-full flex justify-center">
          <div className=" md:w-full md:flex grid gap-4 md:justify-between">
            <div className=" w-[16.75rem] h-[27rem] bg-white rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
              <div className=" p-5 h-[55%]">
                <div className=" w-full">
                  <div className=" flex justify-start items-center">
                    <div className=" bg-black flex justify-center items-center rounded-sm">
                      <div className=" p-1 text-white">도입혜택01</div>
                    </div>
                  </div>
                  <div className=" py-4">
                    <div className=" text-3xl font-bold">고객사 혜택</div>
                  </div>
                  <div className=" min-[1100px]:block md:hidden">
                    1인 기업부터 기업, 협회, 단체까지 경영 지원, 영업, 마케팅 등
                    기업 운영에 도움이 될 다양한 혜택 서비스를 제공합니다.
                  </div>
                </div>
              </div>
              <div className=" h-[45%] flex justify-start rounded-bl-lg">
                <img src={img1} alt="img1" className="rounded-bl-lg" />
              </div>
            </div>
            <div className=" w-[16.75rem] h-[27rem] bg-[#FECB4C] rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
              <div className=" p-5 h-[55%]">
                <div className=" w-full">
                  <div className=" flex justify-start items-center">
                    <div className=" bg-black flex justify-center items-center rounded-sm">
                      <div className=" p-1 text-white">도입혜택02</div>
                    </div>
                  </div>
                  <div className=" py-4">
                    <div className=" text-3xl font-bold">10만 포인트 지급</div>
                  </div>
                  <div className=" min-[1100px]:block md:hidden">
                    고객사와 임직원 모든 분들에게 1인당 10만
                    포인트(선할인혜택)를 선물합니다.
                  </div>
                </div>
              </div>
              <div className=" h-[45%] flex justify-end rounded-bl-lg">
                <img src={img2} alt="img2" className="rounded-bl-lg" />
              </div>
            </div>
            <div className=" w-[16.75rem] h-[27rem] bg-white rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
              <div className=" p-5 h-[55%]">
                <div className=" w-full">
                  <div className=" flex justify-start items-center">
                    <div className=" bg-black flex justify-center items-center rounded-sm">
                      <div className=" p-1 text-white">도입혜택03</div>
                    </div>
                  </div>
                  <div className=" py-4">
                    <div className=" text-3xl font-bold">드림클럽 가입</div>
                  </div>
                  <div className="min-[1100px]:block md:hidden">
                    가입 고객사 중 복지물 일정을 희망하는 기업에 한 해 상품 일정
                    및 다양한 홍보/마케팅 혜택을 지원 받을 수 있습니다.
                    <div className=" min-[1000px]:hidden">
                      (현재 서비스 준비중)
                    </div>
                  </div>
                </div>
              </div>
              <div className=" h-[45%] flex rounded-bl-lg">
                <img src={img3} alt="img3" className="rounded-bl-lg" />
              </div>
            </div>
            <div className=" w-[16.75rem] h-[27rem] bg-white rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
              <div className=" p-5 h-[55%]">
                <div className=" w-full">
                  <div className=" flex justify-start items-center">
                    <div className=" bg-black flex justify-center items-center rounded-sm">
                      <div className=" p-1 text-white">도입혜택04</div>
                    </div>
                  </div>
                  <div className=" py-4">
                    <div className=" text-3xl font-bold">
                      단 한 번의 구축으로 평생 무료!
                    </div>
                  </div>
                  <div className=" min-[1100px]:block md:hidden">
                    <div>복지드림 구축 시,</div>
                    <div>별도 계약 갱신 없이!</div>
                    <div>무기한으로 이용이 가능합니다.</div>
                  </div>
                </div>
              </div>
              <div className=" h-[45%] flex justify-end rounded-br-lg">
                <img src={img4} alt="img4" className="rounded-br-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
