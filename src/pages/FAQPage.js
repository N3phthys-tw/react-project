import Banner from "../components/Banner";
import FAQ from "../components/FAQ";

const FAQPage = () => {
  const qdata = [
    {
      id: 1,
      question: "活動現場有限制飲酒或酒精飲料販售嗎？",
      answer:
        "現場無酒精類飲料販售，但未限制觀眾自行攜帶入場，惟現場禁止酒後喧譁等影響其他觀眾或活動進行之行為。",
    },
    {
      id: 2,
      question: "若當天入場之後臨時有事，可以離開現場再回去嗎？",
      answer:
        "可以的，首次入場憑票券至入口服務處兌換手環後，當天可憑手環進出活動現場。入場手環須妥善保管，遺失恕不補發；若破損斷裂，須本人憑原手環親臨售票口更換。",
    },
    {
      id: 3,
      question: "現場可以露營嗎？",
      answer:
        "由於場地有限，現場無法提供紮營服務，但非常歡迎您攜帶野餐墊來野餐。",
    },
  ];

  return (
    <div>
      <Banner />
      <FAQ qdata={qdata} />
    </div>
  );
};

export default FAQPage;
