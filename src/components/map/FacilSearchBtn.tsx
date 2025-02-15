import { Camping } from '@/types/Camping';

type FacilSearchBtnProps = {
  facilClickHandler: (
    lat: number,
    lon: number,
    code: `${kakao.maps.CategoryCode}`,
  ) => void;
  facil: string;
  list: Pick<
    Camping,
    | 'contentId'
    | 'firstImageUrl'
    | 'facltNm'
    | 'addr1'
    | 'induty'
    | 'mapY'
    | 'mapX'
    | 'tel'
  >;
};

const FacilSearchBtn = ({
  facilClickHandler,
  facil,
  list,
}: FacilSearchBtnProps) => {
  let code: `${kakao.maps.CategoryCode}` = '';
  switch (facil) {
    case '병원':
      code = 'HP8';
      break;

    case '약국':
      code = 'PM9';
      break;

    case '편의점':
      code = 'CS2';
      break;
  }
  return (
    <button
      className="bg-[#FD470E] text-white text-base font-semibold w-full p-2 rounded-md hover:bg-[#e0400e] transition-colors"
      onClick={() =>
        facilClickHandler(Number(list.mapY), Number(list.mapX), code)
      }
    >
      {facil}
    </button>
  );
};
export default FacilSearchBtn;
