export interface ProfileStat {
  label: string;
  value: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  image: string;
}

export interface VideoItem {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
}
