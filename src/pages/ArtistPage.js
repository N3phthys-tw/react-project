import ArtistCard from "../components/ArtistCard";
import Banner from "../components/Banner";
import Band1976 from "../images/1976.png";
import Freshjuicer from "../images/freshjuicer.png";
import Trash from "../images/trash.png";
import Collage from "../images/collage.png";
import Enno from "../images/enno.png";
import KST from "../images/kst.png";

const ArtistPage = () => {
  const bands = [
    {
      id: 1,
      time: "16:00-17:00",
      title: "1976",
      bandpics: Band1976,
      desc: "1976，因為最初的團員都出生於1976年。青春期的搖滾夢想持續至今，在創作中依舊揮灑著青春氣息，裹著英倫八零年代新浪潮與後龐克音樂的外衣，唱著迷霧般的城市哀愁，如詩的搖滾創作，分離憤怒與頹廢，瀟灑又如此的不肯自拔。 樂團自成立迄今，共發行六張專輯與EP，經歷團員更替、1976曾經停下腳步，卻沒有停下創作；堅持著他們的步調近15個年頭，終於在2010拿下金曲獎最佳樂團獎 。",
    },
    {
      id: 2,
      time: "16:30-17:30",
      title: "Trash",
      bandpics: Trash,
      desc: "TRASH樂團，臺灣樂團，於2009年12月成立，原成員主唱阿夜（林志融）、鼓手金魁剛（王韋翔），2013年吉他手頤原（林頤原）加入，2015年貝斯手博文（鄧博文）加入，由四人組成，音樂風格以Britpop、Alternative rock、Grunge為主，多首耳熟能詳的歌曲，參加過多項大型音樂祭(貢寮海洋音樂祭、覺醒音樂祭、山海屯音樂祭等等)，2019年謝和弦引薦之下成為華納音樂旗下樂團。",
    },
    {
      id: 3,
      time: "18:00-19:00",
      title: "Enno Cheng 鄭怡農",
      bandpics: Enno,
      desc: "無法捉摸的美麗星球、不斷突破的演出形式。鄭宜農於2022年發行生涯首張全台語專輯《水逆 Mercury Retrograde》 。總會有那些不順遂也無法理解的時刻，也許不是卡住了，只是我們還在尋找彼此。繼《給天王星》這張音樂階段的總結，鄭宜農再度挑戰自我，以「溝通」作為專輯核心。使用了不熟練的語言—台語，一邊學習一邊創作。將過去自我的累積全部刪除，重新以新生兒的姿態開啟整張專輯的創作之旅，從頭呼應了專輯的核心溝通。",
    },
    {
      id: 4,
      time: "18:30-19:30",
      title: "Fresh Juicer 血肉果汁機",
      bandpics: Freshjuicer,
      desc: "血肉果汁機，2006年創團，音樂風格以DEATHCORE 和HARDCORE 為主，擅長將電子與傳統五聲音階等元素巧妙融合在重金屬音樂之中。 曾參與過許多國際大型音樂祭演出，包括：香港CLOCKENFLAP、日本SUMMER SONIC、LOUD PARK 、和印尼最大型金屬音樂祭Hammer Sonic…等。 2021推出第三張全新專輯《GOLDEN 太子 BRO》，該年以此作品一舉獲得第12屆金音獎最佳現場演出、最佳樂團、最佳專輯獎三項大獎，隔年更榮獲第33屆金曲獎最佳樂團肯定。 無論作品和現場演出，血肉果汁機皆帶領台灣金屬樂團創造更多元且意象不到的亮眼呈現，更是演唱會票房秒殺完售的票房保證。",
    },
    {
      id: 5,
      time: "19:00-20:00",
      title: "Collage 珂拉琪",
      bandpics: Collage,
      desc: "由吉他手王家權以及主唱夏子組成。2019 年兩人在閃靈改編比賽首次合作，翻唱〈合掌〉，同年參與台語創作比賽「南面而歌」時正式組成樂團，命名為「珂拉琪Collage」。團名意指藝術創作手法「異材質拼貼」，呼應樂團歌曲的多元語言（台語、阿美族語、日文、英文），融合台灣民俗音樂、和風、原住民吟唱與金屬搖滾，並以殖民歷史、信仰、集體記憶為題材。2021 年底首次發行專輯《MEmento·MORI》。",
    },
    {
      id: 6,
      time: "19:30-20:30",
      title: "KST 康士坦的變化球",
      bandpics: KST,
      desc: "成立於2013年，曲風由後搖、Emo Punk 加入Hardcore及全員主唱的元素，複雜鼓點加上吉他、bass音牆，VJ與合成器的編制，影像與音樂結合爽度加倍。 團名來自希臘哲人赫拉克利特（Heraclitus）說的 “change is the only constant in life.”，唯⼀不變的就是永遠在變化，也是佛說無常。 2016年底發行第一張錄音室作品《擱淺的人》，無歌詞的演奏曲式佔了多數，其中最受歡迎的，是一定會大合唱的同名單曲〈擱淺的人〉，描述平凡人生活中遇到的大小事，吶喊、爆裂、現場超有力。 2020年第二張錄音室專輯《更迭》，於12月底正式發行。同名巡迴於北中南千人場地同步展開，創下台北場Legacy完售、加場亦迅速完售的佳績。 2021年以《更迭》專輯獲第32屆金曲獎最佳樂團提名。",
    },
  ];

  return (
    <div>
      <Banner />
      <ArtistCard bands={bands} />
    </div>
  );
};

export default ArtistPage;
