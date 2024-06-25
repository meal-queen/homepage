const Faculity = () => {
  return (
    <div className=" w-screen md:h-[35rem] h-[30rem] bg-[#FFC100]">
      <div className="w-full h-full md:px-8 px-4">
        <div className=" w-full pt-12 h-1/4">
          <div className=" xl:text-5xl tex-2xl font-bold text-center">
            회사의 식대 정책에 맞게 식권을 설정할 수 있습니다.
          </div>
          <div className=" md:text-2xl text-white text-center pt-4">
            식권 금액, 사용 일시, 지정 장소, 한도 등 기업에 맞게 세부적으로 세팅
            할 수 있습니다.
          </div>
        </div>
        <div className="h-3/4 pt-8 w-full flex justify-center">
          <div className=" md:w-full 2xl:w-[65%] w-full grid grid-rows-1 grid-cols-3">
            <div className=" md:w-52 lg:w-72 w-[7rem] md:h-80 h-60 mx-auto bg-white shadow-lg">
              <div className="h-full xl:p-4 p-2">
                <div className="h-2/5">
                  <div className=" text-xl font-semibold">중식</div>
                  <div className=" pt-4">
                    <div className=" xl:text-xl text-sm font-semibold">
                      <span className=" xl:text-3xl text-sm font-bold">
                        160,000원
                      </span>
                      / 매월
                    </div>
                    <div className=" xl:text-sm text-xs text-stone-400">
                      매월 한도 내에서 사용
                    </div>
                  </div>
                </div>
                <div className=" h-3/5 flex items-center">
                  <div className="h-4/5 flex-col flex justify-between">
                    <div className="w-full xl:text-lg text-[0.6rem] font-semibold">
                      사용시간:10:00~15:00
                    </div>
                    <div className="w-full xl:text-lg text-[0.6rem] font-semibold">
                      사용요일: 평일
                    </div>
                    <div className=" w-full xl:text-lg text-[0.6rem] font-semibold">
                      공휴일 설정: 설정 안 함
                    </div>
                    <div className=" w-full xl:text-lg text-[0.6rem] font-semibold">
                      지급기준: 매월 1일 지급
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" md:w-52 lg:w-72 w-[7rem] md:h-80 h-60 mx-auto bg-white shadow-lg">
              <div className=" h-full xl:p-4 p-2">
                <div className="h-2/5">
                  <div className=" text-xl font-semibold">석식</div>
                  <div className=" pt-4">
                    <div className=" xl:text-xl text-sm font-semibold">
                      <span className=" xl:text-3xl text-sm font-bold">
                        10,000원
                      </span>
                      / 매월
                    </div>
                    <div className=" xl:text-sm text-xs text-stone-400">
                      매월 한도 내에서 사용
                    </div>
                  </div>
                </div>
                <div className=" h-3/5 flex items-center">
                  <div className=" h-4/5 flex-col flex justify-between">
                    <div className=" w-full xl:text-lg text-[0.6rem] font-semibold">
                      사용시간: 17:00~22:00
                    </div>
                    <div className=" w-full xl:text-lg text-[0.6rem]  font-semibold">
                      사용요일: 평일
                    </div>
                    <div className=" w-full xl:text-lg text-[0.6rem]  font-semibold">
                      공휴일 설정: 설정 안 함
                    </div>
                    <div className=" w-full xl:text-lg text-[0.6rem]  font-semibold">
                      지급기준: 매월 1일 지급
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" md:w-52 lg:w-72 w-[7rem] md:h-80 h-60 mx-auto bg-white shadow-lg">
              <div className=" h-full xl:p-4 p-2">
                <div className="h-2/5">
                  <div className=" text-xl font-semibold">식사 신청</div>
                  <div className=" pt-4">
                    <div className=" xl:text-xl text-sm font-semibold">
                      <span className=" xl:text-3xl text-sm font-bold">
                        30,000원
                      </span>
                      / 매월
                    </div>
                    <div className=" xl:w-full xl:text-sm text-xs text-stone-400">
                      정해진 기간, 한도내에서 사용
                    </div>
                  </div>
                </div>
                <div className=" h-3/5 flex items-center">
                  <div className=" h-4/5 flex-col flex justify-between">
                    <div className=" w-full xl:text-lg text-[0.6rem] font-semibold">
                      사용시간: 17:00~22:00
                    </div>
                    <div className=" w-full xl:text-lg text-[0.6rem] font-semibold">
                      사용요일: 평일
                    </div>
                    <div className=" w-full xl:text-lg text-[0.6rem] font-semibold">
                      공휴일 설정: 설정 안 함
                    </div>
                    <div className=" w-full xl:text-lg text-[0.6rem] font-semibold">
                      지급기준: 신청내역 확인후 지급
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faculity;
