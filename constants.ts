import { GalleryItem, ProfileStat, VideoItem } from './types';

export const HERO_TITLE = "Pie's Photo Library";
export const HERO_SUBTITLE = "The Sweetest Slice of Life";
export const QUOTE = "세상에서 가장 달콤하고 폭신한 고양이, 파이의 기록물입니다.";

export const PROFILE_STATS: ProfileStat[] = [
  { label: "이름", value: "파이 (Pie)" },
  { label: "생일", value: "202X년 X월 X일" },
  { label: "성별", value: "여아" },
  { label: "묘종", value: "코리안 숏헤어" },
  { label: "좋아하는 것", value: "츄르, 햇볕이 잘 드는 창가, 바스락거리는 종이봉투" },
  { label: "싫어하는 것", value: "갑작스러운 청소기 소리, 발톱 깎기" },
];

export const GALLERIES: GalleryItem[] = [
  {
    id: 'morning',
    title: 'Lazy Mornings',
    subtitle: '아침의 파이',
    description: '파이의 하루는 눈부신 햇살과 함께 시작됩니다. 가장 나른하고 평화로운 순간들.',
    details: ['Main Shot: 기지개를 켜는 파이', 'Detail: 젤리(발바닥) 근접샷'],
    image: 'https://picsum.photos/800/600?random=1',
  },
  {
    id: 'zoomie',
    title: 'Zoomie Hours',
    subtitle: '우당탕탕 활력소',
    description: '가끔은 엉뚱하고 장난기 넘치는 모습! 집안을 누비는 파이의 역동적인 찰나를 담았습니다.',
    details: ['Action: 낚싯대 장난감을 향해 점프하는 순간', 'Funny: 동공이 커진 "확대범" 파이'],
    image: 'https://picsum.photos/800/800?random=2', // Square aspect for variety
  },
  {
    id: 'dreams',
    title: 'Sweet Dreams',
    subtitle: '꿈꾸는 파이',
    description: '잠들 때가 가장 천사 같은 법이죠. 세상에서 가장 편안한 자세로 잠든 파이의 모습들.',
    details: ['Mood: 식빵 굽는 자세로 조는 모습', 'Focus: 분홍색 코와 수염의 디테일'],
    image: 'https://picsum.photos/800/600?random=3',
  },
];

export const SHORTS: VideoItem[] = [
  {
    id: 'video1',
    title: '골골송 라이브',
    description: '파이의 기분 좋은 진동음을 들어보세요.',
    thumbnail: 'https://picsum.photos/600/800?random=10',
    // Updated to raw GitHub URL for direct playback
    videoUrl: 'https://github.com/ryuminn/ai-test/raw/cc8a14f86d3ecc58472a11adb1b0f8ba8280cd8e/Generated%20File%20February%2003%2C%202026%20-%203_44PM.mp4' 
  },
  {
    id: 'video2',
    title: '꾹꾹이 타임',
    description: '담요 위에서 정성스럽게 반죽을 만드는 파이.',
    thumbnail: 'https://picsum.photos/600/800?random=11',
    // Updated to raw GitHub URL for direct playback
    videoUrl: 'https://github.com/ryuminn/ai-test/raw/cc8a14f86d3ecc58472a11adb1b0f8ba8280cd8e/Generated%20video%201.mov'
  },
];

export const MESSAGE = {
  title: "Message to Pie",
  body: "파이야, 우리에게 와줘서 고마워. 너의 모든 계절과 모든 순간을 이곳에 기록해둘게. 아프지 말고 오래도록 우리 곁에서 '달콤한 파이'가 되어줘!",
};

export const CONTACT = {
  instagram: "@ryuminn",
  instagramUrl: "https://www.instagram.com/ryuminn/",
  email: "youminyum@gmail.com",
};
